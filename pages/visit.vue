<template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <AppSeo
      title="Visit Emirates Fashion Week - Register Now"
      description="Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience."
      keywords="Emirates Fashion Week, Dubai Fashion, Fashion Show 2025, Visit EFW, Fashion Registration"
    />
    
    <div class="text-center">
      <!-- Анимированный лоадер -->
      <div class="mb-8">
        <div class="inline-block relative">
          <!-- Внешнее кольцо -->
          <div class="w-16 h-16 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
          
          <!-- Внутреннее кольцо -->
          <div class="absolute top-2 left-2 w-12 h-12 border-4 border-gray-400 border-t-gray-100 rounded-full animate-spin" style="animation-duration: 1s; animation-direction: reverse;"></div>
          
          <!-- Центральная точка -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <!-- Текст загрузки -->
      <div class="text-white">
        <h1 class="text-2xl md:text-3xl font-bold mb-4 animate-pulse">
          Redirecting to Emirates Fashion Week
        </h1>
        <p class="text-gray-300 text-lg animate-bounce">
          Please wait while we prepare your invitation form...
        </p>
      </div>
      
      <!-- Прогресс бар -->
      <div class="mt-8 w-64 mx-auto">
        <div class="bg-gray-700 rounded-full h-2 overflow-hidden">
          <div 
            class="bg-white h-full rounded-full transition-all duration-2000 ease-linear"
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
const targetUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'

// Анимация прогресс бара
const animateProgress = () => {
  const duration = 2000 // 2 секунды
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

// Редирект через 2 секунды
onMounted(() => {
  // Запускаем анимацию прогресса
  animateProgress()
  
  // Редирект через 2 секунды
  setTimeout(() => {
    window.location.href = targetUrl
  }, 2000)
})

// Мета-теги для SEO
useHead({
  title: 'Visit Emirates Fashion Week - Register Now',
  meta: [
    {
      name: 'description',
      content: 'Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience.'
    },
    {
      name: 'keywords',
      content: 'Emirates Fashion Week, Dubai Fashion, Fashion Show 2025, Visit EFW, Fashion Registration'
    },
    {
      property: 'og:title',
      content: 'Visit Emirates Fashion Week - Register Now'
    },
    {
      property: 'og:description',
      content: 'Register to visit Emirates Fashion Week Dubai 2025. Get your invitation and join us for an unforgettable fashion experience.'
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

/* Кастомная анимация для спиннера */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>

