import { atom } from 'recoil';

export const libraryAtom = atom({
  key: 'libraryAtom',
  default: []
});

export const currentSpotmaps = atom({
  key: 'currentSpotmaps',
  default: []
});

export const pageAtom = atom({
  key: 'pageAtom',
  default: 1
});

// export const previousPageAtom = atom({
//   key: 'previousPageAtom',
//   default: 1
// });

export const numberOfPagesAtom = atom({
  key: 'numberOfPagesAtom',
  default: 0
});

export const limitAtom = atom({
  key: 'limitAtom',
  default: 1
});

export const pathAtom = atom({
  key: 'pathAtom',
  default: '/'
});

export const mainWidthAtom = atom({
  key: 'mainWidthAtom',
  default: 0
});

// genres: [],
// writers: [],
// directors: [],
// library: [],
// search: [],
// years: [],
// titles: [],
