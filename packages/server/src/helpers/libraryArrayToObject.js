/**
 * libraryArrayToObject
 *
 * @param {array} library
 * @return {object} Library object
 */
function libraryArrayToObject(library) {
  return library.reduce((acc, c) => {
    const { title } = c;
    acc[title] = acc[title] || { ...c };
    return acc;
  }, {});
}

export default libraryArrayToObject;
