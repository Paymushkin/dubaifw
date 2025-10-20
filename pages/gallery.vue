<template>
  <div class="container mx-auto px-5 py-10 md:py-16">
    <h1 class="text-3xl md:text-4xl xl:text-5xl mb-10 md:mb-16">EFW gallery</h1>
    
    <div class="photographers-list">
      <PhotographerBlock 
        v-for="(photographer, index) in photographers" 
        :key="index"
        :photographer="photographer"
      />
    </div>
    <!-- <div id="reportage" class="grow mb-10 py-2"></div> -->
  </div>
</template>

<script setup>
import { photographers } from '@/constants/photographers';
import PhotographerBlock from '@/components/PhotographerBlock.vue';

// SEO мета-теги
useHead({
  title: 'Gallery - Emirates Fashion Week Dubai 2025',
  meta: [
    {
      name: 'description',
      content: 'Explore the stunning gallery of Emirates Fashion Week Dubai 2025. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments.'
    },
    {
      name: 'keywords',
      content: 'Emirates Fashion Week Gallery, Dubai Fashion Photos, Fashion Show Gallery, Runway Photos Dubai, Fashion Week Images'
    },
    {
      property: 'og:title',
      content: 'Gallery - Emirates Fashion Week Dubai 2025'
    },
    {
      property: 'og:description',
      content: 'Explore the stunning gallery of Emirates Fashion Week Dubai 2025. View exclusive photos from runway shows, designer collections, and behind-the-scenes moments.'
    },
    {
      property: 'og:image',
      content: 'https://emiratesfashionweeks.com/seo-poster.png'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    }
  ]
});

const isMobile = ref(window?.innerWidth < 768);
const MOBILE_BREAKPOINT = 768;

// Добавляем переменную для отслеживания предыдущей ширины
let previousWidth = window?.innerWidth;

// Функция для проверки пересечения брейкпоинта
const hasBreakpointChanged = (currentWidth, previousWidth) => {
  return (
    (currentWidth < MOBILE_BREAKPOINT && previousWidth >= MOBILE_BREAKPOINT) ||
    (currentWidth >= MOBILE_BREAKPOINT && previousWidth < MOBILE_BREAKPOINT)
  );
};

// Функция для обновления размера
const updateSize = () => {
  const currentWidth = window.innerWidth;
  
  // Проверяем, пересекли ли мы брейкпоинт
  if (hasBreakpointChanged(currentWidth, previousWidth)) {
    isMobile.value = currentWidth < MOBILE_BREAKPOINT;
    updateScript();
  }
  
  // Обновляем предыдущую ширину
  previousWidth = currentWidth;
};

// Функция для обновления скрипта
const updateScript = () => {
  const reportageBlock = document.getElementById('reportage');
  if (!reportageBlock) return;

  // Очищаем содержимое блока
  reportageBlock.innerHTML = '';

  // Удаляем старый скрипт, если он есть
  const existingScript = document.getElementById('meyou_init');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.src = 'https://meyou.id/public/meyou_init.js';
  script.id = 'meyou_init';
  
  // Устанавливаем разные параметры в зависимости от ширины экрана
  const params = isMobile.value 
    ? 'UTM=smi&header&footer&tag&count=6&nobutton&size=100&noclick'
    : 'UTM=smi&header&footer&tag&count=14&nobutton&size=150&noclick';
    
  script.setAttribute(
    'data-event',
    `https://meyou.id/efw2025/live?${params}`
  );
  
  reportageBlock.appendChild(script);
};

onMounted(() => {
  // Добавляем слушатель изменения размера окна
  window.addEventListener('resize', updateSize);
  // Инициализируем скрипт
  updateScript();

});

onUnmounted(() => {
  // Удаляем слушатель при размонтировании компонента
  window.removeEventListener('resize', updateSize);
});

</script>

<style scoped>
.photographers-list > :last-child {
  margin-bottom: 0;
}
</style> 