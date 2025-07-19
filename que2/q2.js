const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;


app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'q2.html'));
});

app.listen(PORT, () => {
  console.log(` Static server running at http://localhost:${PORT}`);
});