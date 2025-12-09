const fs = require('fs-extra');
const path = require('path');

// Define source and destination directories
const srcDir = __dirname;
const destDir = path.join(__dirname, 'dist');

// Files and directories to copy
const copyPaths = [
  'index.html',
  'privacy-policy.html',
  'terms-conditions.html',
  'cookie-policy.html',
  'css',
  'js',
  'images'
];

// Create dist directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy each file/directory
copyPaths.forEach(item => {
  const srcPath = path.join(srcDir, item);
  const destPath = path.join(destDir, item);
  
  try {
    if (fs.existsSync(srcPath)) {
      if (fs.lstatSync(srcPath).isDirectory()) {
        fs.copySync(srcPath, destPath, { overwrite: true });
        console.log(`Copied directory: ${item}`);
      } else {
        fs.copySync(srcPath, destPath);
        console.log(`Copied file: ${item}`);
      }
    } else {
      console.warn(`Warning: ${item} does not exist in the source directory`);
    }
  } catch (err) {
    console.error(`Error copying ${item}:`, err);
  }
});

console.log('\nBuild completed! Your files are ready in the dist/ directory.');
