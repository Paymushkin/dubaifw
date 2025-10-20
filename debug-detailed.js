// Детальная отладка фильтрации
async function debugDetailed() {
  try {
    const SPREADSHEET_ID = '1jGEJIU-0Cwx151O0JczBkoaUCE48j5saab-R5eKzLfM';
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
    
    const response = await fetch(CSV_URL);
    const csvText = await response.text();
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
    
    const companies = rows.slice(1).map((row, index) => ({
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
    
    // Найдем все компании с RECOMМENDED
    const recomмendedCompanies = companies.filter(c => c.status === 'RECOMМENDED');
    
    console.log(`Найдено RECOMМENDED компаний: ${recomмendedCompanies.length}`);
    
    if (recomмendedCompanies.length > 0) {
      const company = recomмendedCompanies[0];
      console.log('\n=== ДЕТАЛЬНАЯ ПРОВЕРКА ПЕРВОЙ КОМПАНИИ ===');
      console.log('Название:', company.companyName);
      console.log('Статус:', `"${company.status}"`);
      console.log('Длина статуса:', company.status.length);
      console.log('Коды символов:', [...company.status].map((c, i) => `${i}:${c.charCodeAt(0)}(${c})`).join(' '));
      
      // Проверяем каждое условие фильтрации
      console.log('\n=== ПРОВЕРКА УСЛОВИЙ ФИЛЬТРАЦИИ ===');
      console.log('!company.status:', !company.status);
      console.log('company.status === "":', company.status === '');
      console.log('company.status === "WAITLIST":', company.status === 'WAITLIST');
      console.log('company.status === "waitlist":', company.status === 'waitlist');
      console.log('company.status === "GARANTEED":', company.status === 'GARANTEED');
      console.log('company.status === "guaranteed":', company.status === 'guaranteed');
      console.log('company.status === "RECOMMENDED":', company.status === 'RECOMMENDED');
      console.log('company.status === "recommended":', company.status === 'recommended');
      console.log('company.status === "RECOMENDED":', company.status === 'RECOMENDED');
      console.log('company.status === "recomended":', company.status === 'recomended');
      console.log('company.status === "RECOMМENDED":', company.status === 'RECOMМENDED');
      console.log('company.status === "recomмended":', company.status === 'recomмended');
      
      // Проверяем все условия сразу
      const passesFilter = !company.status || 
                          company.status === '' ||
                          company.status === 'WAITLIST' ||
                          company.status === 'waitlist' ||
                          company.status === 'GARANTEED' ||
                          company.status === 'guaranteed' ||
                          company.status === 'RECOMMENDED' ||
                          company.status === 'recommended' ||
                          company.status === 'RECOMENDED' ||
                          company.status === 'recomended' ||
                          company.status === 'RECOMМENDED' ||
                          company.status === 'recomмended';
      
      console.log('\nПРОХОДИТ ФИЛЬТР:', passesFilter);
      
      // Проверим, есть ли скрытые символы
      console.log('\n=== ПРОВЕРКА СКРЫТЫХ СИМВОЛОВ ===');
      const statusWithCodes = company.status.split('').map((char, index) => {
        const code = char.charCodeAt(0);
        return `${index}:${char}(${code})`;
      }).join(' ');
      console.log('Статус с кодами:', statusWithCodes);
      
      // Проверим, есть ли невидимые символы
      const hasInvisibleChars = company.status.split('').some(char => {
        const code = char.charCodeAt(0);
        return code < 32 || code === 127 || code === 160;
      });
      console.log('Есть невидимые символы:', hasInvisibleChars);
    }
    
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

debugDetailed();


