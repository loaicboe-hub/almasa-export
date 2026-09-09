const fs = require('fs');
const path = require('path');

async function searchAndDownload() {
  const destDir = path.join(__dirname, '..', 'assets', 'images', 'products');

  // Red Onion search
  const redUrl = 'https://unsplash.com/napi/search/photos?query=' + encodeURIComponent('red onions fresh whole cut') + '&per_page=5';
  const redRes = await fetch(redUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const redData = await redRes.json();
  
  if (redData.results && redData.results.length > 0) {
    const redImgUrl = redData.results[0].urls.raw + '&q=85&w=1400&auto=format&fit=crop';
    console.log('Selected Red Onion:', redData.results[0].alt_description, redImgUrl);
    const imgRes = await fetch(redImgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const dest = path.join(destDir, 'fresh_red_onion.jpg');
    fs.writeFileSync(dest, buffer);
    console.log(`Saved fresh_red_onion.jpg (${buffer.length} bytes)`);
  }

  // White Onion search
  const whiteUrl = 'https://unsplash.com/napi/search/photos?query=' + encodeURIComponent('white onions fresh bulbs') + '&per_page=5';
  const whiteRes = await fetch(whiteUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const whiteData = await whiteRes.json();
  
  if (whiteData.results && whiteData.results.length > 0) {
    const whiteImgUrl = whiteData.results[0].urls.raw + '&q=85&w=1400&auto=format&fit=crop';
    console.log('Selected White Onion:', whiteData.results[0].alt_description, whiteImgUrl);
    const imgRes = await fetch(whiteImgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const dest = path.join(destDir, 'fresh_white_onion.jpg');
    fs.writeFileSync(dest, buffer);
    console.log(`Saved fresh_white_onion.jpg (${buffer.length} bytes)`);
  }
}

searchAndDownload().catch(console.error);
