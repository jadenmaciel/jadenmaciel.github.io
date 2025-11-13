import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagesDir = join(__dirname, '..', 'public', 'images');
const outputDir = imagesDir;

// Image optimization configuration
const config = {
  hero: {
    input: 'cpr-stock.png',
    sizes: [
      { width: 400, suffix: '400w' }, // Mobile
      { width: 600, suffix: '600w' }, // Tablet
      { width: 800, suffix: '800w' }, // Desktop
      { width: 1200, suffix: '1200w' }, // Large desktop/2x
    ],
    quality: 85,
  },
  logo: {
    input: 'logo.png',
    sizes: [
      { width: 48, suffix: '48w' }, // Header logo
      { width: 96, suffix: '96w' }, // 2x for retina
      { width: 192, suffix: '192w' }, // Favicon/app icon
    ],
    quality: 90, // Higher quality for logo
  },
};

async function getImageInfo(imagePath) {
  try {
    const metadata = await sharp(imagePath).metadata();
    const stats = await stat(imagePath);
    return {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      size: stats.size,
      sizeKB: (stats.size / 1024).toFixed(2),
    };
  } catch (error) {
    console.error(`Error reading ${imagePath}:`, error.message);
    return null;
  }
}

async function optimizeImage(inputPath, outputPath, width, quality, format = 'webp') {
  try {
    const sharpInstance = sharp(inputPath);
    
    if (format === 'webp') {
      await sharpInstance
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .webp({ quality })
        .toFile(outputPath);
    } else {
      await sharpInstance
        .resize(width, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .png({ quality, compressionLevel: 9 })
        .toFile(outputPath);
    }
    
    const outputStats = await stat(outputPath);
    return {
      path: outputPath,
      size: outputStats.size,
      sizeKB: (outputStats.size / 1024).toFixed(2),
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeImages() {
  console.log('🔍 Image Optimization Script\n');
  console.log('Checking current images...\n');

  // Check original images
  for (const [key, configItem] of Object.entries(config)) {
    const inputPath = join(imagesDir, configItem.input);
    console.log(`\n📸 ${key.toUpperCase()}: ${configItem.input}`);
    
    const info = await getImageInfo(inputPath);
    if (!info) {
      console.log(`   ⚠️  File not found: ${configItem.input}`);
      continue;
    }
    
    console.log(`   Original: ${info.width}x${info.height}px, ${info.sizeKB}KB (${info.format.toUpperCase()})`);
    
    // Optimize to WebP at different sizes
    const optimized = [];
    for (const size of configItem.sizes) {
      const baseName = configItem.input.replace(/\.[^/.]+$/, '');
      const outputPath = join(outputDir, `${baseName}-${size.suffix}.webp`);
      
      const result = await optimizeImage(
        inputPath,
        outputPath,
        size.width,
        configItem.quality,
        'webp'
      );
      
      if (result) {
        optimized.push({
          ...size,
          ...result,
        });
        const reduction = ((1 - result.size / info.size) * 100).toFixed(1);
        console.log(`   ✅ ${size.suffix}: ${result.sizeKB}KB (${reduction}% smaller)`);
      }
    }
    
    // Also create a fallback PNG for browsers that don't support WebP
    // (though modern browsers all support WebP, we'll keep the original as fallback)
    console.log(`   ℹ️  Keeping original ${configItem.input} as fallback`);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Update Hero.tsx to use srcSet with WebP images');
  console.log('   2. Update Header.tsx to use optimized logo');
  console.log('   3. Update index.html to reference optimized images');
  console.log('   4. Test the build with: npm run build');
}

optimizeImages().catch(console.error);

