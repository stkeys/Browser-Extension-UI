'use client';
import {Sun, Moon} from 'react-feather';


import { useDarkMode } from "@/app/context/ThemeContext";


export default function DarkModeToggle() {
  const {darkMode, setDarkMode} = useDarkMode();
 
  
  return(
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
 
    </button>
  )
}