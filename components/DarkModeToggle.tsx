'use client';

import { useState } from "react";


export default function DarkModeToggle() {
  const [mode, setMode] = useState('☀️ light')
  const darkMode = () => {
    setMode((prevMode) => (prevMode === '☀️ light' ? '☪ dark' : '☀️ light'));
  };
  
  return(
    <button onClick={darkMode}>{mode}</button>
  )
}