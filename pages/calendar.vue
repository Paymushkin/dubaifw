<template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <AppSeo
      title="Emirates Fashion Week Calendar - Subscribe to Events"
      description="Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
    />
    
    <div class="text-center">
      <!-- Анимированный лоадер -->
      <div class="mb-8">
        <div class="inline-block relative">
          <!-- Календарь иконка -->
          <div class="w-16 h-16 border-4 border-gray-300 border-t-white rounded-lg animate-spin"></div>
          
          <!-- Внутренние элементы календаря -->
          <div class="absolute top-2 left-2 w-12 h-12 border-2 border-gray-400 border-t-gray-100 rounded-lg animate-pulse"></div>
          
          <!-- Центральная точка -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
      
      <!-- Текст загрузки -->
      <div class="text-white">
        <h1 class="text-2xl md:text-3xl font-bold mb-4 animate-pulse">
          Downloading Emirates Fashion Week Calendar
        </h1>
        <p class="text-gray-300 text-lg animate-bounce">
          Preparing calendar file download...
        </p>
        <p class="text-gray-400 text-sm mt-2">
          You will be redirected to the main page after download
        </p>
      </div>
      
      <!-- Прогресс бар -->
      <div class="mt-8 w-64 mx-auto">
        <div class="bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            class="bg-white h-full rounded-full transition-all duration-1000 ease-linear"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
      
      <!-- Счетчик -->
      <div class="mt-4 text-white text-sm">
        {{ Math.round(progress) }}%
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const progress = ref(0)
const targetUrl = 'https://calendar.google.com/calendar/ical/a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c%40group.calendar.google.com/public/basic.ics'

// Анимация прогресс бара
const animateProgress = () => {
  const duration = 1000 // 1 секунда
  const steps = 100
  const stepTime = duration / steps
  
  let currentStep = 0
  
  const timer = setInterval(() => {
    currentStep++
    progress.value = currentStep
    
    if (currentStep >= steps) {
      clearInterval(timer)
    }
  }, stepTime)
}

// Скачивание файла и редирект на главную
onMounted(() => {
  // Запускаем анимацию прогресса
  animateProgress()
  
  // Скачиваем файл календаря через 1 секунду
  setTimeout(() => {
    // Создаем временную ссылку для скачивания
    const link = document.createElement('a')
    link.href = targetUrl
    link.download = 'emirates-fashion-week-calendar.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Перенаправляем на главную страницу через 2 секунды после скачивания
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }, 1000)
})

// Мета-теги для SEO
useHead({
  title: 'Emirates Fashion Week Calendar - Subscribe to Events',
  meta: [
    {
      name: 'description',
      content: 'Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.'
    },
    {
      name: 'keywords',
      content: 'Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025'
    },
    {
      property: 'og:title',
      content: 'Emirates Fashion Week Calendar - Subscribe to Events'
    },
    {
      property: 'og:description',
      content: 'Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025.'
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
})
</script>

<style scoped>
/* Дополнительные анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out;
}

/* Кастомная анимация для календаря */
@keyframes calendar-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: calendar-spin 2s linear infinite;
}
</style>
