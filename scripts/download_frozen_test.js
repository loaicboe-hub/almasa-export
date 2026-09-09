const fs = require('fs');
const path = require('path');

const queries = {
  artichoke_bottoms: [
    'https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=1200&auto=format&fit=crop', // artichokes
    'https://upload.wikimedia.org/wikipedia/commons/e/eb/Artichoke_hearts.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/90/Fonds_d%27artichauts.jpg'
  ],
  mixed_vegetables: [
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop',
    'https://upload.wikimedia.org/wikipedia/commons/4/47/%E4%B8%89%E8%89%B2%E8%B1%86.jpg', // mixed veg peas carrots corn
    'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=1200&auto=format&fit=crop'
  ],
  green_peas: [
    'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1200&auto=format&fit=crop', // green peas macro
    'https://upload.wikimedia.org/wikipedia/commons/4/41/Frozen_peas_%28384924971%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Frozen_Peas_%288042519481%29.jpg'
  ],
  peas_carrots: [
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Washing_peas_and_carrots.jpg',
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1200&auto=format&fit=crop' // carrots & veg
  ],
  green_beans: [
    'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop',
    'https://upload.wikimedia.org/wikipedia/commons/7/75/Macro_of_Fresh_Green_Beans_Buncis.jpg',
    'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=1200&auto=format&fit=crop'
  ],
  broccoli: [
    'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1200&auto=format&fit=crop', // broccoli florets
    'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1200&auto=format&fit=crop'
  ],
  sweet_corn: [
    'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1200&auto=format&fit=crop', // sweet corn
    'https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=1200&auto=format&fit=crop'
  ],
  roasted_eggplant: [
    'https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=1200&auto=format&fit=crop', // grilled / roasted eggplant
    'https://upload.wikimedia.org/wikipedia/commons/8/8c/Grilled_Brinjal.JPG',
    'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1200&auto=format&fit=crop'
  ],
  grape_leaves: [
    'https://upload.wikimedia.org/wikipedia/commons/5/52/Grape_leaves_sold_in_jars.png',
    'https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=1200&auto=format&fit=crop'
  ],
  okra_zero: [
    'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?q=80&w=1200&auto=format&fit=crop',
    'https://upload.wikimedia.org/wikipedia/commons/5/53/Abelmoschus_esculentus_Okra.jpg'
  ]
};

async function downloadFile(url, dest) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) {
      console.log('Failed to fetch:', url, res.status);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`Saved ${dest} (${buffer.length} bytes)`);
    return true;
  } catch (err) {
    console.log('Error downloading:', url, err.message);
    return false;
  }
}

async function run() {
  const tempDir = path.join(__dirname, '..', 'assets', 'images', 'products', 'temp_frozen');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  for (const [k, urls] of Object.entries(queries)) {
    for (let i = 0; i < urls.length; i++) {
      const dest = path.join(tempDir, `${k}_${i}.jpg`);
      await downloadFile(urls[i], dest);
    }
  }
}

run();
