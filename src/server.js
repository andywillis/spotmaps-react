/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const IO = require('./lib/io');

const app = express();

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

app.get('/hex', async (req, res) => {
  const text = await IO.readTextFile(path.join(`${__dirname}/../hex/Black Hole, The.hex`));
  res.send(text);
});
