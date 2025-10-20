<template>
  <div class="container mx-auto">
  <h2 id="previous-seasons" data-nosnippet class="text-xl md:text-3xl xl:text-4xl scroll-mt-[120px] md:scroll-mt-[100px]">PREVIOUS 13 SEASONS</h2>
    <p class="text-sm md:text-base xl:text-xl mb-4 xl:mb-8 md:mb-6">collections</p>
    <div 
      class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0 xl:mb-5 md:mb-4 mb-3 cursor-grab active:cursor-grabbing" 
      ref="tabsContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="handleMouseLeave"
      @mouseenter="stopAutoPlay"
    >
      <div class="flex gap-8 xl:mb-5 md:mb-4 mb-3 whitespace-nowrap pb-4 md:pb-0 pr-4 md:pr-0 pl-4 md:pl-0">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-start md:gap-2 gap-1 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-20': currentTab !== index,
          }"
        >
          <span class="text-xl xl:text-4xl md:text-3xl transition-colors duration-300">{{
            tab.year
          }}</span>
          <span class="xl:max-w-[120px] md:max-w-[100px] max-w-[80px] xl:text-base text-sm text-left truncate transition-colors duration-300">
            {{ tab.season }}
          </span>
        </button>
      </div>
    </div>
    <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
      <div class="flex md:grid md:grid-cols-3 gap-4 px-4 md:px-0">
        <div
          v-for="(image, index) in currentImages"
          :key="`${currentTab}-${index}`"
          class="overflow-hidden rounded-lg flex-shrink-0 w-[280px] md:w-auto transition-all duration-700 ease-in-out"
          :style="{ 
            opacity: isTransitioning ? 0.3 : 1
          }"
        >
          <div class="flex flex-col gap-5">
            <NuxtLink to="/gallery">
              <img 
                v-bind="getOptimizedImageAttributes(image, tabs[currentTab].designers[index])"
                class="w-full h-full object-cover transition-all duration-700 ease-in-out"
                :loading="index === 0 ? 'eager' : 'lazy'"
              />
            </NuxtLink>
            <span class="text-black transition-all duration-700 ease-in-out">{{ tabs[currentTab].designers[index] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { tabs } from '@/constants/images';
import { getOptimizedImageAttributes, preloadImages } from '@/utils/imageOptimization';

const currentTab = ref(0);
const tabsContainer = ref(null);
const isTransitioning = ref(false);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Debug helper for anchor clicks
const logAnchorDebug = (id) => {
  try {
    const el = document.getElementById(id);
    if (!el) {
      console.log('[anchor-debug]', id, 'not found');
      return;
    }
    const rectBefore = el.getBoundingClientRect();
    console.log('[anchor-debug] BEFORE', id, {
      rectTop: rectBefore.top,
      scrollY: window.scrollY,
    });
    setTimeout(() => {
      const rectAfter = el.getBoundingClientRect();
      console.log('[anchor-debug] AFTER', id, {
        rectTop: rectAfter.top,
        scrollY: window.scrollY,
      });
    }, 400);
  } catch (e) {
    console.log('[anchor-debug] error', e);
  }
};
let autoPlayInterval = null;

// Загружаем только текущие изображения
const currentImages = computed(() => {
  return tabs[currentTab.value].images;
});

// Предзагрузка следующего набора изображений
const preloadNextImages = () => {
  const nextTabIndex = (currentTab.value + 1) % tabs.length;
  preloadImages(tabs[nextTabIndex].images);
};

const startDrag = (e) => {
  isDragging = true;
  stopAutoPlay(); // Останавливаем автоплей при начале перетаскивания
  const slider = tabsContainer.value;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const slider = tabsContainer.value;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
  isDragging = false;
  // Перезапускаем автоплей после окончания перетаскивания
  setTimeout(() => {
    startAutoPlay();
  }, 500);
};

const handleMouseLeave = () => {
  stopDrag();
  startAutoPlay();
};

const selectTab = (index) => {
  if (index === currentTab.value) return;
  
  // Начинаем анимацию
  isTransitioning.value = true;
  
  // Небольшая задержка для плавного перехода
  setTimeout(() => {
    currentTab.value = index;
    // Предзагружаем следующий набор изображений после смены таба
    nextTick(() => {
      preloadNextImages();
    });
    
    // Завершаем анимацию
    setTimeout(() => {
      isTransitioning.value = false;
    }, 100);
  }, 200);
  
  // Перезапускаем автоплей после ручного переключения
  startAutoPlay();
};

const startAutoPlay = () => {
  stopAutoPlay(); // Останавливаем предыдущий интервал если есть
  autoPlayInterval = setInterval(() => {
    const nextIndex = (currentTab.value + 1) % tabs.length;
    
    // Начинаем анимацию
    isTransitioning.value = true;
    
    setTimeout(() => {
      currentTab.value = nextIndex;
      // Предзагружаем следующий набор изображений
      nextTick(() => {
        preloadNextImages();
      });
      
      // Завершаем анимацию
      setTimeout(() => {
        isTransitioning.value = false;
      }, 100);
    }, 200);
  }, 5000); // 5 секунд
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

onMounted(() => {
  // Предзагружаем изображения для следующего таба
  preloadNextImages();
  // Запускаем автоплей с небольшой задержкой
  setTimeout(() => {
    startAutoPlay();
  }, 1000);
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}


.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

/* Кастомный скроллбар */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Для Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}

.custom-scrollbar {
  -webkit-user-select: none;
  user-select: none;
}
</style>
