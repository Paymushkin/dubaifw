# Исправление счетчика компаний

## Проблема
Счетчик компаний в кнопке "Join Wait List | 2h Free Trial Spot" показывает 0, хотя в таблице есть данные.

## Причина
1. **Неправильный URL** Google Apps Script в компоненте `CompaniesList.vue`
2. **Отсутствует обработка** `getCompanies` в Google Apps Script

## Решение

### 1. Обновить Google Apps Script
Замените код в Google Apps Script на обновленную версию из файла `google-apps-script.js`:

```javascript
function doGet(e) {
  try {
    Logger.log('=== EFW Registration doGet ВЫЗВАН ===');
    Logger.log('Параметры:', e.parameter);
    
    if (e.parameter && e.parameter.action === 'submit') {
      // ... код для регистрации ...
    }
    
    // Обработка запроса списка компаний
    if (e.parameter && e.parameter.action === 'getCompanies') {
      Logger.log('Обрабатываем getCompanies action');
      
      try {
        // Открываем таблицу с компаниями
        const companiesSpreadsheet = SpreadsheetApp.openById('1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM');
        const companiesSheet = companiesSpreadsheet.getActiveSheet();
        const data = companiesSheet.getDataRange().getDisplayValues();
        
        const companies = data.slice(1).map((row, index) => {
          return {
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
            status: row[11] || ''
          };
        });
        
        Logger.log('Всего компаний:', companies.length);
        
        return ContentService.createTextOutput(JSON.stringify({
          success: true,
          companies: companies
        })).setMimeType(ContentService.MimeType.JSON);
        
      } catch (error) {
        Logger.log('Ошибка при получении компаний:', error.toString());
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
      }
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
```

### 2. Сохранить и развернуть
1. Сохраните проект (Ctrl+S)
2. Нажмите "Deploy" > "New deployment"
3. Выберите тип: "Web app"
4. Настройки:
   - **Execute as**: Me (your-email@gmail.com)
   - **Who has access**: Anyone
5. Нажмите "Deploy"

### 3. Проверить результат
После обновления:
1. Откройте страницу с кнопкой "Join Wait List"
2. Проверьте, что счетчик показывает правильное количество компаний
3. Убедитесь, что список компаний загружается

## Что изменилось

### В `components/CompaniesList.vue`:
- **Обновлен URL** Google Apps Script на новый
- **Исправлен путь** к таблице с компаниями

### В `google-apps-script.js`:
- **Добавлена обработка** `action=getCompanies`
- **Чтение данных** из таблицы компаний
- **Возврат списка** компаний в JSON формате

## Результат
После обновления счетчик компаний будет показывать правильное количество из таблицы!






