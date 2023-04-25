// ?remove // Move this to actual files?
import React from 'react';
import { BsBuildings, BsCodeSlash } from 'react-icons/bs';
import { GiSuspensionBridge } from 'react-icons/gi';

export const navLinks = [
  {
    id:0,
    text:'Home',
    href: '/',
  },
  {
    id:1,
    text:'Curriculum',
    href: '/',
  },
  {
    id:2,
    text:'Projects',
    href: '/',
  },
];

export const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
];


export const myExperience = [
  {
    id: 0,
    icon: <BsCodeSlash />,
    position: 'Frontend Web Developer',
    company: 'Practical experience',
    slug: 'front-practical',
    shortDescription: 'Practice in real world projects',
    link: '',
    linkDescription: '',
    duration: 'Nov 2022',
    ongoin: true,
    responsibilities: [
      'Working with technologies such as ReactJS, JS and TS, HTML5 / CSS3 (SCSS) with BEM methodology, Bulma, Material UI',
      'Using Git/Github for version control',
      'Knowledge in VueJS, Redux, NodeJS and basic contact with Jest for unit testing for React components',
    ],
  },
  {
    id: 1,
    icon: <BsBuildings />,
    position: 'Project Designer Engineer',
    company: 'DLV - Projectos e Obras Lda.',
    slug: 'engineer-dlv',
    shortDescription: 'Project Engineer at ',
    link: 'https://dlv.pt/',
    linkDescription: '@DLV',
    duration: 'Nov 2022',
    ongoin: false,
    responsibilities: [
      'Integration of UI tools to improve team workflow.',
      'Field monitoring and direct contact with clients.',
      'Reports production for structural projects.',
      'Teams technical support.',
      'Production of building projects Structural modeling.',
      'Produced and delivered over +200 building and construction projects.',
      'Developed an internal UI tool with VBA improving the company’s team workflow',
    ],
  },
  {
    id: 2,
    icon: <GiSuspensionBridge />,
    position: 'Civil Engineer',
    company: 'Practical experience',
    slug: 'engineer-vfl',
    shortDescription: 'Civil Engineer at DLV',
    link: '',
    linkDescription: '',
    duration: 'Nov 2022',
    ongoin: false,
    responsibilities: [
      'Preparation and production of drawings and structural detailing in CAD.',
      'Analysis with the customer and architecture responsible for constructive details.',
      'Structural modeling in Robot Structural Analysis.',
      'Production of building structural projects.'
    ],
  },
];