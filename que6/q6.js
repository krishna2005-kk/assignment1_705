const fs = require('fs');
const path = require('path');


function unlinkFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(` File "${filePath}" deleted successfully.`);
      }
    });
  });
}
const fileToDelete = path.join(__dirname, 'sample.txt');

unlinkFile(fileToDelete)
  .then(msg => console.log(msg))
  .catch(err => console.error(' Error deleting file:', err.message));