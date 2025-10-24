<template>
  <div class="min-h-screen bg-black flex items-center justify-center py-8 px-4">
    <AppSeo
      title="Emirates Fashion Week Calendar - Subscribe to Events"
      description="Subscribe to Emirates Fashion Week calendar to stay updated with all fashion events and shows in Dubai 2025."
      keywords="Emirates Fashion Week, Dubai Fashion, Calendar, Events, Fashion Shows, Dubai 2025"
    />
    
    <div class="text-center max-w-md mx-auto">
      <!-- Календарь иконка -->
      <div class="mb-6 md:mb-8">
        <div class="inline-block relative">
          <!-- Календарь иконка -->
          <div class="w-12 h-12 md:w-16 md:h-16 border-4 border-white rounded-lg flex items-center justify-center">
            <div class="w-8 h-8 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center">
              <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Заголовок и описание -->
      <div class="text-white mb-6 md:mb-8">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
          Emirates Fashion Week Calendar
        </h1>
        <p class="text-gray-300 text-base md:text-lg mb-2">
          Stay updated with all fashion events and shows
        </p>
        <p class="text-gray-400 text-sm">
          Subscribe to get notifications about upcoming events
        </p>
      </div>
      
      <!-- Кнопка подписки -->
      <div v-if="showButton" class="mb-6">
        <button 
          @click="subscribeToCalendar"
          class="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-base md:text-lg"
        >
          Subscribe to Calendar
        </button>
      </div>
      
      <!-- Сообщение для iOS и Android пользователей -->
      <div v-else class="mb-6">
        <div class="text-white text-lg font-semibold">
          Opening calendar subscription...
        </div>
      </div>
      
      <!-- Кнопка для перехода на главную -->
      <div class="mt-4">
        <button 
          @click="goToHome"
          class="bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-sm md:text-base"
        >
          Go to Main Page
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const showButton = ref(false)

// Calendar ID
const calendarId = 'a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c@group.calendar.google.com'

// Определяем URL в зависимости от платформы
const getCalendarUrl = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  
  // Для iOS/macOS используем webcal (подписка)
  if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')) {
    return `webcal://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`
  }
  
  // Для Android и остальных платформ используем Google Calendar subscription
  return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`
}

const targetUrl = getCalendarUrl()

// Определяем, является ли устройство iOS
const isIOS = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')
}

// Определяем, является ли устройство Android
const isAndroid = () => {
  const userAgent = navigator.userAgent.toLowerCase()
  return userAgent.includes('android')
}

// Автоматическое открытие для iOS и Android
onMounted(() => {
  // Показываем кнопку для всех платформ
  showButton.value = true
  
  if (isIOS() || isAndroid()) {
    // Для iOS и Android открываем автоматически через небольшую задержку
    setTimeout(() => {
      window.location.href = targetUrl
    }, 1000)
  }
})

// Функция для подписки на календарь
const subscribeToCalendar = () => {
  window.open(targetUrl, '_blank')
}

// Функция для перехода на главную
const goToHome = () => {
  window.location.href = '/'
}

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
