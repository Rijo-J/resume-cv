import React, { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';

export const Experience = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className="experience page__section">
      <h2 className={cn('experience__title', {'experience__title--dark': isDarkMode})}>
        My experience</h2>

      <div className="experience__summary">
        <ul className="experience__list">
          <li className="experience__item experience__item--active">
            Logo1
            <span>& company1</span>
          </li>

          <li className="experience__item">
            Logo2
            <span>& company2</span>
          </li>

          <li className="experience__item">
            Logo3
            <span>& company3</span>
          </li>
        </ul >
        <p className="experience__description">
          The description
        </p>
      </div>
    </section>
  );};