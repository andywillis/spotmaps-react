export const initialState = {
  page: 1,
  previousPage: 1,
  numberOfPages: 0,
  limit: 1,
  genre: [],
  writer: [],
  director: [],
  library: [],
  year: [],
  titles: [],
  mainWidth: 0
};

function getType(library, type) {
  return [...new Set(library.map((obj) => obj[type]).flat())];
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

    case 'saveLibrary': {
      const { limit } = state;
      const numberOfSpotmaps = payload.length;
      const numberOfPages = Math.ceil(numberOfSpotmaps / limit);
      const genre = getType(payload, 'genre');
      const director = getType(payload, 'director');
      const writer = getType(payload, 'writer');
      const year = getType(payload, 'year');
      const titles = getTitles(payload);
      return {
        ...state,
        numberOfPages,
        genre,
        director,
        writer,
        year,
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
