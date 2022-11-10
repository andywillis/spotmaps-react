import { selectorFamily } from 'recoil';

import {
  libraryAtom,
  // filteredLibraryAtom,
  limitAtom,
  pageAtom
} from './atoms';

// eslint-disable-next-line import/prefer-default-export
export const spotmapsSelector = selectorFamily({
  key: 'spotmapsSelector',
  get: ({ type, value }) => ({ get }) => {

    // const library = get(filteredLibraryAtom);
    const library = get(libraryAtom);
    const page = get(pageAtom);
    const limit = get(limitAtom);

    if (type && value) {
      return library.filter((spotmap) => {
        if (type === 'year') return spotmap.year === +value;
        return spotmap[type].includes(value);
      });
    }

    return library.slice((page - 1) * limit, (page * limit));

  }

});

export const typeSelector = selectorFamily({
  key: 'typeSelector',
  get: type => ({ get }) => {
    const library = get(libraryAtom);
    const typeList = [ ...new Set(library.flatMap(obj => obj[type])) ].sort();
    return typeList;
  }
});
