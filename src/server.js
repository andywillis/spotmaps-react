/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const IO = require('./lib/io');

const app = express();

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

app.get('/json/:filename', async (req, res) => {
  const filePath = `${__dirname}/../hex/`;
  const { filename } = req.params;
  const data = await IO.readTextFile(path.join(`${filePath}${filename}`));
  const { length } = data;
  const numberOfSpots = length / 6;
  const minutes = numberOfSpots / 60;
  const spotmapData = { numberOfSpots, minutes, data };
  res.json(spotmapData);
});
