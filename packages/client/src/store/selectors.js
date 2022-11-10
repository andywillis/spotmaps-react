import { selectorFamily } from 'recoil';

import { libraryAtom } from './atoms';

export const spotmapsSelector = selectorFamily({
  key: 'spotmapsSelector',
  get: ({ type, value }) => ({ get }) => {

    const library = get(libraryAtom);

    if (type && value) {
      return library.filter((spotmap) => {
        if (type === 'year') return spotmap.year === +value;
        return spotmap[type].includes(value);
      });
    }

    return library;

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
