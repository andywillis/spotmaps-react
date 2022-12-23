import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

import {
  libraryAtom,
  filteredLibraryAtom,
  numberOfPagesAtom
} from './store/atoms';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  const setLibrary = useSetRecoilState(libraryAtom);
  const setFilteredLibrary = useSetRecoilState(filteredLibraryAtom);
  const setNumberOfPages = useSetRecoilState(numberOfPagesAtom);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/library');
      const library = await response.json();
      setLibrary(library);
      setFilteredLibrary(library);
      setNumberOfPages(library.length);
    }
    getData();
  }, [ setLibrary, setFilteredLibrary, setNumberOfPages ]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
