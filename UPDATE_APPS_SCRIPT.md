# Обновление Google Apps Script

## Проблема
Google Apps Script возвращает редирект вместо обработки данных. Это означает, что скрипт не обновлен с новым кодом.

## Решение
Нужно обновить Google Apps Script с новым кодом.

## Пошаговая инструкция

### 1. Откройте Google Apps Script
Перейдите по ссылке: https://script.google.com/macros/s/AKfycbxX6ToFvzEnm7IGxBSA-yKQMp3UhB0OBcqaSaDqz7gq7073UESTuxzHvn43q07Kawlj0g/exec

### 2. Откройте редактор скрипта
- Нажмите на "Edit" или "Редактировать"
- Или перейдите в Google Apps Script напрямую

### 3. Замените весь код
Удалите весь существующий код и вставьте код из файла `google-apps-script.js`:

```javascript
function doGet(e) {
  try {
    Logger.log('=== EFW Registration doGet ВЫЗВАН ===');
    Logger.log('Параметры:', e.parameter);
    
    if (e.parameter && e.parameter.action === 'submit') {
      Logger.log('Обрабатываем submit action для регистрации');
      
      const data = e.parameter;
      Logger.log('Данные из формы:', data);
      
      // Открываем таблицу
      const spreadsheet = SpreadsheetApp.openById('12ZCFRsBNj2zEqKGjlbgmLX1N-05FE6NUFU2XL0jk8FY');
      const sheet = spreadsheet.getSheetByName('efw2025') || spreadsheet.getActiveSheet();
      Logger.log('Таблица открыта:', sheet.getName());
      
      // Добавляем заголовки, если лист пустой
      if (sheet.getLastRow() === 0) {
        const headers = ['Name', 'Company', 'Email', 'Inviter', 'Timestamp', 'Source'];
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        Logger.log('Заголовки добавлены');
      }
      
      // Подготавливаем данные для записи
      const rowData = [
        data.name || '',
        data.company || '',
        data.email || '',
        data.inviter || '',
        data.timestamp || new Date().toISOString(),
        data.source || 'EFW Registration'
      ];
      
      Logger.log('Данные для записи:', rowData);
      
      // Записываем в таблицу
      sheet.appendRow(rowData);
      Logger.log('Данные записаны в таблицу');
      
      // Проверяем последнюю записанную строку
      const lastRow = sheet.getLastRow();
      Logger.log('Последняя строка:', lastRow);
      
      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        message: 'Registration data saved successfully',
        row: lastRow
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Простая проверка работоспособности
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Apps Script is working',
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    Logger.log('Ошибка в doGet:', error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Функция для тестирования (можно запустить вручную)
 */
function testFunction() {
  const testData = {
    name: 'Test User',
    company: 'Test Company',
    email: 'test@example.com',
    inviter: 'Test Inviter',
    timestamp: new Date().toISOString(),
    source: 'Test Registration'
  };
  
  const mockEvent = {
    parameter: testData
  };
  
  const result = doGet(mockEvent);
  console.log('Test result:', result.getContent());
}
```

### 4. Сохраните проект
- Нажмите Ctrl+S (или Cmd+S на Mac)
- Убедитесь, что код сохранился

### 5. Разверните заново
- Нажмите "Deploy" > "New deployment"
- Выберите тип: "Web app"
- Настройки:
  - **Execute as**: Me (your-email@gmail.com)
  - **Who has access**: Anyone
- Нажмите "Deploy"

### 6. Протестируйте
После обновления запустите тест:
```bash
node test-registration.js
```

## Ожидаемый результат
После обновления тест должен показать:
```
✅ Тест успешен! Данные записаны в Google Sheets
```

И данные должны появиться в таблице: https://docs.google.com/spreadsheets/d/12ZCFRsBNj2zEqKGjlbgmLX1N-05FE6NUFU2XL0jk8FY/edit







