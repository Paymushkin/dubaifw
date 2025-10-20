<template>
  <section :class="[
    'container mx-auto px-4',
    { 'py-20 md:py-[100px]': !standalone },
    { 'py-[60px] md:py-[120px]': standalone }
  ]">
  <h2 id="faq" data-nosnippet class="text-xl md:text-3xl xl:text-4xl mb-8 md:mb-12">
      <template v-if="standalone">
        <a href="#faq" class="hover:opacity-80 transition-opacity">Frequently Asked Questions</a>
      </template>
      <template v-else>
        <a href="#faq" class="hover:opacity-80 transition-opacity">FREQUENTLY ASKED QUESTIONS</a>
      </template>
    </h2>
    
    <!-- Индикатор загрузки -->
    <div v-if="loading" class="flex justify-center items-center py-8">
      <div class="text-gray-500">Loading Frequently Asked Questions...</div>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-else-if="error" class="text-center py-8">
      <div class="text-red-500 mb-4">Error loading Frequently Asked Questions: {{ error }}</div>
      <button 
        @click="handleRefresh"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Retry
      </button>
    </div>

    <!-- FAQ контент -->
    <div v-else class="flex flex-col gap-4">
      <div
        v-for="item in displayedItems"
        :key="item.id"
        :id="item.id"
      >
        <div 
          class="border border-black cursor-pointer"
          @click="togglePanel(item.id)"
        >
          <div 
            class="w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"
            :class="{ 'border-b border-black': openPanels[item.id] }"
          >
            <span class="text-base md:text-xl xl:text-2xl pr-8 text-left">{{ item.question }}</span>
            <span 
              class="text-2xl transform transition-transform duration-300 flex-shrink-0"
              :class="{ 'rotate-45': openPanels[item.id] }"
            >+</span>
          </div>

          <transition
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="transform scale-y-95 -translate-y-1 opacity-0"
            enter-to-class="transform scale-y-100 translate-y-0 opacity-100"
            leave-active-class="transition duration-400 ease-in-out"
            leave-from-class="transform scale-y-100 translate-y-0 opacity-100"
            leave-to-class="transform scale-y-95 -translate-y-1 opacity-0"
          >
            <div 
              v-show="openPanels[item.id]"
              class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, nextTick, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  standalone: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();
const initialHash = ref(route.hash.slice(1));
const displayLimit = 5;

// Состояние для FAQ данных
const faqItems = ref([]);
const loading = ref(false);
const error = ref('');

// Fallback данные на случай ошибки загрузки
const fallbackFaqItems = [
  {
    id: 'ai-matchmaking',
    question: 'What is the AI matchmaking tool? How does it work?',
    answer: 'The AI matchmaking tool is available on laptops at each exhibitor station. Organizers will introduce at least 50 visitor leads to every exhibitor through chat. Some visitors will approach the station directly, while others will be connected via chat for online introductions and follow-ups.'
  },
  {
    id: 'visitor-passes',
    question: 'Are visitor passes free? How many invites are out? What\'s the audience profile?',
    answer: 'Visitor entry is free. We usually welcome 300–700 guests, depending on the show. For April 15, we expect 300–500 attendees throughout the day. Our audience is diverse and international, mainly beauty- and fashion-conscious individuals from mid- to high-income backgrounds. We do not track nationality at registration.'
  },
  {
    id: 'buyers',
    question: 'Who are the \'Buyers\'? What\'s their ratio to media, influencers, stylists, bloggers?',
    answer: 'Buyers include individuals purchasing for themselves and for retail stores. We don\'t publish an exact ratio, but the crowd includes a mix of media, influencers, stylists, bloggers, and direct buyers.'
  },
  {
    id: 'no-showcase',
    question: 'What if I don\'t want a showcase station but still want to engage buyers?',
    answer: 'You can attend for free, observe how other beauty service providers present their services, and interact with the audience. Many providers offer special promotions and discounts to visitors.'
  },
  {
    id: 'example-brands',
    question: 'What are some example brands in the business showcase corner?',
    answer: 'Over 30 brands are confirmed — including designers from the Middle East, CIS, Eastern Europe, and local UAE talents. We also host a wide range of beauty service providers: clinics, plastic surgery, botox, fitness, cosmetology, nails, lashes, brows, hair, and styling.'
  }
];

// Функция для загрузки FAQ данных (используем тот же подход, что и у компаний)
const fetchFAQ = async () => {
  try {
    loading.value = true;
    error.value = '';
    
      // Определяем, работаем ли мы локально или на продакшене
      const isLocal = window.location.hostname.includes('localhost') || 
                     window.location.hostname.includes('127.0.0.1') ||
                     window.location.hostname.includes('0.0.0.0');
      
      if (isLocal) {
        // Локально используем API
        try {
          const response = await $fetch('/api/faq', {
            query: { _t: Date.now() } // Добавляем timestamp для предотвращения кеширования
          });
          if (response.success) {
            faqItems.value = response.faq || [];
          } else {
            error.value = response.error || 'Ошибка загрузки данных';
          }
        } catch (apiError) {
          console.error('API error:', apiError);
          // Если API не работает, используем fallback данные
          faqItems.value = fallbackFaqItems;
        }
      } else {
        // На продакшене (GitHub Pages) используем прямые запросы к Google Sheets
        try {
          const SPREADSHEET_ID = '1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s';
          const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
          
          const response = await fetch(CSV_URL);
          
          if (!response.ok) {
            throw new Error(`CSV export error: ${response.statusText}`);
          }
          
          const csvText = await response.text();
          
          // Парсим CSV правильно (учитывая запятые в кавычках)
          const lines = csvText.split('\n');
          const rows = lines.filter(line => line.trim()).map(line => {
            const values = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
              const char = line[i];
              
              if (char === '"') {
                inQuotes = !inQuotes;
              } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
              } else {
                current += char;
              }
            }
            
            values.push(current.trim());
            return values;
          });
          
          // Преобразуем в FAQ формат
          const faqItemsFromCSV = rows.map((row, index) => ({
            id: `faq-${index + 1}`,
            question: row[0] || '',
            answer: row[1] || '',
            order: row[2] || (index + 1)
          })).filter(item => item.question && item.answer);
          
          faqItems.value = faqItemsFromCSV;
          console.log('FAQ items loaded from Google Sheets:', faqItemsFromCSV.length);
          
        } catch (csvError) {
          console.error('CSV fetch error:', csvError);
          // Если CSV не работает, используем fallback данные
          faqItems.value = fallbackFaqItems;
        }
      }
  } catch (err) {
    console.error('Error fetching FAQ:', err);
    error.value = 'Ошибка загрузки данных';
    faqItems.value = fallbackFaqItems;
  } finally {
    loading.value = false;
  }
};

// Вычисляемые свойства
const displayedItems = computed(() => {
  return faqItems.value; // Показываем все FAQ элементы
});

// Создаем объект для хранения состояния каждой панели
const openPanels = ref({});

// Функция для инициализации панелей
const initializePanels = () => {
  const items = faqItems.value;
  const newPanels = {};
  items.forEach(item => {
    newPanels[item.id] = false;
  });
  openPanels.value = newPanels;
};

const togglePanel = (id) => {
  const isCurrentlyOpen = openPanels.value[id];
  
  // Закрываем все панели
  Object.keys(openPanels.value).forEach(panelId => {
    openPanels.value[panelId] = false;
  });

  // Если панель была закрыта, открываем её
  if (!isCurrentlyOpen) {
    openPanels.value[id] = true;
    
    // Обновляем URL
    const newUrl = `${window.location.pathname}#${id}`;
    if (props.standalone) {
      window.history.pushState(null, '', newUrl);
    } else {
      window.history.replaceState(null, '', newUrl);
    }

    // Скроллим к элементу
    nextTick(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = props.standalone ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  } else {
    // Если закрываем панель, убираем хеш из URL
    const newUrl = window.location.pathname;
    if (props.standalone) {
      window.history.pushState(null, '', newUrl);
    } else {
      window.history.replaceState(null, '', newUrl);
    }
  }
};

// Обработчик изменения хеша в URL
const handleHashChange = () => {
  const hash = window.location.hash.slice(1);
  
  // Закрываем все панели
  Object.keys(openPanels.value).forEach(id => {
    openPanels.value[id] = false;
  });

  // Если есть хеш и он соответствует существующему FAQ, открываем его
  if (hash && faqItems.some(item => item.id === hash)) {
    openPanels.value[hash] = true;
    
    nextTick(() => {
      const element = document.getElementById(hash);
      if (element) {
        const offset = props.standalone ? 80 : 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
};

onMounted(async () => {
  const hash = route.hash.slice(1);
  
  // Загружаем FAQ данные
  await fetchFAQ();
  
  // Ждем загрузки данных
  await nextTick();
  
  // Инициализируем панели после загрузки данных
  initializePanels();

        // Если есть хеш, открываем соответствующую панель
        if (hash && faqItems.value.some(item => item.id === hash)) {
          openPanels.value[hash] = true;
        } else if (faqItems.value.length > 0) {
          // Открываем первый пункт всегда (и на главной, и на странице FAQ)
          const firstItem = faqItems.value[0];
          if (firstItem) {
            openPanels.value[firstItem.id] = true;
          }
        }

  // Добавляем слушатель изменения хеша только на странице FAQ
  if (props.standalone) {
    window.addEventListener('hashchange', handleHashChange);
  }
});

// Функция для обновления данных
const handleRefresh = () => {
  fetchFAQ();
};

// Экспортируем функции для использования в родительском компоненте
defineExpose({
  refresh: handleRefresh
});

// Удаляем слушатель при размонтировании компонента
onUnmounted(() => {
  if (props.standalone) {
    window.removeEventListener('hashchange', handleHashChange);
  }
});
</script>

<style scoped>
.transform {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.transition {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
