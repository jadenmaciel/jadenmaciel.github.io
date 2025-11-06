// Simple zip packaging script for Lambda deployment
// Works cross-platform (Windows, macOS, Linux)
const fs = require('fs');
const { execSync } = require('child_process');

const zipFile = 'waiver-handler.zip';
const jsFile = 'waiver-handler.js';

if (!fs.existsSync(jsFile)) {
  console.error(`Error: ${jsFile} not found. Run 'npm run build' first.`);
  process.exit(1);
}

// Try to use native zip command (Unix) or PowerShell (Windows)
try {
  if (process.platform === 'win32') {
    // Windows: Use PowerShell Compress-Archive
    execSync(`powershell -Command "Compress-Archive -Path ${jsFile} -DestinationPath ${zipFile} -Force"`, { stdio: 'inherit' });
  } else {
    // Unix: Use zip command
    execSync(`zip -r ${zipFile} ${jsFile}`, { stdio: 'inherit' });
  }
  console.log(`✓ Created ${zipFile}`);
} catch (error) {
  console.error('Error creating zip file. Install zip utility or use PowerShell on Windows.');
  process.exit(1);
}

