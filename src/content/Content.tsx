
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
    href: '/experience',
  },
  {
    id:2,
    text:'Projects',
    href: '/projects',
  },
];

export const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
];


export const experience = [
  {
    id: 0,
    icon: <BsCodeSlash />,
    position: 'Frontend Web Developer',
    company: 'Practical experience',
    slug: 'front-practical',
    shortDescription: 'Practice in real world projects',
    link: '',
    linkDescription: '',
    startDate: 'Mar. 12, 2022',
    endDate: null,
    responsibilities: [
      'Working with technologies such as ReactJS, JS and TS, HTML5 / CSS3 (SCSS) with BEM methodology, Bulma, Material UI.',
      'Using Git/Github for version control.',
      'Knowledge in VueJS, Redux, NodeJS and basic contact with Jest for unit testing for React components.',
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
    startDate: 'Jan. 27, 2019',
    endDate: 'Jan. 10, 2022',
    responsibilities: [
      'Integration of UI tools to improve team workflow and team\'s technical support.',
      'Field monitoring and direct contact with clients.',
      'Delivered over +200 building and construction projects.',
      'Developed an internal UI tool with VBA improving the company’s team workflow',
    ],
  },
  {
    id: 2,
    icon: <GiSuspensionBridge />,
    position: 'Civil Engineer',
    company: 'VFL - Engenharia Lda.',
    slug: 'engineer-vfl',
    shortDescription: 'Civil Engineer at VFL',
    link: '',
    linkDescription: '',
    startDate: 'Dec. 19, 2015',
    endDate: 'Nov. 25, 2018',
    responsibilities: [
      'Preparation and production of drawings and structural detailing in CAD.',
      'Analysis with the customer and architecture responsible for constructive details.',
      'Structural modeling in Robot Structural Analysis.',
      'Production of building structural projects.'
    ],
  },
];

export const projectsContent = [
  {
    id:0,
    title:'Bose landing page',
    date: 'Dez 2022',
    demoLink: 'https://rijo-j.github.io/layout_miami/',
    repoLink: 'https://github.com/Rijo-J/layout_miami/tree/develop',
    imgURL: '../bose.png',
    technologies: [
      'HTML',
      'SCSS',
      'JavaScript',
      'BEM',
    ],
  },
  {
    id: 1,
    title:'To-do list web app',
    date: 'Feb 2023',
    demoLink: 'https://rijo-j.github.io/react_todo-app-with-api/',
    repoLink: 'https://github.com/Rijo-J/react_todo-app-with-api/tree/develop',
    imgURL: 'images/todo-app.png',
    technologies: [
      'TypeScript',
      'React',
      'HTML',
      'SCSS',
      'Bulma',
      'REST API',
    ],
  },
  {
    id: 2,
    title:'Users Table UI mockup',
    date: 'Feb 2023',
    demoLink: 'https://rijo-j.github.io/react_people-table-advanced/#/people',
    repoLink: 'https://github.com/Rijo-J/react_people-table-advanced/tree/develop',
    imgURL: '../../../src/images/people-table.png',
    technologies: [
      'TypeScript',
      'React',
      'HTML',
      'SCSS',
      'Bulma',
      'REST API',
    ],
  },
];