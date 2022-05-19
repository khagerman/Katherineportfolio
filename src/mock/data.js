import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Katherine Hagerman | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Katherine Hagerman', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Katherine Hagerman',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi! Nice to meet you! I'm a software engineer and former educator located in Wisconsin.`,
  paragraphTwo: `I’m excited to share my passion for problem-solving and love for life-long learning that I've developed in my five years as a teacher and my time as Springboard Software Engineering Career Track Fellow. I have a knack for helping others and taking on new challenges with humor and kindness.`,
  paragraphThree: '',
  resume: 'https://resume.creddle.io/embed/5mnebx4k93u', // if no resume, the button will not show up
  // https://resume.creddle.io/embed/5mnebx4k93u
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nostalgiamachine-1.png',
    title: 'The Nostalgia Machine',
    info: `The Nostalgia Machine is a full-stack, responsive, single-page application with a Node/Express API and a React frontend that allows users to travel through time by sharing and viewing anything that brings intense nostalgia. It's a community where you can reminisce with others and share powerful memories.`,
    info2: 'Built with: PostgresSQL, Node, Express, React, Bcrypt, Formik, Yup, CSS, and HTML',
    url: 'http://nostalgiamachine.surge.sh/',
    repo: 'https://github.com/khagerman/Nostalgia-Machine-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'naturearoundyou.png',
    title: 'Nature Around You',
    info: 'Nature Around You is an application that allows users to look up common animals and plants in a given location. Users can filter results by different categories such as, birds, amphibian, mammal, and more. Users can save animals they have seen or interest them to their nature journel.',
    info2:
      'Made with Python, Flask, Javascript, JQuery, Axios, Jinja, Postgres, SQL Alchemy, Flask-Bcrypt, WTForms, HTML, CSS,iNaturalist API, and Mapquest API',
    url: 'https://nature-around-you.herokuapp.com/',
    repo: 'https://github.com/khagerman/Nature-Around-You', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'joblyjobs-1.png',
    title: 'Jobly',
    info: 'Jobly is a React frontend and Node.js/Express/Postgres backend application. Users can register, login, apply for jobs, view companies, search, and edit their pofile.',
    info2: 'PostgresSQL, Node, Express, React, Javascript, Bcrypt,CSS, and HTML',
    url: 'https://jobly-jobs.surge.sh/',
    repo: 'https://github.com/khagerman/React-Jobly', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'hack.png',
    title: 'Hack or Snooze',
    info: 'Hacker News clone that allows users to create accounts, log in, create articles, mark articles as favorites, and more!',
    info2: 'HTML, CSS, jQuery, Javascript, Object Oriented Programming',
    url: 'https://khagerman.github.io/Hack-or-Snooze-API/',
    repo: 'https://github.com/khagerman/Hack-or-Snooze-API/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'katherinemhagerman@gmail.com',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
