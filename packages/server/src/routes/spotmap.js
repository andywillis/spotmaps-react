export default async function spotmap(library) {
  return function (req, res) {
    const { id } = req.params;
    const spotmapData = library.find(spotmap => {
      return spotmap.id === +id;
    })
    res.send(spotmapData);
  };
}
