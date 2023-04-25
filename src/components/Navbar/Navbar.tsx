import React from 'react';
import cn from 'classnames';

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
            <a
              href={href}
              className={
                cn('navigation__link',
                  {'navigation__link--dark': isDarkModeActive})
              }>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
