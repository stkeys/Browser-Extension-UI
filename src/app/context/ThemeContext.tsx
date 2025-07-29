import { createContext, ReactNode, useState } from 'react';

const ThemeContext = createContext('light');
type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value=''>
      {children}
    </ThemeContext.Provider>
  );
}