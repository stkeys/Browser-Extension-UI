'use client';

import { useState } from "react";


export default function DarkModeToggle() {
  const [mode, setMode] = useState('☀️ light')
  function darkMode() {
    if( mode === '☀️ light') {
      setMode('☪ dark');
    } else{
      setMode('☀️ light')
      
    }
  }
  return(
    <button onClick={darkMode}>{mode}</button>
  )
}