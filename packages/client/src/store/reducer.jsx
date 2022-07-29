export const initialState = {
  page: 1,
  previousPage: 1,
  numberOfPages: 0,
  limit: 1,
  genres: [],
  writers: [],
  directors: [],
  library: [],
  search: [],
  years: [],
  titles: [],
  path: '/',
  mainWidth: 0
};

function getType(library, type) {
  const flat = library.map((obj) => obj[type]).flat();
  const arr = [...new Set(flat)].sort();
  return arr;
}

function getTitles(library) {
  return library.map(({ title }) => title).sort();
}

function sortLibraryByType(library, type = 'title') {
  return library.sort((a, b) => {
    return a[type].toLowerCase() > b[type].toLowerCase();
  });
}

export function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'updatePath': {
      return { ...state, path: payload };
    }

    case 'saveLibrary': {
      const { limit } = state;
      const numberOfSpotmaps = payload.length;
      const numberOfPages = Math.ceil(numberOfSpotmaps / limit);
      const genres = getType(payload, 'genre');
      const directors = getType(payload, 'director');
      const writers = getType(payload, 'writer');
      const years = getType(payload, 'year');
      const titles = getTitles(payload);
      return {
        ...state,
        numberOfPages,
        genres,
        directors,
        writers,
        years,
        titles,
        library: sortLibraryByType(payload)
      };
    }

    case 'setMainWidth': {
      return { ...state, mainWidth: payload };
    }

    case 'setPage': {
      return {
        ...state,
        page: payload,
        previousPage: state.page
      };
    }

    case 'rwd': {
      return {
        ...state,
        page: 1,
        previousPage: state.page
      };
    }

    case 'previous': {
      return {
        ...state,
        page: state.page - 1,
        previousPage: state.page
      };
    }

    case 'next': {
      return {
        ...state,
        page: state.page + 1,
        previousPage: state.page
      };
    }

    case 'ffd': {
      const { numberOfPages } = state;
      return {
        ...state,
        page: numberOfPages,
        previousPage: state.page
      };
    }

    default: {
      return state;
    }

  }

}
