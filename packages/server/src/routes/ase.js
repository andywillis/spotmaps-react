import path from 'path';
import fs from 'fs';

import rootname from '../../rootname';

/**
 * ase route
 *
 * @param {array} library
 * @return {function} Route function
 */
async function ase(library) {

  return async function (req, res) {
    
    const { title } = req.params;

    const spotmap = library.find(spotmap => {
      return spotmap.title === title;
    });

    const filePath = path.join(`${rootname}`, 'data/ase/', `${spotmap.title}.ase`);
    
    res.status(200).download(filePath, `${spotmap.title}.ase`);
  
  };

}

export default ase;
