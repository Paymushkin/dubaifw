<template>
  <div class="min-h-screen bg-white">
    <FaqSectionDynamic :standalone="true" />
  </div>
</template>

<script setup>
import FaqSectionDynamic from '~/components/FaqSectionDynamic.vue';

useHead({
  title: 'FREQUENTLY ASKED QUESTIONS - Emirates Fashion Week Dubai 2025',
  meta: [
    {
      name: 'description',
      content: 'Frequently Asked Questions about Emirates Fashion Week Dubai 2025. Find answers about visitor passes, buyers, AI matchmaking tool, and more.'
    },
    {
      property: 'og:title',
      content: 'FREQUENTLY ASKED QUESTIONS - Emirates Fashion Week Dubai 2025'
    },
    {
      property: 'og:description',
      content: 'Frequently Asked Questions about Emirates Fashion Week Dubai 2025. Find answers about visitor passes, buyers, AI matchmaking tool, and more.'
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
</script> 