export const initialState = [
  {
    title: 'First post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  },
  {
    title: 'Second post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  },
  {
    title: 'Third post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  },
  {
    title: 'Fourth post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  },
  {
    title: 'Fifth post',
    body: 'Body text',
    tags: ['Tag one', 'Tag two']
  },
  {
    title: 'Sixth post',
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
