import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoW from '../../images/logo-w.svg';
import { ThemeContext } from '../../ThemeContext';

const logoDescription = 'Curriculum Joao';


export const Logo = () => {
  const { isDarkModeActive } = useContext(ThemeContext);
  
  return (
    <Link to="/" className="logo">
      <img src={isDarkModeActive ? logoW : logo}
        height={45}
        alt={logoDescription}
        className="logo__image"
      />
    </Link>
  );};
