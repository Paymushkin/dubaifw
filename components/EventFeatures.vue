<template>
  <section 
    class="md:mb-[100px] mb-12 flex flex-col" 
    v-if="data"
  >
    <!-- Заголовок с настраиваемым цветом фона -->
    <div v-if="data.title" class="mb-8 md:10 lg:mb-12">
      <div class="md:flex md:items-center">
        <h2 :id="data.id || ''" data-nosnippet class="text-2xl md:text-3xl lg:text-4xl">
          <a :href="data.id ? `#${data.id}` : ''" class="hover:opacity-80 transition-opacity" v-html="data.title || ''"></a>
        </h2>
        <a
          v-if="data.subtitle" 
          class="text-white mt-2 md:mt-0 md:ml-2 px-2 py-1 md:px-4 md:py-1 text-xl md:text-2xl lg:text-3xl block md:inline-block" 
          :style="{ backgroundColor: data.subtitleBgColor || '#6c757d' }"
          :href="data.id ? `#${data.id}` : '' "
        >
          {{ data.subtitle }}
        </a>
      </div>
    </div>

    <!-- Mobile Tabs -->
    <div class="md:hidden mb-4 bg-white">
      <div class="flex w-full border-b border-gray-200">
        <div
          v-for="(day, index) in data.days || []"
          :key="index"
          class="flex flex-col items-center justify-center flex-1 px-2 py-3 border-r border-gray-300 last:border-r-0 transition-colors duration-300"
          :class="[
            'transition-shadow',
          ]"
          :style="getMobileTabStyle(index, day)"
          @click="selectMobileDay(index)"
        >
          <span class="text-sm font-medium">{{ getMobileTabLabel(index, day.date) }}</span>
          <span class="text-xs opacity-75">Nov</span>
        </div>
      </div>
    </div>

    <!-- Mobile Selected Day Title -->
    <div class="md:hidden mb-4" v-if="(data.days || []).length">
      <h3 class="text-base font-medium text-center" v-html="(data.days[selectedMobileDayIndex] && (data.days[selectedMobileDayIndex].title || '')) || ''"></h3>
    </div>

    <!-- Desktop Tabs -->
    <div 
      class="hidden md:block overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing mb-[20px] md:mb-[25px] lg:mb-[34px]"
      ref="daysContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDragTouch"
      @touchmove="onDragTouch"
      @touchend="stopDrag"
    >
      <div class="flex md:gap-10 gap-5 whitespace-nowrap pb-4 pl-4 md:pl-0" style="padding-right: 100vw;">
        <div 
          v-for="(day, index) in data.days || []" 
          :key="index"
          class="flex flex-col items-start gap-1 flex-shrink-0"
          :class="{ 'opacity-50': !day.highlighted }"
        >
          <h3 
            class="text-lg md:text-xl lg:text-3xl 2xl:text-4xl transition-colors duration-300"
            :class="{ 'text-black': day.highlighted, 'text-gray-400': !day.highlighted }"
            v-html="day.title"
          >
          </h3>
          <span class="text-xs md:text-sm lg:text-base">{{ day.date }}</span>
        </div>
      </div>
    </div>


    <BaseButton 
      v-if="data.buttonText && !data.buttonLink" 
      @click="showContactForm = true" 
      id="features-participate-button" 
      variant="primary" 
      class="mb-[30px] md:mb-[40px] lg:mb-[50px] ml-auto text-sm md:text-base"
    >
      <span>{{ data.buttonText }}</span>
      <span>></span>
    </BaseButton>

    <NuxtLink 
      v-if="data.buttonText && data.buttonLink" 
      :to="data.buttonLink"
      class="inline-block mb-[30px] md:mb-[40px] lg:mb-[50px] ml-auto align-end"
    >
      <BaseButton 
        variant="primary" 
        class="text-sm md:text-base"
      >
        <span>{{ data.buttonText }}</span>
        <span>></span>
      </BaseButton>
    </NuxtLink>

    <!-- Карточки -->
    <div class="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5">
      <div 
        v-for="(card, index) in data.cards || []" 
        :key="index"
        class="border border-black rounded-lg overflow-hidden"
      >
        <div class="h-[300px] md:h-[360px] lg:h-[460px] overflow-hidden">
          <img 
            v-if="card.type !== 'video'"
            :src="card.image" 
            :alt="card.title"
            :loading="index === 0 ? 'eager' : 'lazy'"
            class="w-full h-full object-cover"
          />
          <video
            v-else-if="card.type === 'video'"
            :ref="(el) => setVideoRef(el, index)"
            :src="card.video"
            :poster="card.poster"
            class="w-full h-full object-cover"
            muted
            loop
            playsinline
            preload="metadata"
            @loadeddata="handleVideoLoad($event, index)"
            @error="handleVideoError"
          ></video>
        </div>
        <div class="p-5 md:p-7 lg:p-10">
          <h4 class="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3 lg:mb-4" v-html="card.title"></h4>
          <p class="text-base md:text-lg mb-2 md:mb-3 lg:mb-4" v-html="card.subtitle"></p>
          <p class="text-sm md:text-base" v-html="card.description"></p>
        </div>
      </div>
    </div>

    <!-- Мобильные карточки с горизонтальным скроллом -->
    <div class="md:hidden overflow-x-auto custom-scrollbar card-container -mx-5 px-5">
      <div class="flex gap-5 pb-4">
        <div 
          v-for="(card, index) in data.cards || []" 
          :key="index"
          class="border border-black rounded-lg overflow-hidden flex-shrink-0 w-[85vw] max-w-[360px] card-item"
        >
          <div class="h-[260px] overflow-hidden">
            <img 
              v-if="card.type !== 'video'"
              :src="card.image" 
              :alt="card.title"
              loading="lazy"
              class="w-full h-full object-cover"
            />
            <video
              v-else-if="card.type === 'video'"
              :ref="(el) => setVideoRef(el, `mobile-${index}`)"
              :src="card.video"
              :poster="card.poster"
              class="w-full h-full object-cover"
              muted
              loop
              playsinline
              preload="metadata"
              @loadeddata="handleVideoLoad($event, `mobile-${index}`)"
              @error="handleVideoError"
            ></video>
          </div>
          <div class="p-5">
            <h4 class="text-xl font-medium mb-2" v-html="card.title"></h4>
            <p class="text-base mb-3" v-html="card.subtitle"></p>
            <p class="text-sm" v-html="card.description"></p>
          </div>
        </div>
        <div class="flex-shrink-0 w-5"></div>
      </div>
    </div>
    
    <!-- Подробный текст для блока Digital Products -->
    <div v-if="data.detailedText" v-html="data.detailedText" class="mt-8"></div>
    
    <ContactForm :is-open="showContactForm" @close="showContactForm = false" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ContactForm from './ContactForm.vue';
import { useVideoVisibility } from '@/composables/useVideoVisibility';

const showContactForm = ref(false);
const { setVideoRef, cleanup, isVisible } = useVideoVisibility();

// Mobile tabs functionality (read-only display)
const selectedMobileDayIndex = ref(0);
const selectMobileDay = (index) => {
  selectedMobileDayIndex.value = index;
};

// Drag functionality for horizontal scroll
const daysContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

const startDrag = (e) => {
  isDragging = true;
  const slider = daysContainer.value;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const startDragTouch = (e) => {
  isDragging = true;
  const slider = daysContainer.value;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const slider = daysContainer.value;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
};

const onDragTouch = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const slider = daysContainer.value;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
  isDragging = false;
};

// Mobile tab helper functions
const getDayNumber = (date) => {
  if (!date) return '1';
  const match = date.match(/(\d+)/);
  return match ? match[1] : '1';
};


// Custom labels for mobile tabs as requested: 4, 5-6, 8-9, 10-11, 10, 12-13
const getMobileTabLabel = (index, date) => {
  const labels = ['4', '5-6', '8-9', '10-11', '10', '12-13'];
  if (index >= 0 && index < labels.length) return labels[index];
  // Fallback to parsed number if more days exist
  return getDayNumber(date);
};

// Style generator for mobile tabs: highlighted -> black bg, selected -> block color
const getMobileTabStyle = (index, day) => {
  const isSelected = selectedMobileDayIndex.value === index;
  const blockColor = (typeof props?.data?.subtitleBgColor === 'string' && props.data.subtitleBgColor) || '#000';
  let backgroundColor = '#f3f4f6'; // gray-100 default
  let color = '#9ca3af'; // gray-400 default

  // Selected tab takes precedence and uses block color
  if (isSelected) {
    backgroundColor = blockColor;
    color = '#fff';
  } else if (day && day.highlighted) {
    backgroundColor = '#000';
    color = '#fff';
  }

  return { backgroundColor, color };
};

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      title: '',
      subtitle: '',
      subtitleBgColor: '#6c757d',
      days: [],
      cards: [],
      buttonText: '',
      buttonLink: ''
    })
  }
});

const handleVideoLoad = (event, index) => {
  // Видео уже будет отслеживаться благодаря ref
  console.log(`Video ${index} loaded`);
};

const handleVideoError = (event) => {
  console.error('Video loading error:', event);
  event.target.load();
};

onUnmounted(() => {
  cleanup();
});
</script>

<style>
.custom-scrollbar {
  scrollbar-width: none; /* Для Firefox */
  -ms-overflow-style: none; /* Для IE и Edge */
}

.custom-scrollbar::-webkit-scrollbar {
  display: none; /* Для Chrome, Safari и Opera */
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

@media (max-width: 768px) {
  .card-container {
    scroll-snap-type: x mandatory;
    scroll-padding: 1.25rem;
  }
  
  .card-item {
    scroll-snap-align: start;
  }
}

/* Стили для видео */
video {
  opacity: 1;
  transition: opacity 0.3s ease;
}
</style> 