import React, { useContext, useState } from 'react';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';

import { myExperience } from '../../content/Content';

export const Experience = () => {
  const [activeCardId, setActiveCardId] = useState(0);

  const { isDarkModeActive } = useContext(ThemeContext);

  const activeExperience = myExperience[activeCardId];
  const handleSelectCard = (cardId: number) => {
    setActiveCardId(cardId);
  };


  return (
    <section
      className={cn('experience page__section', {
        'experience--dark': isDarkModeActive,
      })}>
      <h2 className='experience__title'>My experience</h2>

      <div className='experience__summary'>
        <ul className='experience__list'>
          {myExperience.map(({
            id,
            icon,
            slug,
            position,
            company,
          }) => (
            <li
              key={slug}
              onClick={() => handleSelectCard(id)}
              className={cn(
                'experience__card',
                {'experience__card--active': activeCardId === id && !isDarkModeActive},
                {'experience__card--active-dark': activeCardId === id && isDarkModeActive},
              )}
            >
              <div className='experience__icon'>{icon}</div>

              <div className='experience__card-description'>
                <div className='experience__card-position'>
                  {position}
                </div>

                <div className='experience__card-company'>
                  {company}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className='experience__description'>
          <div className="experience__location">
            {activeExperience.shortDescription}

            {activeExperience.link.length !== 0 && (
              <a href={activeExperience.link} target='_blank' rel="noreferrer">
                {activeExperience.linkDescription}
              </a>
            )}
          </div>

          <div className="experience__duration">
            {activeExperience.duration}
          </div>

          <ul className='experience__responsabilities'>
            {myExperience[activeCardId]
              .responsibilities
              .map((responsability, index) => (
                <li
                  key={`responsability-${index}`}
                  className='experience__responsabilities-item'>
                  {responsability}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
