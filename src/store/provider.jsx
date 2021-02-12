import { useReducer } from 'react';
import AppContext from './context';
import { initialState, reducer } from './reducer';

export default function AppProvider({ children }) {
  const [state] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
}
