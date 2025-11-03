<template>
  <div class="image-carousel-container">
    <div class="carousel-header flex justify-between items-center mb-6">
      <h2 id="economy-dubai" data-nosnippet class="text-2xl md:text-3xl lg:text-4xl">{{ title }}</h2>
      <div class="hidden md:flex relative items-center gap-4">
        <div 
          @click="swiperRef?.slidePrev()"
          class="swiper-button-prev !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl cursor-pointer"
        ></div>
        <div 
          @click="swiperRef?.slideNext()"
          class="swiper-button-next !static md:!w-10 md:!h-10 !w-6 !h-6 !text-black after:!text-xl cursor-pointer"
        ></div>
      </div>
    </div>

    <div class="relative">
      <swiper
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="gap"
        :pagination="{ 
          clickable: true,
          el: '.swiper-pagination'
        }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          enabled: false
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }"
        :autoplay="autoplay ? { delay: autoplaySpeed, disableOnInteraction: false } : false"
        @swiper="onSwiper"
        class="mySwiper"
      >
        <swiper-slide v-for="(image, index) in displayImages" :key="index">
          <div class="carousel-slide">
            <div class="image-container">
              <a 
                :href="getImageUrl(image)"
                data-fancybox="gallery"
                :data-caption="getImageAlt(image, index)"
                class="gallery-item"
              >
                <img 
                  :src="getImageUrl(image)"
                  :alt="getImageAlt(image, index)"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  :loading="index === 0 ? 'eager' : 'lazy'"
                />
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination mt-6"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperRef = ref(null);
const loadedImages = ref([]);

const onSwiper = (swiper) => {
  swiperRef.value = swiper;
};

// Функции для обработки URL и alt текста изображений
const getImageUrl = (image) => {
  if (typeof image === 'string') return image;
  if (image && image.src) return image.src;
  return '';
};

const getImageAlt = (image, index) => {
  if (typeof image === 'string') return `Slide ${index + 1}`;
  if (image && image.alt) return image.alt;
  return `Slide ${index + 1}`;
};

// Функция для загрузки скриптов
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// Функция для загрузки стилей
const loadStyle = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

onMounted(async () => {
  try {
    // Загружаем jQuery и Fancybox
    await loadScript('https://code.jquery.com/jquery-3.7.1.min.js');
    await loadStyle('https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css');
    await loadScript('https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js');

    // Инициализируем Fancybox после загрузки всех скриптов
    window.jQuery('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "close"
      ],
      animationEffect: "fade",
      transitionEffect: "fade",
      preventCaptionOverlap: true,
      loop: true,
      infobar: true,
      touch: {
        vertical: true
      },
      mobile: {
        clickContent: function(current, event) {
          return current.type === "image" ? "toggleControls" : false;
        },
        clickSlide: function(current, event) {
          return current.type === "image" ? "toggleControls" : "close";
        },
      },
      wheel: false
    });

    // Загрузка изображений, если они не переданы
    if (props.images.length === 0) {
      const imageContext = import.meta.glob('@/assets/image/cards/*.webp', { eager: false });
      const entries = Object.entries(imageContext);
      
      for (const [path, importFn] of entries) {
        try {
          const module = await importFn();
          const fileName = path.split('/').pop().split('.')[0];
          loadedImages.value.push({
            src: module.default,
            alt: fileName
          });
        } catch (error) {
          console.error(`Ошибка при загрузке изображения ${path}:`, error);
        }
      }
    }
  } catch (error) {
    console.error('Ошибка при инициализации Fancybox:', error);
  }
});

onUnmounted(() => {
  if (window.jQuery && window.jQuery.fancybox) {
    window.jQuery.fancybox.destroy();
  }
});

const modules = [Pagination, Autoplay];

const props = defineProps({
  title: {
    type: String,
    default: 'Галерея изображений'
  },
  images: {
    type: Array,
    default: () => []  // Возвращаем пустой массив по умолчанию
  },
  slidesPerView: {
    type: Number,
    default: 3
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  autoplaySpeed: {
    type: Number,
    default: 5000 // 5 секунд
  },
  gap: {
    type: Number,
    default: 16 // Расстояние между слайдами в пикселях
  }
});

// Вычисляемое свойство для отображения изображений
const displayImages = computed(() => {
  return props.images.length > 0 ? props.images : loadedImages.value;
});
</script>

<style scoped>
/* Удаляем старые стили для кнопок */
:deep(.swiper) {
  padding-bottom: 10px;
}

:deep(.swiper-wrapper) {
  align-items: center;
}

/* Стили для стрелок навигации */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  position: static;
  margin: 0;
  width: 40px;
  height: 40px;
  color: black;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

:deep(.swiper-button-prev:hover),
:deep(.swiper-button-next:hover) {
  opacity: 0.7;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 768px) {
  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 24px;
    height: 24px;
  }
  
  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 16px;
  }
}

.carousel-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.image-container a {
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: zoom-in;
}

.image-container img:hover {
  transform: scale(1.02);
}

/* Стили для пагинации Swiper */
:deep(.swiper-pagination) {
  position: relative;
  bottom: 0;
  margin-top: 16px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #ccc;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #000;
}

/* Стили для интеграции с Fancybox */
.gallery-item {
  display: block;
  width: 100%;
  height: 100%;
  cursor: zoom-in;
  text-decoration: none;
}

.carousel-slide img {
  transition: transform 0.3s ease;
}

.carousel-slide:hover img {
  transform: scale(1.02);
}

/* Обновляем стили для Fancybox */
:deep(.fancybox-button) {
  background: rgba(30, 30, 30, 0.6);
}

:deep(.fancybox-button:hover) {
  background: rgba(0, 0, 0, 0.8);
}
</style> 