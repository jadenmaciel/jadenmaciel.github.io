import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '..', 'public', 'images');
const heroImagePath = join(imagesDir, 'cpr-stock.png');
const ogImagePath = join(imagesDir, 'og.jpg');

// Open Graph image standard size: 1200x630px
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function createOgImage() {
  try {
    console.log('🖼️  Creating Open Graph image...\n');

    // Check if hero image exists
    const metadata = await sharp(heroImagePath).metadata();
    console.log(`   Source: ${metadata.width}x${metadata.height}px`);

    // Resize and crop to OG dimensions, center focus
    await sharp(heroImagePath)
      .resize(OG_WIDTH, OG_HEIGHT, {
        fit: 'cover',
        position: 'center',
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(ogImagePath);

    const outputStats = await sharp(ogImagePath).metadata();
    const stats = await import('fs/promises').then(fs => fs.stat(ogImagePath));

    console.log(`   ✅ Created: og.jpg`);
    console.log(`   Dimensions: ${outputStats.width}x${outputStats.height}px`);
    console.log(`   Size: ${(stats.size / 1024).toFixed(2)}KB`);
    console.log('\n✅ Open Graph image created successfully!');
  } catch (error) {
    console.error('❌ Error creating OG image:', error.message);
    process.exit(1);
  }
}

createOgImage();

