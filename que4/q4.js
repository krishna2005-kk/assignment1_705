const fs = require('fs');
const archiver = require('archiver');
const path = require('path');
const sourceFolder = 'my new folder';
const zipFilePath = 'my-zip-folder.zip';


const output = fs.createWriteStream(zipFilePath);
const archive = archiver('zip', {
    zlib: { level: 9 }
});

output.on('close', () => {
    console.log(` Zip created: ${zipFilePath} (${archive.pointer()} total bytes)`);
});

archive.on('warning', err => {
    if (err.code === 'ENOENT') {
        console.warn(' Warning:', err);
    } else {
        throw err;
    }
});
archive.on('error', err => {
    throw err;
});

archive.pipe(output);
archive.directory(sourceFolder, false);
archive.finalize();