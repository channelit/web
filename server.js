const express = require('express');
const path = require('path');
const http = require ('http');
const app = express();

const port = process.env.PORT || '3000';
app.set('port', port);

app.use(express.static(path.join(__dirname, '')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);

server.listen(port, () => console.log('Started'));
