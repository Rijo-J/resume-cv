import React, { useContext } from 'react';
import cn from 'classnames';
import ToggleSwitch from '../../ToggleSwitch';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar/Navbar';
import { ThemeContext } from '../../ThemeContext';


export const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <header className={cn('header', { 'header--dark': isDarkMode })}>
      <Logo />

      <div className="header__nav">
        <Navbar />
        <ToggleSwitch />
        <a href="/" className='header__menu-opener'/>
      </div>
    </header>
  );};