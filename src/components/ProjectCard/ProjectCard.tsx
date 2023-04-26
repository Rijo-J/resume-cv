import React, { useContext } from 'react';

import { GrGithub } from 'react-icons/gr';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';
import { Project } from '../../utils/types/Project';
import { TechnologyCards } from '../TechnologyCards';

type Props = {
  project: Project
}

export const ProjectCard: React.FC<Props> = ({
  project
}) => {
  const { isDarkModeActive } = useContext(ThemeContext);
  const {title, date, demoLink, repoLink, technologies, imgURL } = project;

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
        className='project-card__link'
        // style={{backgroundImage: `src(${require(imgURL)})`}}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod possimus dolorem asperiores harum veritatis distinctio laborum commodi eligendi autem.
      </div>
    </div>
  );
};
