import React, { useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';
import { Introduction } from './pages/Introduction';
import cn from 'classnames';
import { Experience } from './pages/Experience';
import { ProjectCard } from './components/ProjectCard';

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
            <ProjectCard />
          </div>
        </main>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
