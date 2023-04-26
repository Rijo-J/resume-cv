import React, { useContext } from 'react';

import cn from 'classnames';
import { TechnologyCards } from '../../components/TechnologyCards';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
} from 'react-icons/si';
import { ThemeContext } from '../../ThemeContext';

const technologies = [
  [<SiHtml5 key={'html-tech'} />, 'HTML'],
  [<SiCss3 key={'css-tech'} />, 'CSS'],
  [<SiJavascript key={'js-tech'} />, 'JavaScript'],
  [<SiTypescript key={'ts-tech'} />, 'TypeScript'],
  [<SiReact key={'re-tech'} />, 'React'],
];

export const Introduction = () => {
  const { isDarkModeActive } = useContext(ThemeContext);

  return (
    <section className='introduction page__section'>
      <h1
        className={cn('introduction__title', {
          'introduction__title--dark': isDarkModeActive,
        })}>
        Hello I&rsquo;m{' '}
        <span className='introduction__title-lead'>João Rijo</span>
      </h1>

      <p className='introduction__responsabilities'>
        I&rsquo;m a Frontend web developer currently based in Lisbon-Portugal and I&rsquo;ve
        been working with technologies such as ReactJS, JS and TS, HTML5 / CSS3
        (SCSS) with BEM methodology, Bulma, Material UI, with Git/Github for
        version control. I also have knowledge in VueJS, Redux, NodeJS and basic
        contact with Jest for unit testing for React components. I&rsquo;m currently
        building responsive and user friendly web applications including from
        Figma designs.
      </p>

      <TechnologyCards technologies={technologies} />
    </section>
  );
};
