import React, { createContext, useState } from 'react';

export const IconContext = createContext({
  iconSet: 'lucide',
  toggleIconSet: () => {},
});

export const IconProvider = ({ children }) => {
  const [iconSet, setIconSet] = useState('sf'); // Default to SF Symbols

  const toggleIconSet = () => {
    setIconSet(prev => prev === 'lucide' ? 'sf' : 'lucide');
  };

  return (
    <IconContext.Provider value={{ iconSet, toggleIconSet }}>
      {children}
    </IconContext.Provider>
  );
};
