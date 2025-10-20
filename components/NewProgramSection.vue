<template>
  <div class="container mx-auto">
    <div class="flex justify-between md:items-center gap-8 md:mb-[50px] mb-4 max-w-[1200px]">
      <h2 id="spring-summer-2026" data-nosnippet class="text-xl md:text-3xl xl:text-4xl scroll-mt-[120px] md:scroll-mt-[100px]">
        <!-- debug: log click and bounding rect before/after scroll -->
        <a href="#spring-summer-2026" class="hover:opacity-80 transition-opacity" @click="logAnchorDebug('spring-summer-2026')">14th Spring Summer 2026</a>
      </h2>
      <NuxtLink 
        target="_blank"
        class="hover:opacity-80 transition-opacity duration-300"
        to="https://docs.google.com/forms/d/11I7bcoDEzErBszt2UfZqf04LAjljlpkBhdRTD6CrC7g/edit?fbclid=PAZXh0bgNhZW0CMTEAAabTXlVnA-8uMswE4mM1iOQkULaorR2fFi9eZsVZlgEe1jMJH0Kb7OcDJJk_aem_LIewtA-gbtt6seDB3ZE4pw">
        <BaseButton variant="primary">
          <span>Visit</span>
          <span>></span>
        </BaseButton>
      </NuxtLink>
    </div>

    <!-- Mobile Tabs -->
    <div class="md:hidden mb-4 sticky top-0 z-10 bg-white">
      <div class="flex w-full border-b border-gray-200">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-center justify-center flex-1 px-2 py-3 border-r border-gray-300 last:border-r-0 transition-colors duration-300"
          :class="{
            'bg-black text-white': currentTab === index,
            'bg-white text-black hover:bg-gray-50': currentTab !== index,
          }"
        >
          <span class="text-sm font-medium">{{ tab.mobileDate?.split(' ')[0] || '1' }}</span>
          <span class="text-xs opacity-75">{{ tab.mobileDate?.split(' ')[1] || 'Nov' }}</span>
        </button>
      </div>
    </div>

    <!-- Desktop Tabs -->
    <div 
      class="hidden md:block overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing w-full" 
      ref="tabsContainer"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
      @touchstart="startDragTouch"
      @touchmove="onDragTouch"
      @touchend="stopDrag"
    >
      <div class="flex md:gap-10 gap-8 mb-4 md:mb-10 whitespace-nowrap pb-4 md:pb-0 pl-4 md:pl-0" style="padding-right: 100vw;">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          class="flex flex-col items-start gap-2 hover:text-black flex-shrink-0"
          :class="{
            'text-black': currentTab === index,
            'text-black-20': currentTab !== index,
          }"
        >
          <span v-html="tab.title" class="text-xl 2xl:text-4xl md:text-3xl transition-colors duration-300"></span>
          <span class="transition-colors duration-300">
            {{ tab.date }}
          </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col md:gap-6 gap-5">
      <div
        v-for="(event, index) in updatedProgram?.events || []"
        :key="index"
      >
        <template v-if="event.type === 'sponsorStation'">
          <SponsorStation 
            :video-url="event.videoUrl" 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>

        <template v-else-if="event.type === 'bigSponsorStation'">
          <BigSponsorStation 
            :title="event.title"
            :description="event.description"
            :button-text="event.buttonText"
            :images="event.images"
          />
        </template>

        <template v-else>
          <ProgramEvent
            :time="event.time"
            :place="event.place"
            :description="event.description"
            :details="event.details"
            :button-text="event.buttonText"
            :button-link="event.buttonLink"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import BaseButton from '~/components/ui/BaseButton.vue';
import SponsorStation from '~/components/program/SponsorStation.vue';
import BigSponsorStation from '~/components/program/BigSponsorStation.vue';
import ProgramEvent from '~/components/program/ProgramEvent.vue';
import { NEW_EVENT_TYPES, NEW_PROGRAM_TABS } from '~/constants/newProgram';
import { useCompaniesCount } from '~/composables/useCompaniesCount';
import { useDesigners } from '~/composables/useDesigners';

const currentTab = ref(2);
const tabs = NEW_PROGRAM_TABS;
const tabsContainer = ref(null);
let isDragging = false;
let startX = 0;
let scrollLeft = 0;

// Debug helper for anchor clicks
const logAnchorDebug = (id) => {
  try {
    const el = document.getElementById(id);
    if (!el) {
      console.log('[anchor-debug]', id, 'not found');
      return;
    }
    const rectBefore = el.getBoundingClientRect();
    console.log('[anchor-debug] BEFORE', id, {
      rectTop: rectBefore.top,
      scrollY: window.scrollY,
    });
    setTimeout(() => {
      const rectAfter = el.getBoundingClientRect();
      console.log('[anchor-debug] AFTER', id, {
        rectTop: rectAfter.top,
        scrollY: window.scrollY,
      });
    }, 400);
  } catch (e) {
    console.log('[anchor-debug] error', e);
  }
};

// Получаем глобальные счетчики компаний
const { companiesCount, trialWaitlistCount, updateCompaniesCount, updateTrialWaitlistCount } = useCompaniesCount();

// Локальное хранилище для данных компаний
const companiesData = ref({
  total: 0,
  waitlist: 0,
  loaded: false
});

// Флаг для предотвращения бесконечных циклов
const isUpdating = ref(false);

// Debounce для обновления счетчиков
let updateTimeout = null;

// Используем composable для работы с дизайнерами
const { fetchDesigners, getFormattedDesignersByDay, designers, isDataUpdated } = useDesigners();

// Используем существующий механизм счетчика компаний

// Загружаем данные дизайнеров при монтировании компонента (только один раз)
onMounted(async () => {
  
  // Пытаемся обновить данные из Google Sheets (только если еще не обновлены)
  if (!isDataUpdated.value) {
    try {
      await fetchDesigners();
    } catch (error) {
      // Используем локальные данные
    }
  }
  
  // Обновляем DOM после загрузки данных
  nextTick(() => {
    updateDesignersInDOM();
    updateWaitlistCount();
    
    // Дополнительные попытки обновления счетчика
    setTimeout(() => {
      updateWaitlistCount();
    }, 1000);
    
    setTimeout(() => {
      updateWaitlistCount();
    }, 5000);
    
    // Принудительная загрузка данных, если счетчик равен 0
    setTimeout(() => {
      forceLoadCompaniesData();
    }, 2000);
  });
  
  // Настраиваем MutationObserver для отслеживания появления элементов в DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' && !isUpdating.value) {
        // Проверяем, появились ли нужные элементы в добавленных узлах
        const addedNodes = Array.from(mutation.addedNodes);
        const hasRelevantElements = addedNodes.some(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            return node.id === 'trial-waitlist-count-1' || 
                   node.id === 'trial-waitlist-count-2' ||
                   node.querySelector('#trial-waitlist-count-1') ||
                   node.querySelector('#trial-waitlist-count-2');
          }
          return false;
        });
        
        if (hasRelevantElements && companiesData.value.loaded) {
          updateWaitlistCount();
        }
      }
    });
  });
  
  // Начинаем наблюдение за изменениями в DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  // Очищаем observer при размонтировании компонента
  onUnmounted(() => {
    observer.disconnect();
    if (updateTimeout) {
      clearTimeout(updateTimeout);
    }
  });
});

// Отслеживаем изменения в данных дизайнеров и обновляем DOM
watch(designers, () => {
  nextTick(() => {
    updateDesignersInDOM();
  });
}, { deep: true });

// Отслеживаем изменения активного таба и обновляем DOM
watch(currentTab, () => {
  nextTick(() => {
    updateDesignersInDOM();
  });
});

// Функция для обновления счетчика waitlist
const updateWaitlistCount = () => {
  // Очищаем предыдущий timeout
  if (updateTimeout) {
    clearTimeout(updateTimeout);
  }
  
  // Debounce обновление на 200ms
  updateTimeout = setTimeout(() => {
    // Предотвращаем бесконечные циклы
    if (isUpdating.value) {
      return;
    }
    
    isUpdating.value = true;
    
    const countValue = companiesCount.value || companiesData.value.waitlist || 0;
    
    // Обновляем оба счетчика на главной странице
    const trialCountElement1 = document.getElementById('trial-waitlist-count-1');
    if (trialCountElement1) {
      trialCountElement1.textContent = countValue;
    }
    
    const trialCountElement2 = document.getElementById('trial-waitlist-count-2');
    if (trialCountElement2) {
      trialCountElement2.textContent = countValue;
    }
    
    // Сбрасываем флаг через небольшую задержку
    setTimeout(() => {
      isUpdating.value = false;
    }, 100);
  }, 200);
};

// Отслеживаем изменения счетчика компаний
watch(companiesCount, () => {
  nextTick(() => {
    updateWaitlistCount();
  });
});

// Принудительная загрузка данных компаний, если счетчик равен 0
const forceLoadCompaniesData = async () => {
  // Всегда загружаем данные, независимо от текущего счетчика
  try {
    // Попытка загрузить данные напрямую из Google Sheets
    const SPREADSHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
    
    const response = await fetch(CSV_URL);
    if (response.ok) {
      const csvText = await response.text();
      const lines = csvText.split('\n');
      
      // Парсим CSV правильно (учитывая запятые в кавычках)
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
      
      // Преобразуем в формат компаний и фильтруем только waitlist
      const companiesFromCSV = rows.slice(1).map((row, index) => ({
        timestamp: row[0] || '',
        companyName: row[1] || '',
        industry: row[2] || '',
        name: row[3] || '',
        email: row[4] || '',
        phone: row[5] || '',
        message: row[6] || '',
        agreement1: row[7] || '',
        agreement2: row[8] || '',
        ipAddress: row[9] || '',
        userAgent: row[10] || '',
        status: row[11] || 'WAITLIST'
      })).filter(company => company.companyName);
      
      // Фильтруем только waitlist компании
      const waitlistCompanies = companiesFromCSV.filter(company => {
        return !company.status || 
               company.status === '' ||
               company.status === 'WAITLIST' ||
               company.status === 'waitlist'
      });
      
      const waitlistCount = waitlistCompanies.length;
      
      
      // Сохраняем данные в локальное хранилище
      companiesData.value = {
        total: companiesFromCSV.length,
        waitlist: waitlistCount,
        loaded: true
      };
      
      // Обновляем глобальный счетчик
      updateCompaniesCount(waitlistCount);
      
      // Принудительно обновляем DOM элементы
      setTimeout(() => {
        updateWaitlistCount();
      }, 100);
    } else {
      console.error('❌ NewProgramSection: Ошибка загрузки CSV:', response.status);
    }
  } catch (error) {
    console.error('❌ NewProgramSection: Ошибка загрузки данных:', error);
  }
};

// Функция для обновления дизайнеров в DOM
const updateDesignersInDOM = (retryCount = 0) => {
  let allUpdated = true;
  
  // Обновляем список для 8 ноября
  const day8Designers = getFormattedDesignersByDay('8');
  
  if (day8Designers.length > 0) {
    const day8Container = document.getElementById('designers-day-8');
    if (day8Container) {
      day8Container.innerHTML = day8Designers.map(designer => `<li>${designer}</li>`).join('');
    } else {
      allUpdated = false;
    }
  }
  
  // Обновляем список для 9 ноября
  const day9Designers = getFormattedDesignersByDay('9');
  
  if (day9Designers.length > 0) {
    const day9Container = document.getElementById('designers-day-9');
    if (day9Container) {
      day9Container.innerHTML = day9Designers.map(designer => `<li>${designer}</li>`).join('');
    } else {
      allUpdated = false;
    }
  }
  
  // Если не все контейнеры найдены и это не последняя попытка, повторяем через 500мс
  if (!allUpdated && retryCount < 5) {
    setTimeout(() => {
      updateDesignersInDOM(retryCount + 1);
    }, 500);
  }
};

// Computed свойство для программы (без обновления счетчика - это делается через DOM)
const updatedProgram = computed(() => {
  return NEW_PROGRAM_TABS[currentTab.value];
});

const startDrag = (e) => {
  isDragging = true;
  const slider = tabsContainer.value;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const startDragTouch = (e) => {
  isDragging = true;
  const slider = tabsContainer.value;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};

const onDrag = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const slider = tabsContainer.value;
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
};

const onDragTouch = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const slider = tabsContainer.value;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
};

const stopDrag = () => {
  isDragging = false;
};

const selectTab = (index) => {
  currentTab.value = index;
  
  // Обновляем дизайнеров в DOM при смене таба
  nextTick(() => {
    console.log('🔄 Смена таба, обновляем дизайнеров в DOM...');
    updateDesignersInDOM();
    
    // Обновляем счетчики при смене таба, если данные уже загружены
    if (companiesData.value.loaded) {
      console.log('🔄 Смена таба, обновляем счетчики...');
      updateWaitlistCount();
    }
  });
};


</script>

<style scoped>
button {
  transition: background-color 0.3s;
}

.hide-scrollbar {
  -ms-overflow-style: none;  /* IE и Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

/* Кастомный скроллбар */
.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Для Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}

.custom-scrollbar {
  -webkit-user-select: none;
  user-select: none;
}
</style> 