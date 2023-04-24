import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';
import { Introduction } from './pages/Introduction';
import cn from 'classnames';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
        <main className={cn('page__main', {'page__main--dark': isDarkMode})}>
          <div className="container">
            <Introduction />
          </div>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
