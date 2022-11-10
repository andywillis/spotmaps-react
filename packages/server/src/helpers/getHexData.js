import path from 'path';
import fs from 'fs/promises';

import rootname from '../../rootname';

/**
 * getHexData
 *
 * @param {array} filenames
 * @return {array} Array of hex data objects
 */
function getHexData(filenames) {

  const filePath = `${rootname}/data/hex/`;

  return Promise.all(filenames.map(async (filename) => {
    const hexPath = path.join(`${filePath}${filename}`);
    return {
      filename: filename.split('.')[0],
      hexData: (await fs.readFile(hexPath)).toString()
    };
  }));

}

export default getHexData;
