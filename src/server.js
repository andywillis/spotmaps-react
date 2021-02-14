/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const IO = require('./lib/io');

const app = express();

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

app.get('/config', async (req, res) => {
  const filePath = `${__dirname}/library/`;
  const filename = 'library';
  const data = await IO.readTextFile(path.join(`${filePath}${filename}.json`));
  res.json(data);
});

app.get('/spotmap/:filename', async (req, res) => {
  const filePath = `${__dirname}/../hex/`;
  const { filename } = req.params;
  const data = await IO.readTextFile(path.join(`${filePath}${filename}.hex`));
  const { length } = data;
  const numberOfSpots = length / 6;
  const minutes = numberOfSpots / 60;
  const spotmapData = { filename, numberOfSpots, minutes, hexData: data, length };
  res.json(spotmapData);
});
