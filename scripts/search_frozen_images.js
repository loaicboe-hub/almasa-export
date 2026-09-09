const fs = require('fs');
const path = require('path');

const candidates = [
  {
    key: 'frozen_artichoke_bottoms',
    terms: ['Artichoke hearts', 'Cynara cardunculus scolymus', 'Artichoke bottoms', 'Fonds artichaut']
  },
  {
    key: 'frozen_mixed_vegetables',
    terms: ['Frozen mixed vegetables', 'Mixed vegetables peas carrots corn', 'Macédoine de légumes', 'Mixed vegetables']
  },
  {
    key: 'frozen_green_peas',
    terms: ['Frozen peas', 'Pisum sativum green peas', 'Green peas background', 'Petits pois']
  },
  {
    key: 'frozen_peas_carrots',
    terms: ['Peas and carrots', 'Carrots and peas', 'Petits pois carottes']
  },
  {
    key: 'frozen_green_beans',
    terms: ['Green beans Phaseolus vulgaris', 'Fresh cut green beans', 'Haricots verts']
  },
  {
    key: 'frozen_molokhia',
    terms: ['Corchorus olitorius', 'Molokhia leaves', 'Nalta jute leaves', 'Mallow leaves']
  },
  {
    key: 'frozen_okra_zero',
    terms: ['Abelmoschus esculentus young', 'Small okra pods', 'Okra fingers', 'Fresh small okra']
  },
  {
    key: 'frozen_okra_extra',
    terms: ['Okra Abelmoschus esculentus', 'Green okra pods', 'Gombos frais']
  },
  {
    key: 'frozen_okra_excellence',
    terms: ['Okra pods green vegetable', 'Lady fingers okra', 'Abelmoschus esculentus pods']
  },
  {
    key: 'frozen_grape_leaves',
    terms: ['Grape leaves fresh', 'Vitis vinifera leaves', 'Vine leaves stacked', 'Feuilles de vigne']
  },
  {
    key: 'frozen_broccoli',
    terms: ['Broccoli florets fresh', 'Brassica oleracea italica florets', 'Frozen broccoli']
  },
  {
    key: 'frozen_roasted_eggplant',
    terms: ['Roasted eggplant pulp', 'Grilled eggplant aubergine', 'Baba ghanoush roasted eggplant']
  },
  {
    key: 'frozen_sweet_corn',
    terms: ['Sweet corn kernels', 'Frozen corn kernels', 'Zea mays sweet corn grains']
  }
];

async function searchCommons(term) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + 
    encodeURIComponent(term + ' -icon -map -flag -scheme -stamp -diagram') + 
    '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|mime&format=json';
  
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'AlmasaExportPlatform/1.0' } });
    const data = await res.json();
    if (!data.query || !data.query.pages) return [];
    
    const results = [];
    for (const pageId of Object.keys(data.query.pages)) {
      const page = data.query.pages[pageId];
      if (page.imageinfo && page.imageinfo[0]) {
        const info = page.imageinfo[0];
        if (info.mime && (info.mime.includes('jpeg') || info.mime.includes('png') || info.mime.includes('webp'))) {
          results.push({
            title: page.title,
            url: info.url,
            width: info.width,
            height: info.height,
            size: info.size
          });
        }
      }
    }
    return results;
  } catch (err) {
    console.error('Error searching:', term, err.message);
    return [];
  }
}

async function run() {
  for (const item of candidates) {
    console.log(`\n=== Finding for ${item.key} ===`);
    let found = [];
    for (const term of item.terms) {
      const res = await searchCommons(term);
      if (res.length > 0) {
        found.push(...res);
      }
      if (found.length >= 3) break;
    }
    console.log(`Found ${found.length} items for ${item.key}:`);
    found.slice(0, 4).forEach(f => console.log(`  - [${f.width}x${f.height}] ${f.title} -> ${f.url}`));
  }
}

run();
