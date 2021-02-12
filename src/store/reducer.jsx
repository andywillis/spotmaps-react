export const initialState = [
  {
    title: 'First post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  }
];

export function reducer(action, state) {
  switch (action.type) {
    case 'addTag': {
      return state;
    }
    default: {
      return state;
    }
  }
}
