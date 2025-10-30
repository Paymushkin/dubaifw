# 📊 Система управления данными лиц EFW

## 🎯 Обзор

Система автоматически загружает данные лиц из Google Sheets с fallback на локальные данные.

## 📁 Файлы

- **`composables/useFaces.ts`** - основной composable для работы с данными
- **`components/FacesOfEfwSection.vue`** - компонент, использующий данные

## 🔧 Как это работает

### 1. **Локальные данные (fallback)**
```typescript
// В useFaces.ts
const localFacesData = [
  {
    name: 'Olga Khayrullova',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-3.png',
    icon: true,
    links: [
      { text: 'Olga Gallery 1', url: 'https://disk.yandex.ru/d/H1mkiuK2ZGnGtg' }
    ]
  }
  // ... остальные данные
]
```

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

### **Пример данных:**
```
name: "Olga Khayrullova"
image_url: "https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-3.png"
order: 1
icon: "TRUE"
link_text_1: "Olga Gallery 1"
link_url_1: "https://disk.yandex.ru/d/H1mkiuK2ZGnGtg"
link_text_2: "Olga Gallery 2"
link_url_2: "https://disk.yandex.ru/d/OyDVLRK3xh4XGA"
```

### **Параметр order:**
- **Назначение:** Определяет порядок отображения лиц в слайдере
- **Формат:** Число (1, 2, 3, ...)
- **Сортировка:** По возрастанию (1 → 2 → 3)
- **По умолчанию:** 999 (если не указан)

## 🚀 Использование в компонентах

```vue
<template>
  <div v-for="person in facesData" :key="person.name">
    <h3>{{ person.name }}</h3>
    <img :src="person.image" :alt="person.name" />
    <div v-if="person.icon" class="icon-ribbon">ICON of EFW</div>
    <div v-for="link in person.links" :key="link.text">
      <a :href="link.url" target="_blank">{{ link.text }}</a>
    </div>
  </div>
</template>

<script setup>
import { useFaces } from '~/composables/useFaces'

const { facesData, isLoading, isDataUpdated, fetchFaces } = useFaces()

// Автоматическая загрузка при монтировании
onMounted(async () => {
  if (!isDataUpdated.value) {
    await fetchFaces()
  }
})
</script>
```

## 🔄 Состояния системы

- **`facesData`** - текущие данные (локальные или из Google Sheets)
- **`isLoading`** - идет ли загрузка
- **`isDataUpdated`** - были ли данные обновлены из Google Sheets
- **`lastFetchTime`** - время последней загрузки

## ⚡ Преимущества

1. **Быстрая загрузка** - локальные данные показываются мгновенно
2. **Автообновление** - данные обновляются из Google Sheets в фоне
3. **Надежность** - fallback на локальные данные при ошибках
4. **Простота** - один composable для всех компонентов

## 🛠️ Обновление данных

### **В Google Sheets:**
1. Откройте таблицу: https://docs.google.com/spreadsheets/d/1lK7QQ8McYRzsVlQ7I-xs_BLL0eVRhgKm6oVov8JJswE/edit
2. Обновите данные в таблице
3. Сохраните изменения

### **На сайте:**
- Данные обновятся автоматически при следующей загрузке страницы
- Или принудительно через `fetchFaces()`

## 🔧 Настройка

### **Изменение URL Google Sheets:**
```typescript
// В useFaces.ts
const GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/gviz/tq?tqx=out:json&gid=0'
```

### **Добавление новых полей:**
1. Обновите структуру в `localFacesData`
2. Обновите `transformFacesData()` функцию
3. Обновите Google Sheets с новыми столбцами

---

*Система готова к использованию! 🎉*
