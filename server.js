const express = require('express');
const app = express();

app.get('./hello', (req, res) => {
  res.end('hi');
});

module.exports = app;
