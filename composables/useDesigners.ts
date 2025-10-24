import { LOCAL_DESIGNERS_DATA, updateLocalDesignersData } from '~/constants/designersData';

export const useDesigners = () => {
  const designers = ref<Record<string, any[]>>(LOCAL_DESIGNERS_DATA);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const isDataUpdated = ref(false);

  const fetchDesigners = async () => {
    // Если данные уже обновлены, не делаем повторный запрос
    if (isDataUpdated.value) {
      console.log('📋 Данные уже обновлены, пропускаем запрос');
      return;
    }

    loading.value = true;
    error.value = null;
    
    try {
      console.log('🌐 Запрашиваем актуальные данные дизайнеров из Google Sheets...');
      
      // Прямое обращение к Google Sheets CSV API
      const SPREADSHEET_ID = '1hr5eZ148EVDLhAdcY6L1t_PyNGlBtlQNIKm1jGhrQhw';
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
      
      const response = await fetch(CSV_URL);
      
      if (!response.ok) {
        throw new Error(`CSV export error: ${response.statusText}`);
      }
      
      const csvText = await response.text();
      console.log('📊 Получены CSV данные:', csvText.substring(0, 200) + '...');
      
      // Парсинг CSV
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
      
      const designersData = rows.slice(1).map((row, index) => ({
        name: row[0] || '',
        country: row[1] || '',
        day: row[2] || '',
        month: row[3] || '',
        confirmed: row[4] === 'TRUE'
      })).filter(designer => designer.name);
      
      const designersByDay = designersData.reduce((acc, designer) => {
        const day = designer.day;
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(designer);
        return acc;
      }, {} as Record<string, typeof designersData>);
      
      // Обновляем данные только если получили актуальные
      designers.value = designersByDay;
      updateLocalDesignersData(designersByDay);
      isDataUpdated.value = true;
      console.log('✅ Данные дизайнеров обновлены из Google Sheets:', designers.value);
      
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Unknown error';
      console.error('❌ Ошибка запроса:', error.value);
      console.log('📋 Используем локальные данные (уже загружены)');
    } finally {
      loading.value = false;
    }
  };

  // Функция для маскирования имени
  const maskName = (name: string): string => {
    if (!name) return '';
    
    const words = name.split(' ');
    return words.map(word => {
      if (word.length <= 2) {
        return word.charAt(0) + '*'.repeat(word.length - 1);
      }
      
      const firstChar = word.charAt(0);
      const lastChar = word.length > 1 ? word.charAt(word.length - 1) : '';
      const middleStars = '*'.repeat(Math.max(1, word.length - 2));
      
      return firstChar + middleStars + (lastChar ? lastChar : '');
    }).join(' ');
  };

  // Функция для форматирования дизайнера для отображения
  const formatDesigner = (designer: any): string => {
    const name = designer.name; // Убираем маскировку, показываем полное имя
    const country = designer.country;
    
    if (designer.confirmed) {
      return `• ${name} - ${country}`;
    } else {
      return `• ${name} - ${country} *PENDING MUTUAL APPROVAL`;
    }
  };

  // Функция для получения дизайнеров по дню
  const getDesignersByDay = (day: string) => {
    return designers.value[day] || [];
  };

  // Функция для получения отформатированного списка дизайнеров по дню
  const getFormattedDesignersByDay = (day: string): string[] => {
    const dayDesigners = getDesignersByDay(day);
    return dayDesigners.map(formatDesigner);
  };

  return {
    designers: readonly(designers),
    loading: readonly(loading),
    error: readonly(error),
    isDataUpdated: readonly(isDataUpdated),
    fetchDesigners,
    maskName,
    formatDesigner,
    getDesignersByDay,
    getFormattedDesignersByDay
  };
};
