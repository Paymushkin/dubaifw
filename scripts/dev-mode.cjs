#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Список всех статических HTML файлов для временного перемещения
const staticFiles = [
  'trial/index.html',
  'welcome/index.html',
  'home/index.html',
  'offer/index.html',
  'calendar/index.html',
  'widget/index.html',
  'faq/index.html',
  'gallery/index.html',
  'features/index.html',
  'visit/index.html',
  'EFW_AICONTEST/index.html',
  'team/index.html',
  'approved/index.html',
  'station/index.html',
  'request/index.html'
];

function moveToDevBackup() {
  console.log('🔄 Moving static HTML files to dev backup...\n');
  
  staticFiles.forEach(file => {
    const sourcePath = path.join(publicDir, file);
    const backupPath = path.join(publicDir, file + '.dev-backup');
    
    if (fs.existsSync(sourcePath)) {
      fs.renameSync(sourcePath, backupPath);
      console.log(`✅ Moved ${file} to dev backup`);
    } else {
      console.log(`⚠️  ${file} not found`);
    }
  });
  
  console.log('\n✅ All static HTML files moved to dev backup!');
}

function restoreFromDevBackup() {
  console.log('🔄 Restoring static HTML files from dev backup...\n');
  
  staticFiles.forEach(file => {
    const sourcePath = path.join(publicDir, file);
    const backupPath = path.join(publicDir, file + '.dev-backup');
    
    if (fs.existsSync(backupPath)) {
      fs.renameSync(backupPath, sourcePath);
      console.log(`✅ Restored ${file} from dev backup`);
    } else {
      console.log(`⚠️  ${file}.dev-backup not found`);
    }
  });
  
  console.log('\n✅ All static HTML files restored from dev backup!');
}

const isDev = process.argv.includes('--dev');
const isProd = process.argv.includes('--prod');

if (isDev) {
  moveToDevBackup();
} else if (isProd) {
  restoreFromDevBackup();
} else {
  console.log('Usage:');
  console.log('  node scripts/dev-mode.cjs --dev   # Move static files to dev backup');
  console.log('  node scripts/dev-mode.cjs --prod # Restore static files from dev backup');
}

