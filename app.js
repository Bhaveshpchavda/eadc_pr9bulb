const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000

app.get('/practical2.1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/practical2.2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  //console.log("server starting on " + 8000);
});
