<template>
  <section v-if="!loading && !error && faqData.length > 0" class="md:mb-[76px] mb-[56px]">
    <h2 class="text-2xl md:text-3xl font-bold text-left mb-8">FREQUENTLY ASKED QUESTIONS</h2>
    
    <!-- FAQ контент -->
    <div class="flex flex-col gap-4">
      <div
        v-for="(faq, index) in faqData"
        :key="index"
      >
        <div 
          class="border border-black cursor-pointer"
          @click="toggleFaq(index)"
        >
          <div 
            class="w-full p-4 md:p-6 flex justify-between items-start hover:bg-gray-50"
            :class="{ 'border-b border-black': openFaqs.includes(index) }"
          >
            <span class="text-base md:text-xl xl:text-2xl pr-8 text-left">{{ faq.question }}</span>
            <span 
              class="text-2xl transform transition-transform duration-300 flex-shrink-0"
              :class="{ 'rotate-45': openFaqs.includes(index) }"
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
              v-show="openFaqs.includes(index)"
              class="p-4 md:p-6 text-sm md:text-base xl:text-lg text-black-70 border-t border-black origin-top whitespace-pre-line"
              v-html="faq.answer"
            ></div>
          </transition>
        </div>
      </div>
    </div>
    
    <!-- WhatsApp кнопка для вопросов -->
    <div class="mt-8 text-center">
      <WhatsAppButton 
        phone-number="https://wa.me/message/2F4O6ZT7YH5RG1"
        text="Ask questions on WhatsApp"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'

const faqData = ref([])
const openFaqs = ref([])
const loading = ref(false)
const error = ref('')

// Функция для загрузки FAQ из Google Sheets
const fetchFaqData = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const SPREADSHEET_ID = '1XCptY5cetlTjR3fMyt1dPAmEG6oKXpQMP8JsQGfHnIg'
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`

    const response = await fetch(CSV_URL)

    if (!response.ok) {
      throw new Error(`CSV export error: ${response.statusText}`)
    }

    const csvText = await response.text()

    // Парсим CSV правильно (учитывая многострочные ячейки и кавычки)
    const lines = csvText.split('\n')
    const rows = []
    let currentRow = []
    let currentCell = ''
    let inQuotes = false
    let quoteCount = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      
      for (let j = 0; j < line.length; j++) {
        const char = line[j]
        
        if (char === '"') {
          quoteCount++
          inQuotes = quoteCount % 2 === 1
        } else if (char === ',' && !inQuotes) {
          currentRow.push(currentCell.trim())
          currentCell = ''
        } else {
          currentCell += char
        }
      }
      
      // Если мы не в кавычках, завершаем строку
      if (!inQuotes) {
        currentRow.push(currentCell.trim())
        if (currentRow.some(cell => cell.length > 0)) {
          rows.push(currentRow)
        }
        currentRow = []
        currentCell = ''
        quoteCount = 0
      } else {
        // Если в кавычках, добавляем перенос строки
        currentCell += '\n'
      }
    }

    // Преобразуем в массив FAQ
    faqData.value = rows
      .filter(row => row[0] && row[1]) // Фильтруем только строки с вопросом и ответом
      .map(row => ({
        question: row[0].replace(/^"(.*)"$/s, '$1').replace(/^"|"$/g, '').trim(), // Убираем кавычки если есть
        answer: row[1].replace(/^"(.*)"$/s, '$1').replace(/^"|"$/g, '').trim() // Убираем кавычки если есть
      }))
      .filter(faq => faq.question && faq.answer) // Фильтруем пустые записи

    console.log('Raw CSV data:', rows)
    console.log('FAQ data loaded:', faqData.value)
    
    // Логируем каждый FAQ для отладки
    faqData.value.forEach((faq, index) => {
      console.log(`FAQ ${index + 1}:`, {
        question: faq.question,
        answerLength: faq.answer.length,
        answerPreview: faq.answer.substring(0, 100) + '...'
      })
    })
    
    // Открываем первый пункт по умолчанию
    if (faqData.value.length > 0) {
      openFaqs.value = [0]
    }
    
  } catch (err) {
    console.error('Error fetching FAQ data:', err)
    error.value = err.message
    faqData.value = []
  } finally {
    loading.value = false
  }
}

// Функция для переключения FAQ
const toggleFaq = (index) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

// Загружаем данные при монтировании компонента
onMounted(() => {
  fetchFaqData()
})
</script>

<style scoped>
/* Дополнительные стили если нужны */
</style>
