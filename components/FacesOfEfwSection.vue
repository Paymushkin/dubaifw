<template>
  <section class="md:mb-[76px] mb-[56px]">
    <div class="flex justify-between items-center mb-8 xl:mb-[75px]">
      <h2 id="faces-of-efw" data-nosnippet class="text-xl md:text-3xl xl:text-4xl">Face of Emirates Fashion Week</h2>
      <div class="flex items-center gap-4">
        <button 
          @click="handlePrev"
          class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button 
          @click="handleNext"
          class="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="overflow-x-auto hide-scrollbar -mx-4 md:mx-0">
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1.2"
        :space-between="16"
        :navigation="false"
        :autoplay="{
          // delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="false"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="relative pb-12 px-4 md:px-0"
      >
        <swiper-slide v-for="(person, index) in facesData" :key="index">
          <div class="bg-white rounded-2xl h-full relative overflow-hidden">
            <img 
              :src="person.image" 
              :alt="person.name"
              class="w-full aspect-[4/5] rounded-lg object-cover"
              :loading="index === 0 ? 'eager' : 'lazy'"
            >
            <!-- Диагональная ленточка ICON of EFW -->
            <div v-if="person.icon" class="icon-ribbon">
              <span class="icon-ribbon__content">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                ICON of EFW
              </span>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold mb-4 text-center">{{ person.name }}</h3>
              <div class="flex flex-wrap gap-1 md:gap-2 justify-center">
                <a 
                  v-for="(link, linkIndex) in person.links" 
                  :key="linkIndex"
                  :href="link.url" 
                  target="_blank"
                  class="text-xs md:text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  {{ link.text }}
                </a>
              </div>
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFaces } from '~/composables/useFaces';

// Используем composable для работы с данными лиц
const { facesData, isLoading, isDataUpdated, fetchFaces } = useFaces();

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const handlePrev = () => {
  swiperInstance.value?.slidePrev();
};

const handleNext = () => {
  swiperInstance.value?.slideNext();
};

const onSlideChange = () => {
  // Можно добавить логику при смене слайда
};

// Загружаем данные при монтировании компонента
onMounted(async () => {
  // Пытаемся обновить данные из Google Sheets (только если еще не обновлены)
  if (!isDataUpdated.value) {
    try {
      await fetchFaces();
    } catch (error) {
      console.error('Ошибка загрузки данных лиц:', error);
      // Используем локальные данные как fallback
    }
  }
});
</script>

<style scoped>
:deep(.swiper) {
  padding-bottom: 40px !important;
  position: relative;
  overflow: hidden !important;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: auto;
}

/* Стили для навигации */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  top: 50%;
  transform: translateY(-50%);
  display: flex !important;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 20px;
}

@media (max-width: 767px) {
  button {
    display: none;
  }
  
  :deep(.swiper) {
    padding: 0 !important;
    overflow: visible !important;
  }
  
  :deep(.swiper-wrapper) {
    overflow: visible !important;
  }
  
  :deep(.swiper-slide) {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  :deep(.swiper-slide-next) {
    opacity: 0.6;
  }
  
  :deep(.swiper-slide-prev) {
    opacity: 0.6;
  }
}


button {
  transition: opacity 0.3s ease;
}

button:hover {
  opacity: 0.7;
}

button:active {
  opacity: 0.5;
}

/* Скрытие скроллбара */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

/* Диагональная ленточка ICON of EFW */
.icon-ribbon {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.icon-ribbon__content {
  position: absolute;
  top: 65px; /* равен 4 (tailwind top-4) */
  left: -25px; /* смещение, чтобы центрировалось по диагонали */
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 4px 20px;
  background: #FBBF24; /* tailwind bg-yellow-400 */
  color: #111827; /* почти черный для контраста */
  font-weight: 700;
  font-size: 10px;
  white-space: nowrap; /* не переносить текст */
  line-height: 1;      /* компактная высота строки */
  border-radius: 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transform: rotate(-45deg);
  transform-origin: left top;
}

@media (min-width: 768px) {
  /* .icon-ribbon__content {
    top: 18px;
    left: -56px;
    font-size: 13px;
    padding: 6px 14px;
  } */
}
</style>