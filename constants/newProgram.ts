import Station1 from '~/assets/image/stations/station-1.png';
import Station2 from '~/assets/image/stations/station-2.png';
import Station3 from '~/assets/image/stations/station-3.png';

// Спонсорские блоки для разных дней
const NEW_PRELAUNCH_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/promo.mp4',
  title: 'The Showcase Station',
  description:
  `Emirates Fashion Week will unveil its Showcase Station at the pre-launch press conferences.
  Here, 80 beauty companies will present their latest services before and after the runway shows, as well as during the entire Beauty Showroom Day—an exclusive third-day event catering to an affluent audience passionate about fashion and beauty.`,
  buttonText: 'Learn More >',
  buttonLink: '/offer'
};

const NEW_FASHION_SHOW_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/fd.mp4',
  title: 'The Dedicated designer popup corner',
  description: `Secure your Designer's Popup to showcase your collection in an exclusive, premium environment—connecting directly with buyers, media, and trendsetters. Meanwhile, discover the excitement of the Catwalk Show, where live runway presentations unveil new collections and styles. Whether you're presenting or exploring, our event offers a unique platform for visibility, collaboration, and inspiration.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const NEW_BEAUTY_EXPO_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/bd.mp4',
  title: 'Explore 80 Stations with Beauty Service Providers',
  description: `Showcase your offerings, connect with potential clients, and discover new collaboration opportunities in a dynamic expo setting featuring 80 dedicated stations. Present your services, meet key representatives, and grow your business through impactful networking and real-time engagement.`,
  buttonText: 'Reserve Station >',
  buttonLink: '/offer'
};

const BEAUTY_AWARDS_SPONSOR = {
  type: 'sponsorStation',
  videoUrl: 'https://storage.yandexcloud.net/videos-meyou/efw2025/Professional_Mode_the_camera_dolly_zoom_out%20(online-video-cutter.com).mp4',
  title: `The award ceremony will take place at the luxurious<br> and fashionable venue of Dubai on 15.04.2025.`,
  description: ``,
  buttonText: '',
  buttonLink: ''
};

export const NEW_EVENT_TYPES = {
  bigSponsorStation: {
    type: 'bigSponsorStation',
    title: 'Новые станции для спонсоров',
    description: 'Станции на базе ИИ, разработанные для бесшовного нетворкинга, генерации лидов и интерактивных презентаций. Взаимодействуйте с потенциальными клиентами через динамические экраны и интеграцию медиа в реальном времени.',
    images: [
      { src: Station1, caption: 'Новая станция 1', subcaption: 'Новое описание и цена' },
      { src: Station2, caption: 'Новая станция 2', subcaption: 'Новое описание и цена' },
      { src: Station3, caption: 'Новая станция 3', subcaption: 'Новое описание и цена' }
    ],
    buttonText: 'Больше информации >'
  }
} as const;

export const NEW_PROGRAM_TABS = [
  // {
  //   title: 'Magazine pre-Launch',
  //   date: '4 August 2025',
  //   events: [
  //     {
  //       type: 'event',
  //       time: '4 August',
  //       place: 'Dubai Mall',
  //      },
  //   ],
  // },
  // {
  //   title: 'Pre-Launch',
  //   date: '4 November 2025',
  //   mobileDate: '4 Nov',
  //   events: [
  //     {
  //       type: 'event',
  //       time: '4 November',
  //       place: 'Belcanto Dubai Opera',
  //       description: 'Pre-Launch',
  //       details: 'TUESDAY TONIGHT | EXCLUSIVE PRE-LAUNCH & PORTFOLIO EVENT — a special presentation introducing participating designers and brands.<br><strong>By Invitation Only</strong>',
  //       buttonText: ' REQUEST INVITE >',
  //       buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
  //      },
  //   ],
  // },
  { 
    title: 'Model Casting', 
    date: '5-10 November 2025',
    mobileDate: '5-10 Nov',
    events: [
      {
        type: 'event',
        time: '5-10 November',
        place: 'Disclosed to Attendees',
        description: `Model Casting`,
        details: `WEDNESDAY & THURSDAY | INTERNATIONAL MODEL CONFERENCE & CASTING EVENT — organized by MAG, bringing together aspiring models to sign the contracts with leading Top Agencies from Milan, Paris, London and New York and to start your real model career right at the event
        <div class="mt-6">
        <div class="mt-2">
        <strong><a href="https://modelagentgroup.com/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">MAG – Model Agent Group</a></strong>
        <div class="mt-2">
        Worldwide Model Agency
        <div class="mt-2">
        Scouting / Development / Placement
        <div class="mt-2">
        Based in Austria
        <div class="mt-2">
        <strong>Registered Models Only</strong>
        </div>
        <div class="mt-4 flex flex-col md:flex-row gap-2 md:gap-4">
        <a href="https://www.instagram.com/modelagentgroup" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span class="text-sm">@modelagentgroup</span>
        </a>
        <a href="https://www.instagram.com/globalfashioncode" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span class="text-sm">@globalfashioncode</span>
        </a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
      },
    ] 
  },
  { 
    title: `Fashion Shows 1<sup>st</sup> & 2<sup>nd</sup> Days`, 
    date: '8-9 November 2025',
    mobileDate: '8-9 Nov',
    events: [
      {
        type: 'event',
        time: '8 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `SATURDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS SS 26`,
        details: `<strong class="mb-2 block">By Invitation Only</strong>
          <ul class="space-y-2 text-black" id="designers-day-8">
            <!-- Дизайнеры будут загружены динамически -->
          </ul>
        `,
        buttonText: 'REQUEST INVITE >',
        buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
      },
      NEW_FASHION_SHOW_SPONSOR,
       {
         type: 'event',
         time: '9 November',
         place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
         description: `SUNDAY |  PRÊT-À-PORTER WOMEN'S & MEN'S COLLECTIONS SS 26`,
         details: `<strong class="mb-2 block">By Invitation Only</strong>
           <ul class="space-y-2 text-black" id="designers-day-9">
             <!-- Дизайнеры будут загружены динамически -->
           </ul>
         `,
         buttonText: 'REQUEST INVITE >',
         buttonLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9UiUI9FshAS-G9Ikkdj5Pq9DV3zkwtqdNdoNXeLxe2LQeEQ/viewform'
       },
    ] 
  },
    { 
    title: `Pop-Up Market 3<sup>rd</sup> & 4<sup>th</sup> Days`, 
    date: '10-11 November',
    mobileDate: '10-11 Nov',
    events: [
      {
        type: 'event',
        time: '10 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY | BEAUTY DAY`,
         details: `
          <strong>Free Entry | 10:00–18:00</strong>
           <div class="mt-4">
           <ul class="space-y-2 text-sm">
             <li>• 40 Designer Collection Pop-ups</li>
             <li>• Beauty & cosmetics brands</li>
             <li>• MUAs, nails, brows/lashes</li>
             <li>• Salons, spas, bridal beauty</li>
             <li>• Makeup & cosmetology schools / courses</li>
           </ul>
           </div>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
              <strong>TRY YOUR BRAND AT EFW</strong>
              <strong>2h Showcase Spot — Free via Waitlist</strong>
              <ul class="space-y-2 text-sm">
                <li>• 20 lead chats with real visitors</li>
                <li>• Limited 10–20 showcase spots, up to 80 SMEs selected</li>
                <li>• Subsidized by Dubai Culture & Emirates Fashion Week to support beauty & design businesses</li>
              </ul>
            </div>
            <div class="flex flex-col mt-4">
              <a href="/offer?tr" style="background-color:rgb(109, 109, 109);" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>Join Wait List | 2h Free Trial Spot</span>
                <span id="trial-waitlist-count-1" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
              </div>
         `,
      },
      {
        type: 'event',
        time: '11 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `TUESDAY | WELLNESS DAY`,
         details: `
          <strong>Free Entry | 10:00–18:00</strong>
           <div class="mt-4">
           <ul class="space-y-2 text-sm">
             <li>• 40 Designer Collection Pop-ups</li>
             <li>• Medical & aesthetic clinics</li>
             <li>• Health & wellness tourism, nutrition</li>
             <li>• Spas, massage, barbers</li>
             <li>• Gyms & wellness studios</li>
             <li>• Beauty tech (CRM, booking, payments)</li>
             <li>• Salon & clinic equipment suppliers</li>
           </ul>
           </div>
           <div class="flex flex-col gap-3 mt-4">
             <a href="/offer" class="inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors bg-black text-white hover:bg-black/90 w-fit">
               <span>BOOK A SPOT AS A COMPANY</span>
             </a>
            <strong>TRY YOUR BRAND AT EFW</strong>
            <strong>2h Showcase Spot — Free via Waitlist</strong>
            <ul class="space-y-2 text-sm">
              <li>• 20 lead chats with real visitors</li>
              <li>• Limited 10–20 showcase spots, up to 80 SMEs selected</li>
              <li>• Subsidized by Dubai Culture & Emirates Fashion Week to support beauty & design businesses</li>
            </ul>
           </div>
              <div class="flex flex-col mt-4">
               <a href="/offer?tr&waitlist" style="background-color:rgb(109, 109, 109);" class=" inline-flex items-center gap-2 px-6 py-2.5 text-sm rounded-3xl transition-colors text-white w-fit">
                <span>Join Wait List | 2h Free Trial Spot</span>
                <span id="trial-waitlist-count-2" style="background-color: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 12px; font-weight: bold;">0</span>
              </a>
            </div>
         `,
      },
    ] 
  },
  { 
    title: 'Beauty Awards', 
    date: '10 November 2025',
    mobileDate: '10 Nov',
    events: [
      {
        type: 'event',
        time: '10 November',
        place: `Skylight Gallery,<br>Arjaan Dubai Media City`,
        description: `MONDAY TONIGHT | The award ceremony, Gala Dinner, and IntroduceMe Talk Show for VIP Buyers, Designers, Exhibitors, Influencers & Authorities`,
        details: `
          <strong>By Invitation Only</strong>
        `,
      },
    ] 
  },
  {
    title: 'VIP Brand Presentation',
    date: '11 November 2025',
    mobileDate: '11 Nov',
    events: [
      {
        type: 'event',
        time: '11 November',
        place: `Belcanto Dubai Opera`,
        description: `TUESDAY TONIGHT | VIP Brand Presentation at Dubai Opera — exclusive showcase for a distinguished audience`,
        details: `
          <strong>By Invitation Only</strong>
        `,
      },
    ] 
  },
]; 