import { writeFile } from 'fs/promises';

import compileLibrary from '../helpers/compileLibrary';

import rootname from '../../rootname';

import library from '../../data/library/library' assert { type: 'json' };

const compiledLibrary = JSON.stringify(await compileLibrary(library));

const filePath = `${rootname}/data/library/compiledLibrary.json`;

try {
  await writeFile(filePath, compiledLibrary, 'utf8');
  console.log('File saved');
} catch (err) {
  console.log(err);
}
