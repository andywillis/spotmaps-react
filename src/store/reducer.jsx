export const initialState = {
  page: 1,
  numberOfPages: 0,
  limit: 5,
  library: []
};

export function reducer(state, action) {

  const { type, payload } = action;

  switch (type) {

    case 'saveConfig': {
      const { limit } = state;
      const numberOfSpotmaps = payload.length;
      const numberOfPages = Math.floor(numberOfSpotmaps / limit) + (numberOfSpotmaps % limit);
      return { ...state, numberOfPages, library: payload };
    }

    case 'setPage': {
      return { ...state, page: payload };
    }

    case 'RWD': {
      return { ...state, page: 1 };
    }

    case 'FFD': {
      const { numberOfPages } = state;
      return { ...state, page: numberOfPages };
    }

    default: {
      return state;
    }

  }

}
