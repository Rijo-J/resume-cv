import React, { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';
import { ProjectCard } from '../../components/ProjectCard';
import { projectsContent } from '../../content/Content';

export const Projects = () => {
  const { isDarkModeActive } = useContext(ThemeContext);

  return (
    <section className={cn('projects page__section', {'projects--dark': isDarkModeActive})}>
      <h2 className='projects__title'>
        My recent <span className='projects__title-lead'>Projects</span>
      </h2>

      <div className="projects__list">
        {projectsContent.map(project => {
          const key = `${project.id}-project`;
          return (

            <ProjectCard key={key} project={project}/>
          );})}
      </div>
    </section>
  );
};
