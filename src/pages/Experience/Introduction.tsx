import React, { useContext } from 'react';

import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact } from 'react-icons/si';
import { ThemeContext } from '../../ThemeContext';
import cn from 'classnames';

export const Introduction = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <section className="introduction page__section">
      <h1 className={cn('introduction__title', {'introduction__title--dark': isDarkMode})}>Hello I&rsquo;m <span className='introduction__title-lead'>Jon Doe</span></h1>

      <p className="introduction__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam fugiat facilis, minima animi qui voluptas ipsum hic possimus neque soluta molestiae nisi veritatis quos nihil et molestias esse cum earum. Omnis ipsa id aperiam natus culpa. Iusto commodi cumque repellendus eaque ratione libero tenetur perspiciatis!</p>

      {/* ? remove */}
      <div className="introduction__technologies">
        <div className={cn('technology', {'technology--dark': isDarkMode})}>
          <SiHtml5 /><span>HTML</span>
        </div>
        <div className={cn('technology', {'technology--dark': isDarkMode})}>
          <SiCss3 /><span>CSS</span>
        </div>
        <div className={cn('technology', {'technology--dark': isDarkMode})}>
          <SiJavascript /><span>JavaScript</span>
        </div>
        <div className={cn('technology', {'technology--dark': isDarkMode})}>
          <SiTypescript /><span>TypeScript</span>
        </div>
        <div className={cn('technology', {'technology--dark': isDarkMode})}>
          <SiReact /><span>React</span>
        </div>
      </div>
    </section>
  );};