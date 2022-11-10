import { atom } from 'recoil';

export const libraryAtom = atom({
  key: 'libraryAtom',
  default: []
});

export const numberOfPagesAtom = atom({
  key: 'numberOfPagesAtom',
  default: 0
});

export const filteredLibraryAtom = atom({
  key: 'filteredLibraryAtom',
  default: libraryAtom
});

export const numberOfFilteredPagesAtom = atom({
  key: 'numberOfFilteredPagesAtom',
  default: numberOfPagesAtom
});

export const pageAtom = atom({
  key: 'pageAtom',
  default: 1
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
