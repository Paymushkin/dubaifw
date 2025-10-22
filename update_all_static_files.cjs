#!/usr/bin/env node

const fs = require('fs');

// Список всех статических HTML файлов с их путями
const files = [
  { path: 'public/welcome/index.html', route: '/welcome' },
  { path: 'public/home/index.html', route: '/' },
  { path: 'public/offer/index.html', route: '/offer' },
  { path: 'public/calendar/index.html', route: '/calendar' },
  { path: 'public/widget/index.html', route: '/widget' },
  { path: 'public/faq/index.html', route: '/faq' },
  { path: 'public/gallery/index.html', route: '/gallery' },
  { path: 'public/features/index.html', route: '/features' },
  { path: 'public/visit/index.html', route: '/visit' },
  { path: 'public/EFW_AICONTEST/index.html', route: '/EFW_AICONTEST' },
  { path: 'public/team/index.html', route: '/team' },
  { path: 'public/approved/index.html', route: '/approved' },
  { path: 'public/station/index.html', route: '/station' },
  { path: 'public/request/index.html', route: '/request' }
];

function updateStaticFile(filePath, route) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Обновляем JavaScript редирект
    const scriptPattern = /<script>[\s\S]*?<\/script>/;
    const newScript = `    <script>
      (function(){
        // Определяем базовый URL в зависимости от окружения
        var hostname = window.location.hostname;
        var port = window.location.port;
        var isLocal = hostname.includes('localhost') || 
                     hostname.includes('127.0.0.1') ||
                     hostname.includes('0.0.0.0') ||
                     hostname.startsWith('192.168.') ||
                     hostname.startsWith('10.') ||
                     hostname.startsWith('172.');
        
        var baseUrl = isLocal ? 'http://' + hostname + ':' + (port || '3000') : 'https://emiratesfashionweeks.com';
        var qs = window.location.search || '';
        var target = '${route}' + qs;
        var url = baseUrl + target;
        window.location.replace(url);
      })();
    </script>`;
    
    content = content.replace(scriptPattern, newScript);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${filePath}`);
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

console.log('🔄 Updating all static HTML files with local IP support...\n');

files.forEach(({ path, route }) => {
  updateStaticFile(path, route);
});

console.log('\n✅ All static HTML files updated!');

