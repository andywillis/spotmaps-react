export default function libraryArrayToObject(library) {
  return library.reduce((acc, c) => {
    const { title } = c;
    acc[title] = acc[title] || { ...c };
    return acc;
  }, {});
}
