import React, { useContext, FC } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../ThemeContext';

type Props = {
  technologies: (string | JSX.Element)[][];
}

export const TechnologyCards: FC<Props> = ({
  technologies
}) => {
  const { isDarkModeActive } = useContext(ThemeContext);

  return (
    <div className="technologies">
      {technologies.map(([icon, technology]) => (
        <div
          key={`${technology}`}
          className={cn(
            'technologies__item',
            {'technologies__item--dark': isDarkModeActive}
          )}>
          {icon}
          {technology}
        </div>
      ))}
    </div>
  );
};
