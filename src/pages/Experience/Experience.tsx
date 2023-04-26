import React, { useContext, useState, useEffect } from 'react';

import { experience } from '../../content/Content';

import { ThemeContext } from '../../ThemeContext';
import { WorkDescription } from '../../components/WorkDescription';
import cn from 'classnames';


export const Experience = () => {
  const [activeCardId, setActiveCardId] = useState(0);
  const [activeExperience, setActiveExperience] = useState(experience[0]);

  useEffect(() => {
    setActiveExperience(() => experience[activeCardId]);
  }, [activeCardId]);
  

  const { isDarkModeActive } = useContext(ThemeContext);

  const handleSelectCard = (cardId: number) => {
    setActiveCardId(() => cardId);
  };

  return (
    <section
      className={cn('experience page__section', {
        'experience--dark': isDarkModeActive,
      })}>
      <h2 className='experience__title'>My experience</h2>

      <div className='experience__summary'>
        <ul className='experience__list'>
          {experience.map(({
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

        <WorkDescription workDetails={activeExperience} workId={activeCardId} />
      </div>
    </section>
  );
};
