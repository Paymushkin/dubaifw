<template>
  <section class="relative flex flex-col min-h-screen overflow-hidden">
    <video
      ref="videoRef"
      autoplay
      loop
      muted
      playsinline
      webkit-playsinline
      preload="metadata"
      class="absolute top-0 left-0 w-full h-full object-cover z-0 mix-blend-multiply"
    >
      <source
        src="https://storage.yandexcloud.net/videos-meyou/bg-video.mp4"
        type="video/mp4"
      />
      Ваш браузер не поддерживает видео.
    </video>
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-35 z-10"
    ></div>
    <div class="container flex flex-col grow mx-auto md:px-4 px-2 py-10 relative z-20">
      <h1 class="xl:text-5xl md:text-4xl text-2xl font-bold text-white uppercase">
        14th EMIRATES&nbsp;FASHION&nbsp;WEEK&nbsp;<sup class="xl:text-4xl md:text-3xl text-2xl align-top">®</sup> 
      </h1>
      <span class="xl:text-[60px] text-3xl text-white font-bold">Spring Summer 2026</span>
      <span class="text-white mb-10 text-xl font-bold">8-11 November 2025</span>
      <GalleryIframe :show-fog="false" />
    </div>

    <div class="relative z-20">
      <div class="flex flex-col w-[645px] max-w-full">
        <div class="py-4 px-6 bg-black bg-opacity-30 md:text-right mix-blend-multiply">
          <LogoIcon class="md:ml-auto h-8 mb-2" />
          <a 
            href="#" 
            class="text-white"
            @click.prevent="handleHashtagClick"
          >{{ hashtag[0] }}</a>
        </div>
      </div>
      <Marquee :content="marqueeText2" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LogoIcon from '~/components/icons/LogoIcon.vue';
import Marquee from '~/components/MarqueeSection.vue';
import { marqueeText2, hashtag } from '~/constants/texts';
import { useVideoVisibility } from '@/composables/useVideoVisibility';
import GalleryIframe from '@/components/GalleryIframe.vue';

const videoRef = ref(null);
const { isVisible } = useVideoVisibility(videoRef);
const isMobile = ref(window?.innerWidth < 768);
const MOBILE_BREAKPOINT = 768;
let previousWidth = window?.innerWidth;

const handleHashtagClick = () => {
  const sliderElement = document.querySelector('.image-carousel-container');
  if (sliderElement) {
    sliderElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    window.open(hashtag[1], '_blank');
  }
};

const hasBreakpointChanged = (currentWidth, prevWidth) => {
  return (
    (currentWidth < MOBILE_BREAKPOINT && prevWidth >= MOBILE_BREAKPOINT) ||
    (currentWidth >= MOBILE_BREAKPOINT && prevWidth < MOBILE_BREAKPOINT)
  );
};

const updateSize = () => {
  const currentWidth = window.innerWidth;
  if (hasBreakpointChanged(currentWidth, previousWidth)) {
    isMobile.value = currentWidth < MOBILE_BREAKPOINT;
  }
  previousWidth = currentWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateSize);
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.log('Autoplay failed:', error);
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', updateSize);
});
</script>

<style scoped>
h1 {
  position: relative;
  z-index: 20;
}
</style>
