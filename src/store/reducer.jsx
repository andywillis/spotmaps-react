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
  mainWidth: 0
};

function getGenre(library) {
  return [...new Set(library.map(({ genre }) => genre).flat())];
}

function getDirector(library) {
  return [...new Set(library.map(({ director }) => director).flat())];
}

function getWriter(library) {
  return [...new Set(library.map(({ writer }) => writer).flat())];
}

function getYear(library) {
  return [...new Set(library.map(({ year }) => year).flat())];
}

export function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'saveLibrary': {
      const { limit } = state;
      const numberOfSpotmaps = payload.length;
      const numberOfPages = Math.ceil(numberOfSpotmaps / limit);
      const genre = getGenre(payload);
      const director = getDirector(payload);
      const writer = getWriter(payload);
      const year = getYear(payload);
      return {
        ...state,
        numberOfPages,
        genre,
        director,
        writer,
        year,
        library: payload
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
