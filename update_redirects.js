#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Список файлов для обновления
const files = [
  'public/offer/index.html',
  'public/home/index.html',
  'public/calendar/index.html',
  'public/widget/index.html',
  'public/faq/index.html',
  'public/gallery/index.html',
  'public/features/index.html',
  'public/visit/index.html',
  'public/EFW_AICONTEST/index.html',
  'public/team/index.html',
  'public/approved/index.html',
  'public/station/index.html',
  'public/request/index.html'
];

// Функция для обновления файла
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ищем паттерн с window.location.replace
    const redirectPattern = /window\.location\.replace\('https:\/\/emiratesfashionweeks\.com\/\?to=\/[^']+'\);/;
    
    if (redirectPattern.test(content)) {
      // Заменяем простой редирект на проверку локальной разработки
      const newScript = `// Проверяем, не локальная ли разработка
        const isLocal = window.location.hostname.includes('localhost') || 
                       window.location.hostname.includes('127.0.0.1') ||
                       window.location.hostname.includes('0.0.0.0');
        
        if (!isLocal) {
          window.location.replace('https://emiratesfashionweeks.com/?to=/PATH/');
        }`;
      
      // Извлекаем путь из оригинального редиректа
      const match = content.match(/window\.location\.replace\('https:\/\/emiratesfashionweeks\.com\/\?to=([^']+)'\);/);
      if (match) {
        const path = match[1];
        const finalScript = newScript.replace('/PATH/', path);
        
        content = content.replace(redirectPattern, finalScript);
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated ${filePath}`);
      }
    } else {
      console.log(`⚠️  No redirect pattern found in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Обновляем все файлы
console.log('🔄 Updating redirects for local development...\n');

files.forEach(updateFile);

console.log('\n✅ All files updated!');

