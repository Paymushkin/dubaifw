// composables/useFaces.ts
import { ref, computed } from 'vue'

// Локальные данные (fallback)
const localFacesData = [
  {
    name: 'Olga Khayrullova',
    title: 'Personal Fashion Stylist',
    subtitle: 'Recognized by EFW SS26 Season',
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
    title: 'Designer',
    subtitle: 'Recognized by EFW SS26 Season',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-2.png',
    icon: true,
    order: 2,
    links: [
      { text: 'Liza Gallery', url: 'https://disk.yandex.ru/a/O-Yaq82vmplm-g' }
    ]
  },
  {
    name: 'Olga Baltrukevica',
    title: 'Model',
    subtitle: 'Recognized by EFW SS26 Season',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-1.png',
    icon: true,
    order: 3,
    links: [
      { text: 'Olga Gallery', url: 'https://failiem.lv/u/trcyc4awyu' }
    ]
  },
  {
    name: 'Ekaterina Potanina',
    title: 'Influencer',
    subtitle: 'Recognized by EFW SS26 Season',
    image: 'https://storage.yandexcloud.net/videos-meyou/efw2025/ai/faces/face-4.png',
    icon: false,
    order: 4,
    links: [
      { text: 'Instagram', url: 'https://www.instagram.com/potanina_ea/' }
    ]
  },
  {
    name: 'Katerina Melikhova',
    title: 'Guest',
    subtitle: 'Recognized by EFW SS26 Season',
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
        title: row.title || '',
        subtitle: row.subtitle || '',
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
