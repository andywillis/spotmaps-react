/**
 * library route
 *
 * @param {array} library
 * @return {function} Route function
 */
async function library(library) {
  return function (req, res) {
    res.send(library);
  };
}

export default library;
