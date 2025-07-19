const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/getq1', (req, res) => {
    res.send('Hello NodeJS!!');
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'q-1.html'));
});
app.listen(8000, () => {
    console.log(`Server running on http://localhost:8000`);
});


//"test": "echo \"Error: no test specified\" && exit 1" //static file test line