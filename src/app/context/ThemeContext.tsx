import { createContext, ReactNode, useState, useEffect } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false, 
  setDarkMode: () => {},
});

type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}