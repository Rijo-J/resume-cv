import React, { useState } from 'react';
import './App.scss';
import cn from 'classnames';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';
import { Introduction } from './pages/Introduction';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Footer } from './components/Footer';

function App() {
  const [isDarkModeActive, setisDarkModeActive] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkModeActive, setisDarkModeActive }}>
        <Header />
        <main className={cn('page__main', {'page__main--dark': isDarkModeActive})}>
          <div className="container">

            <Introduction />
            <Experience />
            <Projects />
          </div>
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
