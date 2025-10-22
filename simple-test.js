// Простой тест фильтрации
const testCompanies = [
  { companyName: 'Test 1', status: 'WAITLIST' },
  { companyName: 'Test 2', status: 'GARANTEED' },
  { companyName: 'Test 3', status: 'RECOMМENDED' }, // Кириллическая М
  { companyName: 'Test 4', status: 'RECOMENDED' }, // Латинская М
  { companyName: 'Test 5', status: 'RECOMMENDED' }, // Правильное написание
  { companyName: 'Test 6', status: 'APPROVED' },
  { companyName: 'Test 7', status: '' },
  { companyName: 'Test 8', status: undefined }
];

const filterWaitlistCompanies = (companiesList) => {
  return companiesList.filter(company => {
    return !company.status || 
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
           company.status === 'recomмended'
  })
}

console.log('=== ТЕСТ ФИЛЬТРАЦИИ ===');
console.log('Исходные компании:');
testCompanies.forEach((company, index) => {
  console.log(`${index + 1}. ${company.companyName} - статус: "${company.status}"`);
});

const filtered = filterWaitlistCompanies(testCompanies);

console.log('\nОтфильтрованные компании:');
filtered.forEach((company, index) => {
  console.log(`${index + 1}. ${company.companyName} - статус: "${company.status}"`);
});

console.log(`\nИтого: ${filtered.length} из ${testCompanies.length}`);

// Проверим конкретно RECOMМENDED
const recomмended = filtered.find(c => c.status === 'RECOMМENDED');
console.log(`\nRECOMМENDED в результате: ${recomмended ? 'ДА' : 'НЕТ'}`);
if (recomмended) {
  console.log('Компания:', recomмended.companyName);
}








