<template>
  <footer id="contacts" class="bg-black text-white py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col sm:flex-row gap-10 md:gap-[130px] justify-end">
        <!-- Menu Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Menu</h3>
          <nav class="flex flex-col space-y-3">
            <a
              v-for="link in menuLinks"
              :key="link.id"
              :href="link.href"
              class="text-sm hover:text-gray-300 transition-colors cursor-pointer"
              @click.prevent="scrollToSection(link.href)"
            >
              {{ link.name }}
            </a>
          </nav>
        </div>

        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Features</h3>

          <div class="flex flex-col space-y-3">

            <NuxtLink
              to="/features#visitors"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR VISITORS
            </NuxtLink>
            <NuxtLink
              to="/features#designers"
              target="_blank"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR PROFESSIONALS
            </NuxtLink>
            <NuxtLink
              to="/features#designers"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR DESIGNERS
            </NuxtLink>
            <NuxtLink
              to="/features#influencers"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR INFLUENCERS
            </NuxtLink>
            <NuxtLink
              to="/features#media"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR MEDIA
            </NuxtLink>
            <NuxtLink
              to="/features#business"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR BUSINESSES
            </NuxtLink>
            <NuxtLink
              to="/features#corporations"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              FOR CORPORATIONS
            </NuxtLink>
          </div>
        </div>

        <!-- Contacts Column -->
        <div>
          <h3 class="hidden md:block text-lg font-medium mb-6">Contacts</h3>

          <div class="flex flex-col space-y-3">

            <address class="not-italic uppercase">
              <p class="text-sm hover:text-gray-300 transition-colors font-normal">{{ address }}</p>
            </address>

            <NuxtLink
              :to="`tel:${phone[0]}`"
              class="text-sm hover:text-gray-300 transition-colors"
            >
              {{ phone[1] }}
            </NuxtLink>
            <NuxtLink
              :to="`mailto:${email}`"
              class="text-sm hover:text-gray-300 transition-colors uppercase"
            >
              {{ email }}
            </NuxtLink>
            <div class="flex items-center gap-2">
            <NuxtLink
              :to="instagram"
              target="_blank"
              class="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
              <InstagramWhiteIcon />
            </NuxtLink>

            <NuxtLink
              :to="youtube"
              target="_blank"
              class="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity">
              <YoutubeWhiteIcon />
            </NuxtLink>

          </div>
            <span 
              class="text-sm hover:text-gray-300 transition-colors cursor-pointer"
              @click="showContactForm = true"
            >
              ASK
            </span>
          </div>
        </div>

        <div class="flex sm:hidden flex-col items-start gap-4">
          <LogoWhiteIcon />
          <NuxtLink
            :to="hashtag[1]"
            target="_blank"
            class="text-sm hover:text-gray-300 transition-colors"
          >
            {{ hashtag[0] }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <ContactForm 
      :is-open="showContactForm"
      @close="showContactForm = false"
    />
  </footer>
</template>

<script setup>
import LogoWhiteIcon from './icons/LogoWhiteIcon.vue';
import InstagramWhiteIcon from './icons/InstagramWhiteIcon.vue';
import YoutubeWhiteIcon from './icons/YoutubeWhiteIcon.vue';
import { email, instagram, hashtag, phone, address, youtube } from '~/constants/texts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ContactForm from './ContactForm.vue';

const router = useRouter();

const menuLinks = [
  { name: 'HOW IT WAS', href: '/#fall-winter-2025', id: 'fall-winter-2025' },
  // { name: 'SCHEDULE', href: '/#program', id: 'program' },
  { name: 'DESIGNERS', href: '/#designers', id: 'designers' },
  { name: 'FACES', href: '/#faces-efw', id: 'faces-efw' },
  { name: 'FEATURES', href: '/features', id: 'features' },
  { name: 'TRIAL SHOWCASE SPOTS', href: '/trial', id: 'trial' },
  { name: 'AWARDS', href: 'https://deluxebeauty.world/', id: 'awards' },
  { name: 'OFFER', href: '/offer', id: 'offer' },
  { name: 'WIDGET GUIDE', href: '/widget', id: 'widget-guide' },
  { name: 'AI CONTEST', href: '/EFW_AICONTEST', id: 'ai-contest' },
  { name: 'FAQ', href: '/faq', id: 'faq' },
  // { name: 'TEAM', href: '/team', id: 'team' },
  { name: 'GALLERY', href: '/gallery', id: 'gallery' },
];

const scrollToSection = (href) => {
  // Если ссылка начинается с "/", это ссылка на другую страницу
  if (href.startsWith('/')) {
    router.push(href);
    return;
  }
  
  // Иначе это якорь на текущей странице
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const showContactForm = ref(false);
</script>
