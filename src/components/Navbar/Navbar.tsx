import React from 'react';
import cn from 'classnames';

import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';
import { navLinks } from '../../content/Content';

export const Navbar = () => {
  const { isDarkModeActive } = React.useContext(ThemeContext);

  return (
    <nav className='navigation'>
      <ul className="navigation__list">
        {navLinks.map(({
          id,
          text,
          href,
        }) => (
          <li className="navigation__item" key={id}>
            <NavLink
              to={href}
              className={({ isActive }) =>
                cn('navigation__link',
                  {'navigation__link--dark': isDarkModeActive},
                  {'navigation__link--active': isActive},
                )
              }>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
