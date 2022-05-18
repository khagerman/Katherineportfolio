import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi! Nice to meet you! I'm a software engineer and former teacher located in Wisconsin.`,
  paragraphTwo: `I'm a software engineer and former ed`,
  paragraphThree: '',
  resume: 'https://resume.creddle.io/embed/5mnebx4k93u', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nostalgiamachine.png',
    title: 'The Nostalgia Machine',
    info: `The Nostalgia Machine is a full-stack, responsive, single-page application with a Node/Express API and a React frontend that allows users to travel through time by sharing and viewing anything that brings intense nostalgia. It's a community where you can reminisce with others and share powerful memories.`,
    info2: 'Built with: PostgresSQL, Node, Express, React, Bcrypt, Formik, Yup, CSS',
    url: 'http://nostalgiamachine.surge.sh/',
    repo: 'https://github.com/khagerman/Nostalgia-Machine-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/katherinehagerman/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/khagerman',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
