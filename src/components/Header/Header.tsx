import React, { useContext } from 'react';
import cn from 'classnames';
import ToggleSwitch from '../../ToggleSwitch';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar/Navbar';
import { ThemeContext } from '../../ThemeContext';


export const Header = () => {
  const { isDarkModeActive } = useContext(ThemeContext);
  
  return (
    <header className={cn('header', 'page__header', { 'header--dark': isDarkModeActive })}>
      <div className="container">
        <div className="header__content">
          <Logo />
          <div className="header__nav">
            <Navbar />
            <ToggleSwitch />
            <a href="#" className={cn(
              'header__menu-opener',
              { 'header__menu-opener--dark': isDarkModeActive },
            )}/>
          </div>
        </div>
      </div>
    </header>
  );};