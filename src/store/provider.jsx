import { useReducer } from 'react';
import AppContext from './context';
import { initialState, reducer } from './reducer';

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
