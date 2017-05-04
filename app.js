const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const user = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);

http.createServer(app).listen(3000, () => {
  console.log(`Server running at port 3000`);
});

module.exports = app;
