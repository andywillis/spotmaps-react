import fs from 'fs/promises';

import rootname from '../../rootname';

import libraryArrayToObject from './libraryArrayToObject';
import getHexData from './getHexData';

/**
 * compileLibrary
 *
 * @param {array} library
 * @return {array} Compiled library 
 */
async function compileLibrary(library) {

  const hexFilePath = `${rootname}/data/hex/`;
  const filenames = await fs.readdir(hexFilePath);
  const hexData = await getHexData(filenames);

  const libraryObj = libraryArrayToObject(library);

  hexData.forEach((obj) => {
    if (libraryObj[obj.filename]) {
      libraryObj[obj.filename].hexData = obj.hexData;
    }
  });

  return Object.values(libraryObj);

}

export default compileLibrary;
