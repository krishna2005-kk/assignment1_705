
const fs = require('fs');
const path = require('path');

fs.writeFileSync('que9.txt', 'Hello krishna', 'utf8');
console.log(' File written successfully.');

const content = fs.readFileSync('que9.txt', 'utf8');
console.log(' File content:', content);

fs.appendFileSync('que9.txt', '\nThis is additional content.', 'utf8');
console.log(' Content appended.');

fs.renameSync('que9.txt', 'renamed_que9.txt');
console.log(' File renamed to renamed_que9.txt');

const exists = fs.existsSync('renamed_que9.txt');
console.log(` File exists? ${exists}`);

//fs.unlinkSync('renamed_example.txt');
//console.log(' File deleted.');