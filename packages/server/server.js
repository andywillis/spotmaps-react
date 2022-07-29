/* eslint-disable no-console */
const path = require('path');
const express = require('express');
const IO = require('./lib/io');

let library = [];

const libraryTemp = require('./library/library.json').reduce((acc, c) => {
  const { title } = c;
  acc[title] = acc[title] || { ...c };
  return acc;
}, {});

const app = express();
app.use(express.static(path.join(__dirname, '../build')));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
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
    if (libraryTemp[obj.filename]) libraryTemp[obj.filename].hexData = obj.hexData;
  });
  library = Object.values(libraryTemp);
}

compileLibrary();

app.get('/library', async (req, res) => {
  res.send(library);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
