
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from q8!');
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});