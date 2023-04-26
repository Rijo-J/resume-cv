import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import cn from 'classnames';
import { Header } from './components/Header';
import { ThemeContext } from './ThemeContext';
import { Introduction } from './pages/Introduction';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';

function App() {
  const [isDarkModeActive, setisDarkModeActive] = useState(false);

  return (
    <>
      <Router>
        <ThemeContext.Provider value={{ isDarkModeActive, setisDarkModeActive }}>
          <Header />
          <main className={cn('page__main', {'page__main--dark': isDarkModeActive})}>
            <div className="container">

              <Routes>
                <Route path='/' element={<Introduction />}/>
                <Route path='/experience' element={<Experience />}/>
                <Route path='/projects' element={<Projects />}/>
              </Routes>
            </div>
          </main>
        </ThemeContext.Provider>
      </Router>
    </>
  );
}

export default App;
