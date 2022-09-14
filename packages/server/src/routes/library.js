export default async function library(library) {
  return function (req, res) {
    res.send(library);
  };
}
