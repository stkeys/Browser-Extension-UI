import { createContext, ReactNode, useState } from 'react';

const ThemeContext = createContext('light');
type ThemeProviderProps = {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' 
  );
  return (
    <ThemeContext.Provider value={darkMode, setDarkMode}>
      {children}
    </ThemeContext.Provider>
  );
}