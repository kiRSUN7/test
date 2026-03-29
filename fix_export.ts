import fs from 'fs';
import path from 'path';

const sourceDir = '/BEGET_SITE_FILES';
const targetDir = '/BEGET_SITE_FILES_V2';

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${srcPath} to ${destPath}`);
        }
    }
}

try {
    copyDir(sourceDir, targetDir);
    console.log('Successfully copied files to V2');
} catch (err) {
    console.error('Error copying files:', err);
    process.exit(1);
}
