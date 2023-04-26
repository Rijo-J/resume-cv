import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import logoW from '../../images/logo-w.svg';
import { ThemeContext } from '../../ThemeContext';

const logoDescription = 'Curriculum Joao';


export const Logo = () => {
  const { isDarkModeActive } = useContext(ThemeContext);
  
  return (
    <a href="#" className="logo">


      <img src={isDarkModeActive ? logoW : logo}
        height={45}
        alt={logoDescription}
        className="logo__image"
      />
    </a>
  );};
