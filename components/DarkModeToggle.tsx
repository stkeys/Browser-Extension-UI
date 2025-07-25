'use client';


export default function DarkModeToggle() {
  const darkMode = true;
  return(
    <button>{darkMode ? 'light' : 'dark'}</button>
  )
}