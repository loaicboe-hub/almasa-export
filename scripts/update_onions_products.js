const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const newOnionProductsDataStore = [
  {
    id: 23,
    slug: 'fresh-red-onion',
    category_id: 2,
    trade_type: 'export',
    name_ar: 'بصل أحمر مصري فاخر (جيزة 6 أحمر وبصل صعيدي)',
    name_en: 'Fresh Egyptian Red Onions',
    tag_ar: 'قشرة حمراء ياقوتية وصلابة تصديرية عالية',
    tag_en: 'Deep Ruby Skin / Superior Storage Life',
    variety_ar: 'جيزة 6 أحمر، رد كريول | مقاسات: 40-60 مم، 50-70 مم، 60-80 مم، 70-90 مم، 80-100 مم',
    variety_en: 'Giza 6 Red & Red Creole | Calibers: 40/60, 50/70, 60/80, 70/90, 80/100 mm',
    season_ar: 'أبريل - ديسمبر (ومتوافر مدار السنة في مستودعات مهواة ومبردة)',
    season_en: 'April - December (Available year-round via ventilated cold storage)',
    packaging_ar: 'شكاير شبك راشيل حمراء 10 كجم، 25 كجم، أكياس جامبو 1 طن، على بالتات خشبية',
    packaging_en: '10kg, 25kg Red Poly-Mesh Bags / 1 MT Jumbo Bags on Pallets',
    image_url: 'assets/images/products/fresh_red_onion.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 24,
    slug: 'fresh-white-onion',
    category_id: 2,
    trade_type: 'export',
    name_ar: 'بصل أبيض وذهبي مصري (جيزة 20 وبصل إيطالي أبيض)',
    name_en: 'Fresh Egyptian Golden & White Onions',
    tag_ar: 'قشرة ذهبية ناصعة وتصافي مرتفعة للتصدير والتصنيع',
    tag_en: 'Bright Golden / White Skin / High Dry Matter',
    variety_ar: 'جيزة 20 أصفر، بصل أبيض ناصع | مقاسات: 40-60 مم، 50-70 مم، 60-80 مم، 70-90 مم',
    variety_en: 'Giza 20 Golden Yellow & Pure White | Sizes: 40/60, 50/70, 60/80, 70/90 mm',
    season_ar: 'فبراير - يونيو (بصل مبكر طازج متوافر للتصدير الفوري)',
    season_en: 'February - June (Early Fresh Crop)',
    packaging_ar: 'شكاير شبك صفراء وبيضاء 10 كجم، 25 كجم، جامبو باج 1 طن، صناديق خشبية',
    packaging_en: '10kg, 25kg Yellow/White Mesh Bags / 1 MT Jumbo Bags on Pallets',
    image_url: 'assets/images/products/fresh_white_onion.jpg',
    is_featured: 1,
    is_active: 1
  }
];

// Arabic content objects
const arOnionProducts = [
  {
    id: 'fresh-red-onion',
    tradeType: 'export',
    name: 'بصل أحمر مصري فاخر (جيزة 6 أحمر)',
    category: 'fresh-veg',
    categoryName: 'خضروات طازجة',
    image: 'assets/images/products/fresh_red_onion.jpg',
    badge: 'قشرة حمراء ياقوتية وصلابة تصديرية عالية',
    season: 'أبريل - ديسمبر (ومتوافر مدار السنة في مستودعات مهواة ومبردة)',
    origin: 'مصر (محافظات الصعيد والدلتا والبحيرة)',
    sizes: 'عيارات تصديرية: 40-60 مم، 50-70 مم، 60-80 مم، 70-90 مم، 80-100 مم',
    packaging: 'شكاير شبك راشيل حمراء 10 كجم، 25 كجم، أكياس جامبو 1 طن على بالتات',
    temp: 'شحن بحري مهوى 0° إلى +2° مئوية مع رطوبة نسبية 65-70% وتهوية مستمرة',
    specs: 'صلابة ممتازة، قشور متعددة متماسكة جافة، عنق مقصوص ومغلق بإحكام، خالي من التزريع والعفن والتسلخات.',
    description: 'البصل الأحمر المصري الشهير عالمياً بجودته العالية وقدرته الفائقة على التخزين والشحن البحري الطويل، بنكهته الحارة القوية ولونه الياقوتي الجذاب، مطابق لمعايير الاتحاد الأوروبي والخليج.'
  },
  {
    id: 'fresh-white-onion',
    tradeType: 'export',
    name: 'بصل أبيض وذهبي مصري (جيزة 20 وبصل إيطالي)',
    category: 'fresh-veg',
    categoryName: 'خضروات طازجة',
    image: 'assets/images/products/fresh_white_onion.jpg',
    badge: 'قشرة ذهبية ناصعة وتصافي مرتفعة للتصدير والتصنيع',
    season: 'فبراير - يونيو (بصل مبكر طازج متوافر للتصدير الفوري)',
    origin: 'مصر (بني سويف، المنيا، والإسماعيلية)',
    sizes: 'عيارات تصديرية: 40-60 مم، 50-70 مم، 60-80 مم، 70-90 مم',
    packaging: 'شكاير شبك صفراء وبيضاء 10 كجم و 25 كجم، أو جامبو باج 1 طن',
    temp: 'شحن بحري مهوى 0° إلى +2° مئوية مع رطوبة نسبية 65-70%',
    specs: 'قشرة جافة ناصعة، لب ناصع البياض دسم ومقرمش، نسبة مادة جافة عالية، مثالي للتجفيف والتصنيع وأسواق المائدة.',
    description: 'البصل الأبيض والذهبي المصري المبكر، يمتاز بنكهته المتوازنة ونسبة المادة الجافة العالية، مما يجعله الاختيار الأول لكبرى مصانع التجفيف وسلاسل التجزئة الأوروبية.'
  }
];

// English content objects
const enOnionProducts = [
  {
    id: 'fresh-red-onion',
    tradeType: 'export',
    name: 'Fresh Egyptian Red Onions',
    category: 'fresh-veg',
    categoryName: 'Fresh Vegetables',
    image: 'assets/images/products/fresh_red_onion.jpg',
    badge: 'Deep Ruby Skin / Superior Storage Life',
    season: 'April - December (Available year-round via ventilated cold storage)',
    origin: 'Egypt (Upper Egypt & Nile Delta)',
    sizes: 'Calibers: 40/60, 50/70, 60/80, 70/90, 80/100 mm',
    packaging: '10kg, 25kg Red Poly-Mesh Bags / 1 MT Jumbo Bags on Pallets',
    temp: 'Reefer container at 0°C to +2°C with 65-70% RH & air ventilation',
    specs: 'Extra firm bulbs, multiple tight dry outer tunics, fully cured, neck trimmed and closed, zero sprouting or mold.',
    description: 'World-renowned fresh Egyptian red onions, recognized globally for their rich ruby-purple color, long shelf life, robust pungency, and exceptional seaworthiness for long-haul reefer transit.'
  },
  {
    id: 'fresh-white-onion',
    tradeType: 'export',
    name: 'Fresh Egyptian Golden & White Onions',
    category: 'fresh-veg',
    categoryName: 'Fresh Vegetables',
    image: 'assets/images/products/fresh_white_onion.jpg',
    badge: 'Bright Golden / White Skin / High Dry Matter',
    season: 'February - June (Early Fresh Crop)',
    origin: 'Egypt (Beni Suef, Minya & Ismailia)',
    sizes: 'Calibers: 40/60, 50/70, 60/80, 70/90 mm',
    packaging: '10kg, 25kg Yellow/White Mesh Bags / 1 MT Jumbo Bags on Pallets',
    temp: 'Reefer container at 0°C to +2°C with 65-70% RH',
    specs: 'Golden straw dry papery skin, crisp white interior, high solid dry matter content, perfectly cured.',
    description: 'Fresh Egyptian golden and white onions, highly favored by European supermarket chains and dehydration processors due to high dry matter, sweet-pungent balance, and early seasonal arrival.'
  }
];

// French content objects
const frOnionProducts = [
  {
    id: 'fresh-red-onion',
    tradeType: 'export',
    category: 'fresh-veg',
    categoryName: 'Légumes Frais',
    name: "Oignons Rouges Frais d'Égypte",
    scientificName: 'Allium cepa (Var. Rouge)',
    brief: "Oignons rouges égyptiens de renommée internationale, appréciés pour leur couleur pourpre éclatante et leur fermeté.",
    description: "Oignons rouges d'Égypte de première qualité, caractérisés par une peau pourpre foncée, une chair croquante et piquante, et une excellente aptitude au transport maritime longue distance.",
    image: 'assets/images/products/fresh_red_onion.jpg',
    origin: 'Égypte (Haute-Égypte & Delta)',
    season: 'Avril - Décembre (Disponible toute l’année en stockage ventilé)',
    reeferTemp: '0°C à +2°C / Humidité 65-70% / Ventilation continue',
    sizes: 'Calibres: 40/60, 50/70, 60/80, 70/90, 80/100 mm',
    packaging: 'Sacs filet Raschel rouges 10 kg, 25 kg / Big Bags 1 tonne sur palettes',
    specs: 'Bulbes très fermes, multiples pelures sèches bien serrées, collet bien fermé sans germination.',
    badge: 'Peau Pourpre Brillante & Longue Conservation'
  },
  {
    id: 'fresh-white-onion',
    tradeType: 'export',
    category: 'fresh-veg',
    categoryName: 'Légumes Frais',
    name: "Oignons Jaunes & Blancs Frais d'Égypte",
    scientificName: 'Allium cepa (Var. Jaune/Blanc)',
    brief: "Oignons jaunes dorés et blancs d'Égypte primeurs, très recherchés pour la consommation fraîche et la déshydratation.",
    description: "Oignons blancs et jaunes primeurs d'Égypte récoltés dès le début de l'année, offrant une peau dorée séchée à point et une chair dense riche en matière sèche.",
    image: 'assets/images/products/fresh_white_onion.jpg',
    origin: 'Égypte (Beni Suef & Ismaïlia)',
    season: 'Février - Juin (Primeurs & Récolte fraîche)',
    reeferTemp: '0°C à +2°C / Humidité 65-70%',
    sizes: 'Calibres: 40/60, 50/70, 60/80, 70/90 mm',
    packaging: 'Sacs en filet 10 kg, 25 kg / Big Bags 1 tonne sur palettes',
    specs: 'Peau dorée bien sèche, chair blanche et croquante, haute teneur en extrait sec.',
    badge: 'Peau Dorée Éclatante & Teneur en Matière Sèche Élevée'
  }
];

// 1. Update database/data_store.json
const dataStorePath = path.join(rootDir, 'database', 'data_store.json');
const dataStore = JSON.parse(fs.readFileSync(dataStorePath, 'utf8'));

// Filter out any duplicates and push
dataStore.products = dataStore.products.filter(p => !newOnionProductsDataStore.some(np => np.id === p.id));
dataStore.products.push(...newOnionProductsDataStore);
fs.writeFileSync(dataStorePath, JSON.stringify(dataStore, null, 2), 'utf8');
console.log('1. Updated database/data_store.json! Total products:', dataStore.products.length);

// 2. Update server.js mockProducts
const serverPath = path.join(rootDir, 'server.js');
let serverContent = fs.readFileSync(serverPath, 'utf8');

const enrichedMockProducts = dataStore.products.map(p => {
  const cat = dataStore.categories.find(c => c.id === p.category_id);
  return {
    ...p,
    category_slug: cat ? cat.slug : '',
    category_name_ar: cat ? cat.name_ar : '',
    category_name_en: cat ? cat.name_en : ''
  };
});

const startMockIdx = serverContent.indexOf('let mockProducts = [');
if (startMockIdx !== -1) {
  const endMockIdx = serverContent.indexOf('\nlet mockInvoices = [', startMockIdx);
  if (endMockIdx !== -1) {
    const before = serverContent.substring(0, startMockIdx);
    const after = serverContent.substring(endMockIdx);
    const newMockDeclaration = 'let mockProducts = ' + JSON.stringify(enrichedMockProducts, null, 2) + ';\n';
    serverContent = before + newMockDeclaration + after;
    fs.writeFileSync(serverPath, serverContent, 'utf8');
    console.log('2. Updated server.js mockProducts!');
  } else {
    console.error('Could not find mockInvoices boundary in server.js');
  }
} else {
  console.error('Could not find let mockProducts in server.js');
}

// 3. Update assets/data/content.js
const contentJsPath = path.join(rootDir, 'assets', 'data', 'content.js');
const contentJs = fs.readFileSync(contentJsPath, 'utf8');

const jsonStr = contentJs.replace(/^\s*\/\/[^\n]*\n/, '').replace(/^\s*var\s+ALMASA_DATA\s*=\s*/, '').replace(/;\s*$/, '');
const data = JSON.parse(jsonStr);

// Filter out and add
data.ar.products = data.ar.products.filter(p => !arOnionProducts.some(gp => gp.id === p.id));
data.ar.products.push(...arOnionProducts);

data.en.products = data.en.products.filter(p => !enOnionProducts.some(gp => gp.id === p.id));
data.en.products.push(...enOnionProducts);

if (data.fr && data.fr.products) {
  data.fr.products = data.fr.products.filter(p => !frOnionProducts.some(gp => gp.id === p.id));
  data.fr.products.push(...frOnionProducts);
}

const updatedContentJs = '// Trilingual Data Repository for ALMASA Development & Agro-Export\nvar ALMASA_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(contentJsPath, updatedContentJs, 'utf8');
console.log('3. Updated assets/data/content.js with AR, EN, FR products!');
console.log('AR products count:', data.ar.products.length);
console.log('EN products count:', data.en.products.length);
console.log('FR products count:', data.fr.products.length);
