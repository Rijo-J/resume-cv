import React, { useContext } from 'react';

import { GrGithub } from 'react-icons/gr';
import { HiOutlineExternalLink } from 'react-icons/hi';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';

export const ProjectCard = () => {
  const { isDarkModeActive } = useContext(ThemeContext);
  return (
    <div
      className={cn('project-card', {
        'project-card--dark': isDarkModeActive,
      })}>
      <div className='project-card__heading'>
        <h3 className='project-card__title'>Bose landing page</h3>
        <div className='project-card__year'>Nov 2022</div>
      </div>

      <a
        href='https://github.com/Rijo-J/layout_miami/tree/develop'
        target='_blank'
        rel='noreferrer'
        className='project-card__link'
      />

      <div className='project-card__info'>
        <div className="project-card__technologies">
          TECH
        </div>

        <div className="project-card__externals">
          <a
            href='https://github.com/Rijo-J/layout_miami/tree/develop'
            target='_blank'
            rel='noreferrer'
            className="project-card__external"
          >
            <GrGithub />
          </a>

          <a
            href='https://github.com/Rijo-J/layout_miami/tree/develop'
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
