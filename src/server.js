/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const IO = require('./lib/io');

const library = require('./library/library.json').reduce((acc, c) => {
  const { title } = c;
  acc[title] = acc[title] || { ...c };
  return acc;
}, {});

const app = express();

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

function getData(filenames) {
  const filePath = `${__dirname}/../hex/`;
  return Promise.all(filenames.map(async (filename) => {
    return {
      filename: filename.split('.')[0],
      hexData: await IO.readTextFile(path.join(`${filePath}${filename}`))
    };
  }));
}

async function compileLibrary() {
  const hexFilePath = `${__dirname}/../hex/`;
  const filenames = await IO.readFolder(path.join(`${hexFilePath}`));
  const hexData = await getData(filenames);
  hexData.forEach((obj) => {
    library[obj.filename].hexData = obj.hexData;
  });
}

compileLibrary();

app.get('/library', async (req, res) => {
  res.send(library);
});

// app.get('/spotmap/:filename', async (req, res) => {
//   const filePath = `${__dirname}/../hex/`;
//   const { filename } = req.params;
//   const data = await IO.readTextFile(path.join(`${filePath}${filename}.hex`));
//   const { length } = data;
//   const numberOfSpots = length / 6;
//   const minutes = numberOfSpots / 60;
//   const spotmapData = { filename, numberOfSpots, minutes, hexData: data, length };
//   res.json(spotmapData);
// });
