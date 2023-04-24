import React, { useContext } from 'react';

import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';
import {TechnologyCards}  from '../../components/TechnologyCards';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact } from 'react-icons/si';


const technologies = [
  [<SiHtml5 key={'html-tech'}/>, 'HTML'],
  [<SiCss3 key={'css-tech'}/>, 'CSS'],
  [<SiJavascript key={'js-tech'}/>, 'JavaScript'],
  [<SiTypescript key={'ts-tech'}/>, 'TypeScript'],
  [<SiReact key={'re-tech'}/>, 'React'],
];

export const Introduction = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className="introduction page__section">
      <h1 className={cn('introduction__title', {'introduction__title--dark': isDarkMode})}>Hello I&rsquo;m <span className='introduction__title-lead'>Jon Doe</span></h1>

      <p className="introduction__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugiat facilis, minima animi qui voluptas ipsum hic possimus neque soluta molestiae nisi veritatis quos nihil et molestias esse cum earum. Omnis ipsa id aperiam natus culpa. Iusto commodi cumque repellendus eaque ratione libero tenetur perspiciatis!</p>

      <TechnologyCards technologies={technologies} />
    </section>
  );};