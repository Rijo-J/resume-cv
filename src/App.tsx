import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';
import { Introduction } from './pages/Introduction';
import cn from 'classnames';
import { Experience } from './pages/Experience';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
        <main className={cn('page__main', {'page__main--dark': isDarkMode})}>
          <div className="container">
            <Introduction />
            <Experience />
          </div>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
