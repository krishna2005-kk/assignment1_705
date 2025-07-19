
console.log(' Current directory:', __dirname);
console.log(' Current file:', __filename);

setTimeout(() => {
  console.log(' Timeout triggered after 2 seconds');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(` Interval tick ${count}`);
  if (count === 3) {
    clearInterval(intervalId); 
    console.log(' Interval cleared');
  }
}, 1000);

console.log('Logging with console.log');
console.log(' Process info:');
console.log('PID:', process.pid);
console.log('Platform:', process.platform);
console.log('Node Version:', process.version);