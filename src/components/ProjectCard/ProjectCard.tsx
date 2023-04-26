import React, { useContext } from 'react';

import { GrGithub } from 'react-icons/gr';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';
import { Project } from '../../utils/types/Project';

type Props = {
  project: Project
}

export const ProjectCard: React.FC<Props> = ({
  project
}) => {
  const { isDarkModeActive } = useContext(ThemeContext);
  const {
    title,
    date,
    demoLink,
    repoLink,
    technologies,
    id,
    description
  } = project;

  return (
    <div
      className={cn('project-card', {
        'project-card--dark': isDarkModeActive,
      })}>
      <div className='project-card__heading'>
        <h3 className='project-card__title'>{title}</h3>
        <div className='project-card__year'>{date}</div>
      </div>

      <a
        href={repoLink}
        target='_blank'
        rel='noreferrer'
        className={cn(
          'project-card__link',
          `project-card__link--p${id}`
        )}
      />

      <div className='project-card__info'>
        <div className="project-card__technologies">
          {technologies.map((tech, i)  => (
            <div
              key={`${tech}-${i}`}
              className={cn('project-card__technology', {
                'project-card__technology--dark': isDarkModeActive,
              })}
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="project-card__externals">
          <a
            href={repoLink}
            target='_blank'
            rel='noreferrer'
            className="project-card__external"
          >
            <GrGithub />
          </a>

          <a
            href={demoLink}
            target='_blank'
            rel='noreferrer'
            className="project-card__external"
          >
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>

      <div className="project-card__description">
        {description}
      </div>
    </div>
  );
};
