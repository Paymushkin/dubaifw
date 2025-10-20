<template>
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold text-left mb-8">Video Reels</h2>

    <!-- Мобильная версия - горизонтальный скролл -->
    <div class="block sm:hidden">
      <div class="overflow-x-auto hide-scrollbar -mx-4">
        <div class="flex gap-4 px-4 pb-4">
          <div 
            v-for="(video, index) in videos" 
            :key="index"
            class="flex-shrink-0 w-[200px] h-[355px] bg-black rounded-lg overflow-hidden"
          >
            <video 
              :src="video"
              class="w-full h-full object-cover"
              :controls="true"
              preload="metadata"
              @click="openVideoModal(video)"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>

    <!-- Десктопная версия - карусель -->
    <div class="hidden sm:block">
      <div class="relative">
        <!-- Кнопки навигации - показываем только если видео больше чем видимых слайдов -->
        <button 
          v-if="videos.length > visibleSlides"
          @click="previousVideo"
          :disabled="currentIndex === 0"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <button 
          v-if="videos.length > visibleSlides"
          @click="nextVideo"
          :disabled="currentIndex >= videos.length - visibleSlides"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Видео контейнер -->
        <div class="flex justify-center gap-4">
          <div 
            v-for="(video, index) in visibleVideos" 
            :key="index"
            :class="[
              'bg-black rounded-lg overflow-hidden transition-all duration-300',
              getVideoSize(index)
            ]"
          >
            <video 
              :ref="el => setVideoRef(el, index)"
              :src="video"
              class="w-full h-full object-cover"
              :controls="true"
              preload="metadata"
              @click="openVideoModal(video)"
              @play="onVideoPlay(index)"
              @pause="onVideoPause(index)"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <!-- Индикаторы - показываем только если видео больше чем видимых слайдов -->
        <div v-if="videos.length > visibleSlides" class="flex justify-center mt-4 gap-2">
          <button 
            v-for="(video, index) in videos" 
            :key="index"
            @click="goToVideo(index)"
            :class="[
              'w-3 h-3 rounded-full transition-colors',
              index === currentIndex ? 'bg-black' : 'bg-gray-300'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </div>

  <!-- Модальное окно для просмотра видео -->
  <div 
    v-if="selectedVideo" 
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
    @click="closeVideoModal"
  >
    <button 
      @click="closeVideoModal"
      class="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75"
    >
      ×
    </button>
    <video 
      :src="selectedVideo" 
      class="max-w-full max-h-full object-contain rounded-lg"
      controls
      autoplay
      @click.stop
    >
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'

const props = defineProps({
  videos: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
const selectedVideo = ref(null)
const videoRefs = ref([])

const visibleSlides = computed(() => {
  if (typeof window === 'undefined') return 1
  
  const width = window.innerWidth
  if (width >= 1536) return 3 // xl: 3 слайда
  if (width >= 1024) return 2 // lg: 2 слайда
  if (width >= 640) return 2  // md: 2 слайда
  return 1 // sm: 1 слайд
})

const visibleVideos = computed(() => {
  const start = currentIndex.value
  const end = Math.min(start + visibleSlides.value, props.videos.length)
  return props.videos.slice(start, end)
})

const setVideoRef = (el, index) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const getVideoSize = (index) => {
  return 'w-[300px] h-[533px]' // Все видео одинакового размера 9:16
}

const nextVideo = () => {
  if (currentIndex.value < props.videos.length - visibleSlides.value) {
    currentIndex.value++
  }
}

const previousVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToVideo = (index) => {
  currentIndex.value = index
}

const openVideoModal = (videoSrc) => {
  selectedVideo.value = videoSrc
}

const closeVideoModal = () => {
  selectedVideo.value = null
}

const onVideoPlay = (index) => {
  videoRefs.value.forEach((video, i) => {
    if (video && i !== index && !video.paused) {
      video.pause()
    }
  })
}

const onVideoPause = (index) => {
  // Можно добавить логику при паузе
}

onMounted(() => {
  // Компонент готов к использованию
})

onUnmounted(() => {
  // Очистка при размонтировании
})
</script>

<style scoped>
/* Скрытие полосы прокрутки для горизонтального скролла */
.hide-scrollbar {
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
</style>












