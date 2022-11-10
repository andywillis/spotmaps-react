import toSwatch from 'rgb2ase';

/**
 * ase route
 *
 * @param {array} library
 * @return {function} Route function
 */
async function ase(library) {

  return function (req, res) {
    
    const { filename } = req.params;
    
    res.download(file);
  
  };

}

export default ase;
