<template>
  <div class="container mx-auto px-4 py-4 md:py-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <!-- Left column: Welcome, Program, and QR code -->
        <div class="text-center md:text-left">
          <h1 class="text-xl md:text-3xl xl:text-4xl mb-3 md:mb-4">
            You're on the EFW 2025 Guest List by {{ guestName }}!
          </h1>
          
          <!-- Event Program - Desktop version -->
          <div class="mb-4 md:mb-6 ">
            <h2 class="text-base md:text-lg text-gray-600 mb-4 md:mb-6 hidden md:block">
              Join us for three remarkable days of style, beauty, and meaningful connections:
            </h2>
            
            <div class="overflow-x-auto hidden md:block">
              <table class="min-w-full mb-3">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="py-2 px-3 text-left text-sm font-medium text-gray-500">Date & Time</th>
                    <th class="py-2 px-3 text-left text-sm font-medium text-gray-500">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100">
                    <td class="py-2 px-3 text-sm font-medium">April 13 | 6–10PM</td>
                    <td class="py-2 px-3 text-sm text-gray-600">Ready-to-Wear Runway Shows</td>
                  </tr>
                  <tr class="border-b border-gray-100">
                    <td class="py-2 px-3 text-sm font-medium">April 14 | 6–10 PM</td>
                    <td class="py-2 px-3 text-sm text-gray-600">Prêt-à-Porter Runway Shows</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-3 text-sm font-medium">April 15 | 12–6PM</td>
                    <td class="py-2 px-3 text-sm text-gray-600">Beauty Fashion Showroom Day</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p class="text-sm md:text-base text-gray-600 mb-3">
             Access for April 13 & 14 is confirmed.<br>
             To attend April 15 | Showroom Day, please request additional access: just introduce yourself — name & profession.
            </p>
          </div>
          
          <!-- Desktop version with QR code and address -->
          <div class="hidden md:block">
            <div class="flex items-start gap-4">
              <div class="bg-white p-3 rounded-lg shadow-md inline-block max-w-[160px]">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://meyou.id/efw2025%23guests" 
                  alt="QR code for event platform" 
                  class="mb-1 w-full"
                />
                <p class="text-xs text-gray-500 break-words">Scan QR for access</p>
              </div>
              
              <!-- Desktop version with address -->
              <a 
                href="https://maps.app.goo.gl/UVNrqWs4ud4X4x7w8" 
                target="_blank" 
                rel="noopener noreferrer"
                class="bg-white p-3 rounded-lg shadow-md"
              >
                <h3 class="text-sm font-medium text-gray-800 mb-0 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  SKYLIGHT GALLERY
                </h3>
                <p class="text-xs text-gray-600">DUBAI MEDIA CITY</p>
              </a>
            </div>
          </div>
          
          <!-- Mobile version with button -->
          <div class="md:hidden flex justify-center">
            <NuxtLink 
              to="https://meyou.id/efw2025#guests" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <BaseButton variant="primary">
                <span>Request access</span>
                <span>></span>
              </BaseButton>
            </NuxtLink>
          </div>
        </div>
        
        <!-- Right column: Image with program overlay on mobile -->
        <div class="flex flex-col items-center justify-center relative">
          <div class="w-full max-w-md mx-auto rounded-lg shadow-md overflow-hidden relative">
            <img 
              :src="Image1" 
              alt="Emirates Fashion Week 2025" 
              class="w-full md:h-auto md:max-h-unset max-h-[65vh] h-[65vh] object-cover md:max-w-md"
            />
            
            <!-- Address block for mobile version (overlay on image) -->
            <div class="md:hidden absolute bottom-0 left-0 right-0 backdrop-blur-md p-2 rounded-b-lg w-full text-center">
              <a 
                href="https://maps.app.goo.gl/UVNrqWs4ud4X4x7w8" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block"
              >
                <h3 class="text-xs font-medium text-white mb-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  SKYLIGHT GALLERY
                </h3>
                <p class="text-xs text-white">DUBAI MEDIA CITY</p>
              </a>
            </div>
          </div>
          
          <!-- Event Program - Mobile version (overlay on image) -->
          <div class="md:hidden absolute top-0 left-0 right-0 backdrop-blur-md p-3 rounded-t-lg w-full max-w-md mx-auto">
            <h2 class="text-xs text-white font-medium mb-2">
              Join us for three remarkable days of style, beauty, and meaningful connections:
            </h2>
            
            <div class="overflow-x-auto">
              <table class="min-w-full text-xs text-white">
                <tbody>
                  <tr class="border-b border-white/20">
                    <td class="py-1 px-2 font-medium">April 13 | 6–10PM</td>
                    <td class="py-1 px-2">Ready-to-Wear Runway Shows</td>
                  </tr>
                  <tr class="border-b border-white/20">
                    <td class="py-1 px-2 font-medium">April 14 | 6–10PM</td>
                    <td class="py-1 px-2">Prêt-à-Porter Runway Shows</td>
                  </tr>
                  <tr>
                    <td class="py-1 px-2 font-medium">April 15 | 12–6PM</td>
                    <td class="py-1 px-2">Beauty Fashion Showroom Day</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Detailed Fashion Show Program -->
      <div class="mt-8 md:mt-12">
        <h2 class="text-lg md:text-xl font-medium text-center mb-4 md:mb-6">Fashion Show Program</h2>
        
        <!-- Desktop version of detailed program -->
        <div class="hidden md:block">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- April 13 -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-base font-medium text-gray-800 mb-3">April 13, 2025</h3>
              
              <div class="space-y-3">
                <div class="border-b border-gray-100 pb-2">
                  <h4 class="text-sm font-medium text-gray-700">6 PM</h4>
                  <ul class="mt-1 space-y-1">
                    <li class="text-sm text-gray-600">Anastasiya Boyarskaya /Russia/</li>
                    <li class="text-sm text-gray-600">Osmosiss /Italy/</li>
                    <li class="text-sm text-gray-600">Katharina Arnold /Germany/</li>
                    <li class="text-sm text-gray-600">SNIM /Russia/</li>
                    <li class="text-sm text-gray-600">Tanya Tuzova /Russia/</li>
                    <li class="text-sm text-gray-600">Danatalla /Belarus/</li>
                    <li class="text-sm text-gray-600">Kibovskaya /Russia/</li>
                    <li class="text-sm text-gray-600">Nermin /UAE/</li>
                    <li class="text-sm text-gray-600">Aisha /Azerbaijan/</li>
                    <li class="text-sm text-gray-600">Borovik /Russia/</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="text-sm font-medium text-gray-700">8 PM</h4>
                  <ul class="mt-1 space-y-1">
                    <li class="text-sm text-gray-600">By Osmanova /Azerbaijan/</li>
                    <li class="text-sm text-gray-600">Sylweriusz Stanislawski</li>
                    <li class="text-sm text-gray-600">Alessandro Borreli /Russia/</li>
                    <li class="text-sm text-gray-600">Marina Mirova /Russia/</li>
                    <li class="text-sm text-gray-600">Alla Couture /Russia/</li>
                    <li class="text-sm text-gray-600">Bolero /Russia/</li>
                    <li class="text-sm text-gray-600">Raisa Miroshnichenko /Russia/</li>
                    <li class="text-sm text-gray-600">Zain /Iraq/</li>
                    <li class="text-sm text-gray-600">Show Stylists</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- April 14 -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-base font-medium text-gray-800 mb-3">April 14, 2025</h3>
              
              <div class="space-y-3">
                <div class="border-b border-gray-100 pb-2">
                  <h4 class="text-sm font-medium text-gray-700">6 PM</h4>
                  <ul class="mt-1 space-y-1">
                    <li class="text-sm text-gray-600">Alisia Fiori /Russia/</li>
                    <li class="text-sm text-gray-600">Etno Fresh /Russia/</li>
                    <li class="text-sm text-gray-600">Sundus /Oman/</li>
                    <li class="text-sm text-gray-600">Top Tato /Saudi Arabia/</li>
                    <li class="text-sm text-gray-600">Icona Style /Armenia/</li>
                    <li class="text-sm text-gray-600">Boulas /Russia/</li>
                    <li class="text-sm text-gray-600">G'nFayth /Philippines/</li>
                    <li class="text-sm text-gray-600">Marina Undrits /Russia/</li>
                    <li class="text-sm text-gray-600">Triskelon /Russia/</li>
                    <li class="text-sm text-gray-600">Nadia</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="text-sm font-medium text-gray-700">8 PM</h4>
                  <ul class="mt-1 space-y-1">
                    <li class="text-sm text-gray-600">Feminelli /Russia/</li>
                    <li class="text-sm text-gray-600">Addicted /Russia/</li>
                    <li class="text-sm text-gray-600">Alexandra Fashion House</li>
                    <li class="text-sm text-gray-600">Orchidea Nera by Lamoo /Saudi Arabia/</li>
                    <li class="text-sm text-gray-600">Luna Collection /Russia/</li>
                    <li class="text-sm text-gray-600">Malikabegim /Uzbekistan/</li>
                    <li class="text-sm text-gray-600">Zaggaro /Romania/</li>
                    <li class="text-sm text-gray-600">Irmi /Russia/</li>
                    <li class="text-sm text-gray-600">Two Kids /Romania/</li>
                    <li class="text-sm text-gray-600">Elena Romanova /Russia/</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile version of detailed program -->
        <div class="md:hidden">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="text-base font-medium text-gray-800 mb-3">Fashion Show Schedule</h3>
            
            <div class="space-y-4">
              <!-- April 13 -->
              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">April 13, 2025</h4>
                
                <div class="space-y-3">
                  <div>
                    <h5 class="text-xs font-medium text-gray-600">6 PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li class="text-xs text-gray-600">Anastasiya Boyarskaya /Russia/</li>
                      <li class="text-xs text-gray-600">Osmosiss /Italy/</li>
                      <li class="text-xs text-gray-600">Katharina Arnold /Germany/</li>
                      <li class="text-xs text-gray-600">SNIM /Russia/</li>
                      <li class="text-xs text-gray-600">Tanya Tuzova /Russia/</li>
                      <li class="text-xs text-gray-600">Danatalla /Belarus/</li>
                      <li class="text-xs text-gray-600">Kibovskaya /Russia/</li>
                      <li class="text-xs text-gray-600">Nermin /UAE/</li>
                      <li class="text-xs text-gray-600">Aisha /Azerbaijan/</li>
                      <li class="text-xs text-gray-600">Borovik /Russia/</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 class="text-xs font-medium text-gray-600">8 PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li class="text-xs text-gray-600">By Osmanova /Azerbaijan/</li>
                      <li class="text-xs text-gray-600">Sylweriusz Stanislawski</li>
                      <li class="text-xs text-gray-600">Alessandro Borreli /Russia/</li>
                      <li class="text-xs text-gray-600">Marina Mirova /Russia/</li>
                      <li class="text-xs text-gray-600">Alla Couture /Russia/</li>
                      <li class="text-xs text-gray-600">Bolero /Russia/</li>
                      <li class="text-xs text-gray-600">Raisa Miroshnichenko /Russia/</li>
                      <li class="text-xs text-gray-600">Zain /Iraq/</li>
                      <li class="text-xs text-gray-600">Show Stylists</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <!-- April 14 -->
              <div>
                <h4 class="text-sm font-medium text-gray-700 mb-2">April 14, 2025</h4>
                
                <div class="space-y-3">
                  <div>
                    <h5 class="text-xs font-medium text-gray-600">6 PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li class="text-xs text-gray-600">Alisia Fiori /Russia/</li>
                      <li class="text-xs text-gray-600">Etno Fresh /Russia/</li>
                      <li class="text-xs text-gray-600">Sundus /Oman/</li>
                      <li class="text-xs text-gray-600">Top Tato /Saudi Arabia/</li>
                      <li class="text-xs text-gray-600">Icona Style /Armenia/</li>
                      <li class="text-xs text-gray-600">Boulas /Russia/</li>
                      <li class="text-xs text-gray-600">G'nFayth /Philippines/</li>
                      <li class="text-xs text-gray-600">Marina Undrits /Russia/</li>
                      <li class="text-xs text-gray-600">Triskelon /Russia/</li>
                      <li class="text-xs text-gray-600">Nadia</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 class="text-xs font-medium text-gray-600">8 PM</h5>
                    <ul class="mt-1 space-y-1">
                      <li class="text-xs text-gray-600">Feminelli /Russia/</li>
                      <li class="text-xs text-gray-600">Addicted /Russia/</li>
                      <li class="text-xs text-gray-600">Alexandra Fashion House</li>
                      <li class="text-xs text-gray-600">Orchidea Nera by Lamoo /Saudi Arabia/</li>
                      <li class="text-xs text-gray-600">Luna Collection /Russia/</li>
                      <li class="text-xs text-gray-600">Malikabegim /Uzbekistan/</li>
                      <li class="text-xs text-gray-600">Zaggaro /Romania/</li>
                      <li class="text-xs text-gray-600">Irmi /Russia/</li>
                      <li class="text-xs text-gray-600">Two Kids /Romania/</li>
                      <li class="text-xs text-gray-600">Elena Romanova /Russia/</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from '#imports';
import BaseButton from '@/components/ui/BaseButton.vue';
import Image1 from '@/assets/image/welcome/1.webp';

// SEO мета-теги
useHead({
  title: 'Guest List - Emirates Fashion Week Dubai 2025',
  meta: [
    {
      name: 'description',
      content: 'You are on the Emirates Fashion Week Dubai 2025 guest list. Join us for three remarkable days of style, beauty, and meaningful connections.'
    },
    {
      name: 'keywords',
      content: 'Emirates Fashion Week Guest List, Dubai Fashion Event, Fashion Week Invitation, Guest Pass Dubai'
    },
    {
      property: 'og:title',
      content: 'Guest List - Emirates Fashion Week Dubai 2025'
    },
    {
      property: 'og:description',
      content: 'You are on the Emirates Fashion Week Dubai 2025 guest list. Join us for three remarkable days of style, beauty, and meaningful connections.'
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

// Get guest name from URL parameter
const route = useRoute();
const guestName = computed(() => {
  return route.query.by || 'Guest';
});
</script> 