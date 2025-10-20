<template>
  <div class="container mx-auto mb-[105px]">
  <h2 id="partners-media" data-nosnippet class="text-xl md:text-3xl xl:text-4xl mb-8 xl:mb-[75px]">PARTNERS & MEDIA</h2>
    <div class="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-9 gap-4 justify-items-center md:justify-items-start">
      <div 
        v-for="(sponsor, index) in sponsors" 
        :key="index"
        :class="[
          'flex justify-center items-center',
          index === 0 ? 'col-span-2 md:col-span-2 xl:col-span-2' : ''
        ]"
      >
        <img  
          :src="sponsor" 
          alt="Sponsor Logo" 
          class="object-center" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import image1 from '@/assets/image/sponsors/card-1.webp'
import image2 from '@/assets/image/sponsors/card-2.webp'
import image3 from '@/assets/image/sponsors/card-3.webp'
import image4 from '@/assets/image/sponsors/card-4.webp'
import image5 from '@/assets/image/sponsors/card-5.webp'
import image6 from '@/assets/image/sponsors/card-6.webp'
import image7 from '@/assets/image/sponsors/card-7.webp'
import image8 from '@/assets/image/sponsors/card-8.webp'
import image9 from '@/assets/image/sponsors/card-9.webp'
import image10 from '@/assets/image/sponsors/card-10.webp'
import image11 from '@/assets/image/sponsors/card-11.webp'
import image12 from '@/assets/image/sponsors/card-12.webp'
import image13 from '@/assets/image/sponsors/card-13.webp'
import image14 from '@/assets/image/sponsors/card-14.webp'
import image15 from '@/assets/image/sponsors/card-15.webp'


const sponsors = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15
];
</script>

<style scoped>
.sponsors-container {
  text-align: center;
  margin: 40px 0;
}

.sponsors-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.sponsors-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.sponsor-logo {
  max-width: 100px; /* Установите нужный размер */
  height: auto;
}
</style> 