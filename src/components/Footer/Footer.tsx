import React, { useContext } from 'react';
import cn from 'classnames';
import ToggleSwitch from '../../ToggleSwitch';
import { ThemeContext } from '../../ThemeContext';

export const Footer = () => {
  const { isDarkModeActive } = useContext(ThemeContext);
  
  return (
    <footer className={cn('footer', 'page__footer', { 'footer--dark': isDarkModeActive })}>
      <div className="container">
        <div className="footer__content">
          <div className="footer__nav">
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </footer>
  );};