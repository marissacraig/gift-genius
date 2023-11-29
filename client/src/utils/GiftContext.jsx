import { createContext, useContext, useReducer } from 'react';

import reducer from './reducers';

// Initialize new context for gifts
const GiftContext = createContext();

// We create a custom hook to immediately pass the gift context value ({ gifts, prices } - see line 36) to any consumer component which invokes it
export const useGiftContext = () => useContext(GiftContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const GiftProvider = ({ children }) => {
  const gifts = [
    {
      id: 1,
      name: 'Legos',
      price: '$20',
    },
    {
      id: 2,
      name: 'Guitar',
      price: '$250',
    },
  ];

  const appState = useReducer(reducer, { gifts, prices })

  // The value prop expects an initial state object
  return (
    <GiftContext.Provider value={appState}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </GiftContext.Provider>
  );
};
