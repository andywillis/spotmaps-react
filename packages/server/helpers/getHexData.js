import path from 'path';
import fs from 'fs/promises';

import rootname from '../rootname';

export default function getHexData(filenames) {

  const filePath = `${rootname}/data/hex/`;

  return Promise.all(filenames.map(async (filename) => {
    return {
      filename: filename.split('.')[0],
      hexData: await fs.readFile(path.join(`${filePath}${filename}`))
    };
  }));

}
