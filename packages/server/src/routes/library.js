import compileLibrary from '../helpers/compileLibrary';

export default async function library(library) {

  const compiledLibrary = await compileLibrary(library);

  return function (req, res) {
    res.send(compiledLibrary);
  };

}
