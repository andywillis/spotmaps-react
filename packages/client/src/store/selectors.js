import { selectorFamily } from 'recoil';

import { libraryAtom, limitAtom, pageAtom } from './atoms';

function convertValue(path, value) {
  if (path === 'year') return +value;
  return value;
}

// eslint-disable-next-line import/prefer-default-export
export const spotmapsSelector = selectorFamily({
  key: 'spotmapsSelector',
  get: (type, value) => ({ get }) => {

    const library = get(libraryAtom);
    const page = get(pageAtom);
    const limit = get(limitAtom);

    if (page && value) {
      return library.filter((spotmap) => {
        const coercedValue = type === 'year' ? convertValue(value) : value;
        return spotmap[type].includes(coercedValue);
      });
    }

    return library.slice((page - 1) * limit, (page * limit));

  }

});
