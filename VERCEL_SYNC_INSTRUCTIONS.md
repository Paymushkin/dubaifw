# 🔄 Синхронизация функционала между репозиториями

## 📋 Обзор изменений для Vercel репозитория

Для синхронизации функционала между GitHub Pages и Vercel репозиториями необходимо внести следующие изменения:

---

## 🎯 1. Система управления данными лиц (FacesOfEfwSection)

### **Создать файл:** `composables/useFaces.ts`

```typescript
// composables/useFaces.ts
import { ref, computed } from 'vue'

// Локальные данные (fallback)
const localFacesData = [
  {
    name: 'Olga Khayrullova',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-3.png',
    icon: true,
    order: 1,
    links: [
      { text: 'Olga Gallery 1', url: 'https://disk.yandex.ru/d/H1mkiuK2ZGnGtg' },
      { text: 'Olga Gallery 2', url: 'https://disk.yandex.ru/d/OyDVLRK3xh4XGA' },
      { text: 'Olga Gallery 3', url: 'https://disk.yandex.ru/d/i8UrwKqzfvP87Q' },
      { text: 'Olga Gallery 4', url: 'https://disk.yandex.ru/d/xcI2edSjve_VcQ' }
    ]
  },
  {
    name: 'Khalimova Liza',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-2.png',
    icon: true,
    order: 2,
    links: [
      { text: 'Liza Gallery', url: 'https://disk.yandex.ru/a/O-Yaq82vmplm-g' }
    ]
  },
  {
    name: 'Olga Baltrukevica',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-1.png',
    icon: true,
    order: 3,
    links: [
      { text: 'Olga Gallery', url: 'https://failiem.lv/u/trcyc4awyu' }
    ]
  },
  {
    name: 'Ekaterina Potanina',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-4.png',
    icon: false,
    order: 4,
    links: [
      { text: 'Instagram', url: 'https://www.instagram.com/potanina_ea/' }
    ]
  },
  {
    name: 'Katerina Melikhova',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-5.png',
    icon: false,
    order: 5,
    links: [
      { text: 'Instagram', url: 'https://www.instagram.com/katya_katerinina?igsh=YTZ5MnBodnN2dm5v' }
    ]
  }
]

// Реактивные данные
const facesData = ref([...localFacesData])
const isLoading = ref(false)
const isDataUpdated = ref(false)
const lastFetchTime = ref<number | null>(null)

// Google Sheets API URL для EFW Faces
const GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/1lK7QQ8McYRzsVlQ7I-xs_BLL0eVRhgKm6oVov8JJswE/gviz/tq?tqx=out:json&gid=0'

// Функция для преобразования данных из Google Sheets в формат компонента
const transformFacesData = (rawData: any[]) => {
  return rawData
    .filter(row => row.name && row.image_url) // Фильтруем пустые строки
    .map(row => {
      const links = []
      
      // Собираем все ссылки (до 4 штук)
      for (let i = 1; i <= 4; i++) {
        const textKey = `link_text_${i}` as keyof typeof row
        const urlKey = `link_url_${i}` as keyof typeof row
        
        if (row[textKey] && row[urlKey]) {
          links.push({
            text: row[textKey],
            url: row[urlKey]
          })
        }
      }
      
      return {
        name: row.name,
        image: row.image_url,
        icon: row.icon === 'TRUE' || row.icon === true,
        order: parseInt(row.order) || 999, // Порядковый номер, по умолчанию 999
        links
      }
    })
    .sort((a, b) => a.order - b.order) // Сортируем по порядку
}

// Функция для загрузки данных из Google Sheets
export const fetchFaces = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  
  try {
    console.log('🔄 Загружаем данные лиц из Google Sheets...')
    
    const response = await fetch(GOOGLE_SHEETS_URL)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const text = await response.text()
    
    // Убираем префикс "google.visualization.Query.setResponse(" и суффикс ");"
    const jsonText = text.replace(/^[^{]*/, '').replace(/[^}]*$/, '')
    
    const data = JSON.parse(jsonText)
    
    if (!data.table || !data.table.rows) {
      throw new Error('Неверный формат данных из Google Sheets')
    }
    
    // Преобразуем данные из Google Sheets
    const headers = data.table.cols.map((col: any) => col.label)
    const rows = data.table.rows.map((row: any) => {
      const rowData: any = {}
      row.c.forEach((cell: any, index: number) => {
        rowData[headers[index]] = cell ? cell.v : ''
      })
      return rowData
    })
    
    console.log('📊 Получены данные из Google Sheets:', rows)
    
    // Преобразуем в формат компонента
    const transformedData = transformFacesData(rows)
    
    if (transformedData.length > 0) {
      facesData.value = transformedData
      isDataUpdated.value = true
      lastFetchTime.value = Date.now()
      
      console.log('✅ Данные лиц успешно обновлены из Google Sheets:', transformedData)
    } else {
      console.warn('⚠️ Нет данных для обновления из Google Sheets')
    }
    
  } catch (error) {
    console.error('❌ Ошибка загрузки данных лиц из Google Sheets:', error)
    // Оставляем локальные данные как fallback
  } finally {
    isLoading.value = false
  }
}

// Composable для использования в компонентах
export const useFaces = () => {
  return {
    facesData: computed(() => facesData.value),
    isLoading: computed(() => isLoading.value),
    isDataUpdated: computed(() => isDataUpdated.value),
    lastFetchTime: computed(() => lastFetchTime.value),
    fetchFaces
  }
}
```

### **Обновить файл:** `components/FacesOfEfwSection.vue`

**Заменить секцию script:**

```vue
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFaces } from '~/composables/useFaces';

// Используем composable для работы с данными лиц
const { facesData, isLoading, isDataUpdated, fetchFaces } = useFaces();

const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const handlePrev = () => {
  swiperInstance.value?.slidePrev();
};

const handleNext = () => {
  swiperInstance.value?.slideNext();
};

const onSlideChange = () => {
  // Можно добавить логику при смене слайда
};

// Загружаем данные при монтировании компонента
onMounted(async () => {
  // Пытаемся обновить данные из Google Sheets (только если еще не обновлены)
  if (!isDataUpdated.value) {
    try {
      await fetchFaces();
    } catch (error) {
      console.error('Ошибка загрузки данных лиц:', error);
      // Используем локальные данные как fallback
    }
  }
});
</script>
```

---

## 🎯 2. Автоматическая подписка на календарь (Welcome страница)

### **Обновить файл:** `pages/welcome.vue`

**Добавить функцию подписки на календарь:**

```javascript
// Calendar subscription function
const openCalendarSubscription = () => {
  // Calendar ID
  const calendarId = 'a48ce6b68320071674bb11016e1486a03cc4e7c0a452cfc3b34503e26963c22c@group.calendar.google.com'
  
  // Определяем URL в зависимости от платформы
  const getCalendarUrl = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    
    // Для iOS/macOS используем webcal (подписка)
    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('mac')) {
      return `webcal://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`
    }
    
    // Для Android и остальных платформ используем Google Calendar subscription
    return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(calendarId)}`
  }
  
  const targetUrl = getCalendarUrl()
  
  // Открываем подписку на календарь
  window.open(targetUrl, '_blank')
  
  console.log('📅 Calendar subscription opened:', targetUrl)
};
```

**Обновить функцию `submitRegistration`:**

```javascript
// Submit registration
const submitRegistration = async () => {
  // Prevent multiple submissions
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Prepare data for Google Sheets
    const data = {
      name: registrationForm.value.name,
      company: registrationForm.value.company || '',
      email: registrationForm.value.email,
      inviter: guestName.value,
      barcode: barcodeValue.value, // Add barcode number from localStorage
      timestamp: new Date().toISOString(),
      source: 'EFW Registration'
    };

    // Send directly to Google Apps Script using GET with parameters (like working companies script)
    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx775kpyP4fh_-e5IfVR4Yq1pdUPyI5v_BRKrx3E724INB9TOylkmSQ4moj9sVEWDMnGA/exec';
    
    // Convert data to URL parameters
    const params = new URLSearchParams({
      action: 'submit',
      name: data.name,
      company: data.company,
      email: data.email,
      inviter: data.inviter,
      barcode: data.barcode,
      timestamp: data.timestamp,
      source: data.source
    });
    
    // Send request to Google Apps Script
    console.log('Sending registration data:', data);
    console.log('URL:', `${GOOGLE_APPS_SCRIPT_URL}?${params}`);
    
    try {
      const response = await fetch(`${GOOGLE_APPS_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'cors' // Try CORS first
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Google Apps Script response:', result);
        
        if (result.success) {
          console.log('✅ Registration successful:', result.message);
        } else {
          console.error('❌ Registration failed:', result.error);
        }
      } else {
        console.error('❌ HTTP error:', response.status, response.statusText);
      }
    } catch (corsError) {
      console.log('CORS error, trying no-cors mode...');
      
      // Fallback to no-cors mode
      await fetch(`${GOOGLE_APPS_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'no-cors'
      });
      
      console.log('Registration data sent (no-cors mode)');
    }

    // Close registration modal and open calendar subscription
    showRegistrationModal.value = false;
    
    // Автоматически открываем подписку на календарь
    console.log('✅ Registration successful! Opening calendar subscription...');
    setTimeout(() => {
      openCalendarSubscription();
    }, 1000); // Небольшая задержка для UX

  } catch (error) {
    console.error('Registration failed:', error);
    // Still redirect to calendar even if API fails
    showRegistrationModal.value = false;
    
    // Открываем подписку на календарь даже при ошибке
    console.log('⚠️ Registration had issues, but opening calendar subscription...');
    setTimeout(() => {
      openCalendarSubscription();
    }, 1000);
  } finally {
    // Always reset submitting state
    isSubmitting.value = false;
  }
};
```

---

## 🎯 3. Исправление useVideoVisibility composable

### **Обновить файл:** `composables/useVideoVisibility.ts`

```typescript
import { onMounted, onUnmounted, ref } from 'vue';
import type { Ref } from 'vue';

// Overloaded function signatures
export function useVideoVisibility(videoRef: Ref<HTMLVideoElement | null>): { isVisible: Ref<boolean> };
export function useVideoVisibility(): { setVideoRef: (el: HTMLVideoElement | null, key: string | number) => void; cleanup: () => void; isVisible: Ref<boolean> };
export function useVideoVisibility(videoRef?: Ref<HTMLVideoElement | null>) {
  let observer: IntersectionObserver | null = null;
  const isVisible = ref(false);
  const videoRefs = new Map<string | number, HTMLVideoElement>();

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const video = entry.target as HTMLVideoElement;
      if (!video) return;

      isVisible.value = entry.isIntersecting;

      if (entry.isIntersecting) {
        // Try to play when video becomes visible
        video.play().catch(() => {
          console.log('Playback failed, might need user interaction');
        });
      } else {
        // Pause when video is not visible
        video.pause();
      }
    });
  };

  const setVideoRef = (el: HTMLVideoElement | null, key: string | number) => {
    if (el) {
      videoRefs.set(key, el);
      if (!observer) {
        observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.5,
          rootMargin: '50px'
        });
      }
      observer.observe(el);
    } else {
      const existingVideo = videoRefs.get(key);
      if (existingVideo && observer) {
        observer.unobserve(existingVideo);
      }
      videoRefs.delete(key);
    }
  };

  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
    videoRefs.clear();
  };

  onMounted(() => {
    if (videoRef?.value) {
      // Single video ref mode
      if (!observer) {
        observer = new IntersectionObserver(handleIntersection, {
          threshold: 0.5,
          rootMargin: '50px'
        });
      }
      observer.observe(videoRef.value);

      // Initial play attempt
      videoRef.value.play().catch(() => {
        console.log('Initial playback failed, might need user interaction');
      });
    }
  });

  onUnmounted(() => {
    cleanup();
  });

  if (videoRef) {
    // Single video ref mode
    return {
      isVisible
    };
  } else {
    // Multiple video refs mode
    return {
      setVideoRef,
      cleanup,
      isVisible
    };
  }
}
```

---

## 🎯 4. Middleware для редиректов

### **Создать файл:** `middleware/redirects.ts`

```typescript
export default defineNuxtRouteMiddleware((to, from) => {
  // Редирект с корня по параметру ?to=/route
  if (to.path === '/' && to.query && typeof to.query.to !== 'undefined') {
    const raw = Array.isArray(to.query.to) ? to.query.to[0] : to.query.to
    const target = String(raw || '/')
    if (!target || target === '/') return

    // Разбираем целевой путь и его query (если переданы внутри to)
    const [targetPathOnly, targetSearch = ''] = target.split('?')
    const normalizedPath = targetPathOnly.startsWith('/')
      ? targetPathOnly
      : `/${targetPathOnly}`

    const targetQueryFromToParam: Record<string, string> = {}
    if (targetSearch) {
      new URLSearchParams(targetSearch).forEach((v, k) => {
        targetQueryFromToParam[k] = v
      })
    }

    // Берём исходные query (кроме to) и объединяем с целевыми
    const sourceQuery = { ...to.query }
    delete (sourceQuery as any).to
    const mergedQuery: Record<string, any> = {
      ...(sourceQuery as Record<string, any>),
      ...targetQueryFromToParam,
    }

    return navigateTo({ path: normalizedPath, query: mergedQuery }, { replace: true })
  }
  // Редирект с /offer/tr на /offer?tr
  if (to.path === '/offer/tr') {
    return navigateTo('/offer?tr', { replace: true })
  }
  
  // Можно добавить другие редиректы здесь
  // if (to.path === '/offer/waitlist') {
  //   return navigateTo('/offer?waitlist', { replace: true })
  // }
})
```

---

## 🎯 5. Обновления конфигурации

### **Обновить файл:** `nuxt.config.ts`

**Добавить в конфигурацию:**

```typescript
export default defineNuxtConfig({
  // ... существующая конфигурация
  
  nitro: {
    preset: 'vercel',
    routeRules: {
      '/': { static: false, prerender: false },
      '/dubaifw/**': { static: true },
      '/offer/tr': { redirect: '/offer?tr' },
      '/sitemap.xml': { static: true },
      '/__sitemap__/**': { static: true }
    },
    prerender: {
      // Не генерируем Nuxt-HTML для этих роутов, чтобы использовались файлы из public/*/index.html
      ignore: [
        '/trial',
        '/features',
        '/offer',
        '/gallery',
        '/request',
        '/faq',
        '/team',
        '/approved',
        '/station',
        '/calendar',
        '/visit',
        '/EFW_AICONTEST',
        '/welcome',
        '/home',
        '/widget'
      ]
    },
    experimental: {
      wasm: false
    }
  },
  
  site: {
    url: 'https://emiratesfashionweeks.com'
  },
  
  // ... остальная конфигурация
});
```

---

## 🎯 6. Дополнительные файлы

### **Создать файл:** `FACES_SYSTEM.md`

```markdown
# 📊 Система управления данными лиц EFW

## 🎯 Обзор

Система автоматически загружает данные лиц из Google Sheets с fallback на локальные данные.

## 📁 Файлы

- **`composables/useFaces.ts`** - основной composable для работы с данными
- **`components/FacesOfEfwSection.vue`** - компонент, использующий данные

## 🔧 Как это работает

### 1. **Локальные данные (fallback)**
Локальные данные показываются мгновенно при загрузке страницы.

### 2. **Загрузка из Google Sheets**
- **URL:** `https://docs.google.com/spreadsheets/d/1lK7QQ8McYRzsVlQ7I-xs_BLL0eVRhgKm6oVov8JJswE/gviz/tq?tqx=out:json&gid=0`
- **Формат:** JSON через Google Visualization API
- **Автоматическое преобразование** в формат компонента

### 3. **Логика работы**
```typescript
// В компоненте
onMounted(async () => {
  if (!isDataUpdated.value) {
    try {
      await fetchFaces(); // Загружаем из Google Sheets
    } catch (error) {
      // Используем локальные данные как fallback
    }
  }
});
```

## 📊 Структура Google Sheets

### **Заголовки столбцов:**
| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| name | image_url | order | icon | link_text_1 | link_url_1 | link_text_2 | link_url_2 | link_text_3 | link_url_3 | link_text_4 | link_url_4 |

### **Параметр order:**
- **Назначение:** Определяет порядок отображения лиц в слайдере
- **Формат:** Число (1, 2, 3, ...)
- **Сортировка:** По возрастанию (1 → 2 → 3)
- **По умолчанию:** 999 (если не указан)

## ⚡ Преимущества

1. **Быстрая загрузка** - локальные данные показываются мгновенно
2. **Автообновление** - данные обновляются из Google Sheets в фоне
3. **Надежность** - fallback на локальные данные при ошибках
4. **Простота** - один composable для всех компонентов
```

### **Создать файл:** `CALENDAR_REDIRECT.md`

```markdown
# 📅 Автоматическая подписка на календарь

## 🎯 Что изменилось

После заполнения анкеты "Join the Guest List" на странице `/welcome` автоматически открывается подписка на календарь Emirates Fashion Week.

## 🔄 Логика работы

### **Успешная регистрация:**
1. ✅ Пользователь заполняет форму "Join the Guest List"
2. ✅ Данные отправляются в Google Sheets
3. ✅ Модальное окно регистрации закрывается
4. ✅ Через 1 секунду автоматически открывается подписка на календарь

### **При ошибке регистрации:**
1. ⚠️ Данные не удалось отправить в Google Sheets
2. ⚠️ Модальное окно регистрации закрывается
3. ⚠️ Через 1 секунду все равно открывается подписка на календарь

## 📱 Поддержка платформ

### **iOS/macOS:**
- Используется `webcal://` протокол
- Автоматически открывается приложение Календарь
- Подписка добавляется в стандартный календарь

### **Android и другие платформы:**
- Используется Google Calendar web-интерфейс
- Открывается в новой вкладке браузера
- Пользователь может подписаться через Google Calendar

## 🚀 Результат

- **Прямая подписка** - пользователь сразу подписывается на календарь
- **Кроссплатформенность** - работает на iOS, Android и десктопе
- **Автоматизация** - не нужно переходить на отдельную страницу
- **Надежность** - подписка открывается даже при ошибках API
- **Логирование** - в консоли видны сообщения о статусе
```

---

## 🚀 Порядок внедрения

1. **Создать composable** `useFaces.ts`
2. **Обновить компонент** `FacesOfEfwSection.vue`
3. **Добавить функцию календаря** в `pages/welcome.vue`
4. **Обновить функцию регистрации** в `pages/welcome.vue`
5. **Исправить composable** `useVideoVisibility.ts`
6. **Создать middleware** `redirects.ts`
7. **Обновить конфигурацию** `nuxt.config.ts`
8. **Добавить документацию** (опционально)

---

## ✅ Результат

После внедрения всех изменений Vercel репозиторий будет иметь:

- **✅ Систему управления данными лиц** - загрузка из Google Sheets
- **✅ Автоматическую подписку на календарь** - после регистрации
- **✅ Исправленный composable** - корректная работа с видео
- **✅ Middleware для редиректов** - правильная обработка URL
- **✅ Полную синхронизацию** - идентичный функционал с GitHub Pages

**Все изменения готовы к внедрению!** 🎉

