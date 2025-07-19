// app.js
const readline = require('readline');
const chatbot = require('./chatbot');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: ',
});
console.log("Welcome to University Chatbot! (type 'exit' to quit)");
rl.prompt();

rl.on('line', (line) => {
  const input = line.trim();
  if (input.toLowerCase() === 'exit') {
    console.log('Chatbot: Goodbye!');
    rl.close();
  } else {
    const response = chatbot.getResponse(input);
    console.log('Chatbot:', response);
    rl.prompt();
  }
}).on('close', () => {
  process.exit(0);
});
