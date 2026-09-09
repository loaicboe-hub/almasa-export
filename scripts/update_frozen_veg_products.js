const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const newFrozenVegDataStore = [
  {
    id: 70,
    slug: 'frozen-artichoke-bottoms',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'قيعان خرشوف مصرية مجمدة (خرشوف بلدي ونبراس)',
    name_en: 'IQF Frozen Artichoke Bottoms (Hearts)',
    tag_ar: 'فرز ليزر وقيعان متجانسة بياض ناصع',
    tag_en: 'Premium Calibrated Ivory Bottoms',
    variety_ar: 'خرشوف بلدي، نبراس | مقاسات: 5-7 سم، 7-9 سم، 9-11 سم',
    variety_en: 'Egyptian Baladi & Nebras | Diameters: 5-7cm, 7-9cm, 9-11cm',
    season_ar: 'ديسمبر - مايو (ومتوافر مجمد طوال العام)',
    season_en: 'December - May (Available Year-Round IQF)',
    packaging_ar: 'كراتين 10 كجم (4 أكياس × 2.5 كجم)، أو أكياس 1 كجم و 400 جم',
    packaging_en: '10kg Master Cartons (4x2.5kg), Retail 1kg / 400g Bags',
    image_url: 'assets/images/products/frozen_artichoke_bottoms.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 71,
    slug: 'frozen-mixed-vegetables',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'خضار مشكل مصري مجمد (3 و 4 أصناف)',
    name_en: 'IQF Frozen Mixed Vegetables (3 & 4-Way)',
    tag_ar: 'تجميد فردي سريع IQF ألوان طبيعية زاهية',
    tag_en: 'Vibrant Color Balance & IQF Frozen',
    variety_ar: 'بسلة خضراء + جزر مكعبات + ذرة صفراء + فاصوليا خضراء مقطعة',
    variety_en: 'Green Peas + Diced Carrots + Sweet Corn + Cut Green Beans',
    season_ar: 'متوافر طوال العام',
    season_en: 'Available Year-Round',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين تصدير 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Poly Bags / 10kg Master Carton',
    image_url: 'assets/images/products/frozen_mixed_vegetables.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 72,
    slug: 'frozen-green-peas',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بسلة خضراء مصرية مجمدة سادة (IQF)',
    name_en: 'IQF Frozen Green Garden Peas',
    tag_ar: 'حبات سكرية غضة فرز إلكتروني',
    tag_en: 'Extra Tender & Sweet Garden Peas',
    variety_ar: 'بسلة سكرية غضة نمرة 1، أقطار 7.5 - 9 مم',
    variety_en: 'Sweet Garden Variety Grade 1, Calibers: 7.5-9mm',
    season_ar: 'ديسمبر - إبريل (ومتوافرة مدار السنة)',
    season_en: 'December - April (Year-Round Availability IQF)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم معقمة',
    packaging_en: '400g, 1kg, 2.5kg Bags / 10kg Master Export Box',
    image_url: 'assets/images/products/frozen_green_peas.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 73,
    slug: 'frozen-peas-carrots',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بسلة وجزر مكعبات مجمدة سريعة التجميد',
    name_en: 'IQF Frozen Green Peas & Diced Carrots',
    tag_ar: 'نسبة 50/50 مكعبات متناسقة 10×10 مم',
    tag_en: '50/50 Premium Blend / 10x10mm Diced',
    variety_ar: 'بسلة خضراء غضة + مكعبات جزر برتقالي سكري',
    variety_en: 'Sweet Green Peas & Orange Carrot Cubes',
    season_ar: 'متوافر طوال العام',
    season_en: 'Available Year-Round',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Bags / 10kg Master Box',
    image_url: 'assets/images/products/frozen_peas_carrots.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 74,
    slug: 'frozen-green-beans',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'فاصوليا خضراء مصرية مجمدة (مقطعة وسليمة)',
    name_en: 'IQF Frozen Fine & Cut Green Beans',
    tag_ar: 'فاين واكسترا فاين مقطوعة الأطراف',
    tag_en: 'Stringless Extra Fine & Cut Beans',
    variety_ar: 'فاصوليا بوليستا وبرونكو، مقطعة 2-3 سم أو كاملة Whole',
    variety_en: 'Paulista & Bronco; Cut (2-3cm) or Whole Extra Fine',
    season_ar: 'نوفمبر - مايو (ومتوافرة مدار السنة)',
    season_en: 'November - May (Year-Round Stock)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Bags / 10kg Master Carton',
    image_url: 'assets/images/products/frozen_green_beans.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 75,
    slug: 'frozen-molokhia',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'ملوخية مصرية مجمدة (مفرومة خرط بلدي وورق كامل)',
    name_en: 'IQF Frozen Egyptian Molokhia (Minced & Whole Leaves)',
    tag_ar: 'خضرة فاقعة وعرق وقوام أصيل',
    tag_en: 'Traditional Texture & Deep Emerald Color',
    variety_ar: 'ملوخية بلدي مفرومة خشن/ناعم، وملوخية ورق كامل مقطوف',
    variety_en: 'Traditional Minced (Fine/Coarse) & Whole Leaves',
    season_ar: 'مايو - ديسمبر (ومتوافرة طوال العام)',
    season_en: 'May - December (Available Year-Round)',
    packaging_ar: 'أكياس 400 جم مفرغة، بلوكات 1 كجم و 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g Vacuum Poly Packs, 1kg/2.5kg Blocks, 10kg Cartons',
    image_url: 'assets/images/products/frozen_molokhia.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 76,
    slug: 'frozen-okra-zero',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بامية مصرية مجمدة زيرو (أصغر من 3 سم)',
    name_en: 'IQF Frozen Okra Zero (< 3cm)',
    tag_ar: 'أعلى درجات الفرز الفاخر Zero Grade',
    tag_en: 'Ultra-Premium Zero Caliber (< 3cm)',
    variety_ar: 'بامية بلدية خضراء غضة مقمعة يدوياً، طول < 3 سم',
    variety_en: 'Egyptian Baladi Emerald Okra, Length under 3cm',
    season_ar: 'يونيو - ديسمبر (ومتوافرة طوال العام)',
    season_en: 'June - December (Year-Round Availability IQF)',
    packaging_ar: 'أكياس 400 جم و 1 كجم، كراتين تصدير 8 و 10 كجم',
    packaging_en: '400g Retail Packs, 1kg Bags, 8kg/10kg Master Cartons',
    image_url: 'assets/images/products/frozen_okra_zero.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 77,
    slug: 'frozen-okra-extra',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بامية مصرية مجمدة إكسترا (3 - 5 سم)',
    name_en: 'IQF Frozen Okra Extra (3 - 5cm)',
    tag_ar: 'مقمعة هرمياً نخب أول تصدير',
    tag_en: 'Export Grade Extra (3 - 5cm)',
    variety_ar: 'بامية خضراء غضة، طول 3 إلى 5 سم',
    variety_en: 'Selected Green Egyptian Okra, Length 3 - 5cm',
    season_ar: 'يونيو - ديسمبر (ومتوافرة مدار السنة)',
    season_en: 'June - December (Available Year-Round)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Poly Bags / 10kg Master Box',
    image_url: 'assets/images/products/frozen_okra_extra.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 78,
    slug: 'frozen-okra-excellence',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بامية مصرية مجمدة ممتازة / نمرة 1 (5 - 7 سم)',
    name_en: 'IQF Frozen Okra Excellence / Grade One (5 - 7cm)',
    tag_ar: 'حبات متوسطة غضة ومقمعة بعناية',
    tag_en: 'Tender Medium Caliber (5 - 7cm)',
    variety_ar: 'بامية خضراء ممتازة، طول 5 إلى 7 سم',
    variety_en: 'Egyptian Green Okra, Length 5 - 7cm',
    season_ar: 'يونيو - ديسمبر (ومتوافرة طوال العام)',
    season_en: 'June - December (Year-Round Availability)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Bags / 10kg Master Carton',
    image_url: 'assets/images/products/frozen_okra_excellence.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 79,
    slug: 'frozen-grape-leaves',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'ورق عنب مصري بناتي مجمد (مرصوص ومطوي)',
    name_en: 'Frozen Tender Egyptian Grape Leaves (Vine Leaves)',
    tag_ar: 'ورق ناعم غض خالي من العروق الخشنة',
    tag_en: 'Tender Banati Variety / Stacked & Folded',
    variety_ar: 'ورق عنب بناتي وفيومي ناعم، حزم مرصوصة ومفرغة الهواء',
    variety_en: 'Egyptian Banati Young Vine Leaves, Pre-Stacked Layers',
    season_ar: 'أبريل - يوليو (ومتوافر مجمد مدار السنة)',
    season_en: 'April - July (Available Year-Round Frozen)',
    packaging_ar: 'أكياس 400 جم و 500 جم مفرغة، كراتين 8 و 10 كجم',
    packaging_en: '400g, 500g Vacuum Poly Packs / 8kg, 10kg Cartons',
    image_url: 'assets/images/products/frozen_grape_leaves.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 80,
    slug: 'frozen-broccoli',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'بروكلي مصري مجمد (زهيرات خضراء IQF)',
    name_en: 'IQF Frozen Broccoli Florets',
    tag_ar: 'زهيرات متماسكة بلون أخضر زمردي',
    tag_en: 'Compact Vivid Green Florets',
    variety_ar: 'بروكلي كالابريزي، زهيرات مقاس 2-4 سم و 3-6 سم',
    variety_en: 'Calabrese Type, Floret Sizes: 2-4cm & 3-6cm',
    season_ar: 'نوفمبر - إبريل (ومتوافر طوال العام)',
    season_en: 'November - April (Year-Round Availability)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم',
    packaging_en: '400g, 1kg, 2.5kg Bags / 10kg Master Carton',
    image_url: 'assets/images/products/frozen_broccoli.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 81,
    slug: 'frozen-roasted-eggplant',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'باذنجان رومي مصري مشوي ومدخن مجمد',
    name_en: 'Frozen Fire-Roasted Smoked Eggplant (Pulp & Puree)',
    tag_ar: 'نكهة الشواء الطبيعية على الحطب 100%',
    tag_en: '100% Natural Flame-Roasted Smoky Flavor',
    variety_ar: 'باذنجان رومي أسود مشوي على اللهب، بيوريه مفروم أو أنصاف',
    variety_en: 'Charcoal/Flame-Roasted Baladi Eggplant Puree & Halves',
    season_ar: 'متوافر طوال العام',
    season_en: 'Available Year-Round',
    packaging_ar: 'أكياس مفرغة 1 كجم، 2.5 كجم، 5 كجم، عبوات للمطاعم',
    packaging_en: '1kg, 2.5kg, 5kg Vacuum Bags, Foodservice Pails',
    image_url: 'assets/images/products/frozen_roasted_eggplant.jpg',
    is_featured: 1,
    is_active: 1
  },
  {
    id: 82,
    slug: 'frozen-sweet-corn',
    category_id: 5,
    trade_type: 'export',
    name_ar: 'ذرة صفراء سكرية مصرية مجمدة (حبوب كاملة IQF)',
    name_en: 'IQF Frozen Golden Sweet Corn Kernels',
    tag_ar: 'حلاوة طبيعية وقرمشة ذهبية 100%',
    tag_en: 'Super Sweet / Plump Golden Kernels',
    variety_ar: 'ذرة صفراء سكرية فائقة الحلاوة Super Sweet Yellow Corn',
    variety_en: 'Super Sweet Golden Yellow Corn (Whole Kernels)',
    season_ar: 'يونيو - نوفمبر (ومتوافرة طوال العام)',
    season_en: 'June - November (Year-Round Stock IQF)',
    packaging_ar: 'أكياس 400 جم، 1 كجم، 2.5 كجم، كراتين 10 كجم، جامبو 1 طن',
    packaging_en: '400g, 1kg, 2.5kg Poly Bags / 10kg Carton / 1 MT Octabin',
    image_url: 'assets/images/products/frozen_sweet_corn.jpg',
    is_featured: 1,
    is_active: 1
  }
];

// Arabic content array
const arFrozenVegProducts = newFrozenVegDataStore.map(p => ({
  id: p.slug,
  tradeType: 'export',
  name: p.name_ar,
  category: 'frozen-veg',
  categoryName: 'خضروات مجمدة',
  image: p.image_url,
  badge: p.tag_ar,
  season: p.season_ar,
  origin: 'مصر (مزارع النوبارية، البحيرة، والدلتا)',
  sizes: p.variety_ar,
  packaging: p.packaging_ar,
  temp: '-18° مئوية أو أقل في عنابر تجميد عميق',
  specs: 'تجميد فردي سريع IQF بأحدث المعايير الأوروبية، خالي تماماً من المواد الحافظة والملونات الصناعية، جودة تصدير نخب أول.',
  description: `${p.name_ar} منتقاة من أجود المحاصيل الزراعية المصرية ومجمدة فور الحصاد بنظام IQF للاحتفاظ بكامل القيمة الغذائية والنكهة الطازجة.`
}));

// English content array
const enFrozenVegProducts = newFrozenVegDataStore.map(p => ({
  id: p.slug,
  tradeType: 'export',
  name: p.name_en,
  category: 'frozen-veg',
  categoryName: 'Frozen Vegetables',
  image: p.image_url,
  badge: p.tag_en,
  season: p.season_en,
  origin: 'Egypt (Nubaria, Beheira & Nile Delta)',
  sizes: p.variety_en,
  packaging: p.packaging_en,
  temp: '-18°C or below deep-freeze reefer storage',
  specs: 'Individually Quick Frozen (IQF), 100% natural without additives, laser sorted and compliant with EU and US-FDA standards.',
  description: `Premium Egyptian ${p.name_en}, processed immediately post-harvest using cutting-edge IQF tunnel freezers to lock in authentic garden freshness and vibrant color.`
}));

// French content array
const frFrozenVegProducts = [
  {
    id: "frozen-artichoke-bottoms",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Fonds d'Artichauts Surgelés (IQF)",
    scientificName: "Cynara cardunculus var. scolymus",
    brief: "Fonds d'artichauts égyptiens soigneusement tournés et parés, offrant une chair tendre et une blancheur parfaite.",
    description: "Fonds d'artichauts égyptiens surgelés IQF, calibres réguliers blanchis et traités contre l'oxydation, idéaux pour la gastronomie et conserveries.",
    image: "assets/images/products/frozen_artichoke_bottoms.jpg",
    origin: "Égypte (Beheira & Alexandrie)",
    season: "Décembre - Mai (Disponible toute l'année)",
    reeferTemp: "-18°C ou inférieur",
    sizes: "Calibres: 5-7 cm, 7-9 cm, 9-11 cm",
    packaging: "Cartons de 10 kg (4 x 2.5 kg) ou sachets 400g / 1 kg",
    specs: "Surgélation rapide IQF -18°C, blanchiment contrôlé, texture fondante sans fibres.",
    badge: "Calibres Homogènes Blanc Ivoire"
  },
  {
    id: "frozen-mixed-vegetables",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Macédoine de Légumes Surgelée (IQF)",
    scientificName: "Mélange 4 Légumes Sélectionnés",
    brief: "Macédoine de légumes surgelée de qualité supérieure alliant croquant, couleurs vives et saveur naturelle.",
    description: "Mélange équilibré de petits pois, dés de carottes, grains de maïs doux et haricots verts coupés, surgelés individuellement.",
    image: "assets/images/products/frozen_mixed_vegetables.jpg",
    origin: "Égypte",
    season: "Disponible toute l'année",
    reeferTemp: "-18°C",
    sizes: "Découpe régulière 10x10 mm",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Découpe régulière, surgélation instantanée IQF à -18°C, sans additifs.",
    badge: "Mélange Équilibré 4 Légumes"
  },
  {
    id: "frozen-green-peas",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Petits Pois Verts Surgelés (IQF)",
    scientificName: "Pisum sativum",
    brief: "Petits pois verts égyptiens extra fins récoltés à maturité optimale et surgelés rapidement.",
    description: "Petits pois tendres et sucrés surgelés IQF dans les heures suivant la récolte pour préserver leur fraîcheur.",
    image: "assets/images/products/frozen_green_peas.jpg",
    origin: "Égypte (Delta du Nil)",
    season: "Décembre - Avril (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Calibre 7.5 - 9 mm Extra Fin",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Grains entiers vert intense, peau très fine et tendre, surgélation IQF.",
    badge: "Extra Fins & Naturellement Sucrés"
  },
  {
    id: "frozen-peas-carrots",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Petits Pois & Carottes en Dés Surgelés",
    scientificName: "Pisum sativum & Daucus carota",
    brief: "Mélange classique et équilibré de petits pois tendres et de carottes coupées en dés réguliers.",
    description: "Mélange 50/50 de petits pois doux et de dés de carottes orangées, calibré pour les professionnels de la restauration.",
    image: "assets/images/products/frozen_peas_carrots.jpg",
    origin: "Égypte",
    season: "Disponible toute l'année",
    reeferTemp: "-18°C",
    sizes: "Dés 10x10 mm + Pois 7.5-9 mm",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Dés de carottes réguliers, pois tendres, surgélation individuelle fluide.",
    badge: "Mélange 50/50 Dés Réguliers"
  },
  {
    id: "frozen-green-beans",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Haricots Verts Éboutés Surgelés (IQF)",
    scientificName: "Phaseolus vulgaris",
    brief: "Haricots verts égyptiens extra fins éboutés et surgelés IQF pour préserver leur couleur vive.",
    description: "Haricots verts sans fils, éboutés et coupés ou entiers, d'une grande tendreté et saveur délicate.",
    image: "assets/images/products/frozen_green_beans.jpg",
    origin: "Égypte (Noubaria & Beheira)",
    season: "Novembre - Mai (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Coupés (2-3 cm) ou Entiers Extra Fins",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Éboutés mécaniquement, sans fils, vert éclatant et texture croquante.",
    badge: "Extra Fins & Coupés Sans Fils"
  },
  {
    id: "frozen-molokhia",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Corète Potagère d'Égypte Surgelée (Molokhia)",
    scientificName: "Corchorus olitorius",
    brief: "La célèbre Molokhia égyptienne surgelée, hachée finement ou en feuilles entières.",
    description: "Molokhia traditionnelle égyptienne préparée selon les normes d'hygiène les plus strictes, riche en nutriments et arôme authentique.",
    image: "assets/images/products/frozen_molokhia.jpg",
    origin: "Égypte",
    season: "Mai - Décembre (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Hachée traditionnelle & Feuilles entières",
    packaging: "Pains sous vide 400g, blocs 1kg / 2.5kg, cartons 10kg",
    specs: "Sans tiges, couleur émeraude préservée, viscosité naturelle authentique.",
    badge: "Texture Veloutée & Vert Intense"
  },
  {
    id: "frozen-okra-zero",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Gombos Surgelés Zéro (< 3 cm)",
    scientificName: "Abelmoschus esculentus (Zero)",
    brief: "Gombos de calibre 'Zéro', le sommet de la gamme d'okra égyptienne, des gousses miniatures extra-tendres.",
    description: "Les plus petits gombos égyptiens, cueillis à la main et équeutés avec minutie pour une expérience gastronomique raffinée.",
    image: "assets/images/products/frozen_okra_zero.jpg",
    origin: "Égypte (Moyenne Égypte & Delta)",
    season: "Juin - Décembre (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Longueur < 3 cm (Miniature)",
    packaging: "Sachets 400g, 1kg / Cartons master 8kg et 10kg",
    specs: "Équeutage conique manuel soigné, gousses miniatures sans fibres, vert éclatant.",
    badge: "Calibre Zéro Ultra-Fin & Tendre"
  },
  {
    id: "frozen-okra-extra",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Gombos Surgelés Extra (3 - 5 cm)",
    scientificName: "Abelmoschus esculentus (Extra)",
    brief: "Gombos égyptiens de calibre Extra (3 à 5 cm), réputés pour leur régularité parfaite.",
    description: "Gombos de qualité Extra sélectionnés pour leur chair tendre et leur forme conique parfaite, très demandés à l'export.",
    image: "assets/images/products/frozen_okra_extra.jpg",
    origin: "Égypte",
    season: "Juin - Décembre (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Longueur 3 à 5 cm",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Équeutage en cône régulier, gousses tendres homogènes, surgélation IQF.",
    badge: "Calibre Extra Trié & Équeuté"
  },
  {
    id: "frozen-okra-excellence",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Gombos Surgelés Supérieurs / Grade 1 (5 - 7 cm)",
    scientificName: "Abelmoschus esculentus (Excellence)",
    brief: "Gombos égyptiens de première catégorie (5 à 7 cm), idéaux pour les ragoûts familiaux.",
    description: "Gombos moyens égyptiens tendres et savoureux, équeutés et triés optiquement pour une cuisson uniforme.",
    image: "assets/images/products/frozen_okra_excellence.jpg",
    origin: "Égypte",
    season: "Juin - Décembre (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Longueur 5 à 7 cm",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Gousses tendres équeutées, calibre 5-7 cm homogène, sans fibres dures.",
    badge: "Calibre Moyen Tendre & Savoureux"
  },
  {
    id: "frozen-grape-leaves",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Feuilles de Vigne Surgelées (Waraq Enab)",
    scientificName: "Vitis vinifera",
    brief: "Feuilles de vigne égyptiennes de début de printemps d'une finesse incomparable.",
    description: "Jeunes feuilles de vigne Banati tendres, empilées et pliées en paquets réguliers sous vide pour un roulage facile.",
    image: "assets/images/products/frozen_grape_leaves.jpg",
    origin: "Égypte (Fayoum & Menoufia)",
    season: "Avril - Juillet (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Feuilles tendres calibrées",
    packaging: "Sachets sous vide 400g / 500g / Cartons 10kg",
    specs: "Feuilles souples sans nervures dures, empilées avec soin pour faciliter le roulage.",
    badge: "Variété Banati Extra Tendre"
  },
  {
    id: "frozen-broccoli",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Fleurettes de Brocoli Surgelées (IQF)",
    scientificName: "Brassica oleracea var. italica",
    brief: "Fleurettes de brocoli égyptien sélectionnées pour leur fraîcheur et leur fermeté.",
    description: "Brocoli égyptien récolté au matin, découpé en fleurettes serrées et surgelé instantanément pour préserver son croquant.",
    image: "assets/images/products/frozen_broccoli.jpg",
    origin: "Égypte",
    season: "Novembre - Avril (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Calibres 2-4 cm et 3-6 cm",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Têtes serrées bien formées, tiges courtes (< 1.5 cm), sans jaunissement.",
    badge: "Fleurettes Compactes Vert Émeraude"
  },
  {
    id: "frozen-roasted-eggplant",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Aubergines Grillées & Fumées Surgelées",
    scientificName: "Solanum melongena",
    brief: "Pulpe d'aubergines égyptiennes grillées à la flamme et délicatement pelées.",
    description: "Aubergines grillées sur feu direct au goût fumé intense, prêtes à l'emploi pour le caviar d'aubergine et Baba Ghanoush.",
    image: "assets/images/products/frozen_roasted_eggplant.jpg",
    origin: "Égypte",
    season: "Disponible toute l'année",
    reeferTemp: "-18°C",
    sizes: "Purée grossière & Demi-aubergines grillées",
    packaging: "Poches sous vide de 1 kg, 2.5 kg, 5 kg",
    specs: "100% naturel sans arôme artificiel, chair onctueuse sans peau brûlée.",
    badge: "Arôme Fumé Naturel au Feu de Bois"
  },
  {
    id: "frozen-sweet-corn",
    tradeType: "export",
    category: "frozen-veg",
    categoryName: "Légumes Surgelés",
    name: "Maïs Doux en Grains Surgelé (IQF)",
    scientificName: "Zea mays var. saccharata",
    brief: "Grains de maïs doux égyptiens d'un jaune doré éclatant, croquants et juteux.",
    description: "Maïs super-sweet égrainé à maturité idéale et surgelé IQF pour conserver son croquant sucré naturel.",
    image: "assets/images/products/frozen_sweet_corn.jpg",
    origin: "Égypte",
    season: "Juin - Novembre (Disponible toute l'année)",
    reeferTemp: "-18°C",
    sizes: "Grains entiers dorés",
    packaging: "Sachets 400g, 1kg, 2.5kg / Cartons 10kg",
    specs: "Grains dorés bien rebondis, surgélation fluide individuelle, haute teneur en sucre.",
    badge: "Extra Croustillant & Naturellement Sucré"
  }
];

// 1. Update database/data_store.json
const dataStorePath = path.join(rootDir, 'database', 'data_store.json');
const dataStore = JSON.parse(fs.readFileSync(dataStorePath, 'utf8'));

// Remove old frozen vegetables products (category_id: 5: 11, 12, 13) and any colliding IDs
dataStore.products = dataStore.products.filter(p => p.category_id !== 5 && !newFrozenVegDataStore.some(np => np.id === p.id));
dataStore.products.push(...newFrozenVegDataStore);
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

// Filter out old frozen-veg and add new 13 products
data.ar.products = data.ar.products.filter(p => p.category !== 'frozen-veg' && !arFrozenVegProducts.some(gp => gp.id === p.id));
data.ar.products.push(...arFrozenVegProducts);

data.en.products = data.en.products.filter(p => p.category !== 'frozen-veg' && !enFrozenVegProducts.some(gp => gp.id === p.id));
data.en.products.push(...enFrozenVegProducts);

if (data.fr && data.fr.products) {
  data.fr.products = data.fr.products.filter(p => p.category !== 'frozen-veg' && !frFrozenVegProducts.some(gp => gp.id === p.id));
  data.fr.products.push(...frFrozenVegProducts);
}

const updatedContentJs = '// Trilingual Data Repository for ALMASA Development & Agro-Export\nvar ALMASA_DATA = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(contentJsPath, updatedContentJs, 'utf8');
console.log('3. Updated assets/data/content.js with AR, EN, FR products!');
console.log('AR products count:', data.ar.products.length);
console.log('EN products count:', data.en.products.length);
console.log('FR products count:', data.fr.products.length);
