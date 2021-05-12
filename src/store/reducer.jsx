export const initialState = {
  page: 1,
  previousPage: 1,
  numberOfPages: 0,
  limit: 5,
  library: [],
  mainWidth: 0
};

export function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'saveLibrary': {
      const { limit } = state;
      const numberOfSpotmaps = payload.length;
      const numberOfPages = Math.ceil(numberOfSpotmaps / limit);
      return { ...state, numberOfPages, library: payload };
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
