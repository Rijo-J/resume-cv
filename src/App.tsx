import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
