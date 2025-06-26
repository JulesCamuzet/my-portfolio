import { Project, Skills } from './types'

const projects: Project[] = [
  {
    id: 'le-comptoir-des-vins',
    name: 'Le Comptoir des Vins',
    description:
      'Website for a French wine cellar, built from scratch with a custom WordPress theme.',
    viewLink: 'https://lecomptoirdesvins-toulouse.com/',
    pictureUrl: `${process.env.API_URL}/images/le-comptoir-des-vins.png`,
    skills: [Skills.WORDPRESS, Skills.PHP, Skills.JAVASCRIPT],
  },
  {
    id: 'cabinet-baroukh',
    name: 'Baroukh Law Firm',
    description:
      'Showcase website for a Paris-based law firm, developed with a fully custom WordPress theme.',
    viewLink: 'https://baroukh-avocat.fr/',
    pictureUrl: `${process.env.API_URL}/images/baroukh.png`,
    skills: [Skills.WORDPRESS, Skills.PHP, Skills.JAVASCRIPT],
  },
  {
    id: 'bier-shop',
    name: 'Bier Shop',
    description:
      'School project simulating an online beer shop, using React for the frontend and Laravel for the backend.',
    githubLink: 'https://github.com/JulesCamuzet/CESI-Bier-FRONT',
    pictureUrl: `${process.env.API_URL}/images/bier-shop.png`,
    skills: [Skills.REACT, Skills.LARAVEL, Skills.PHP, Skills.TYPESCRIPT],
  },
  {
    id: 'pong',
    name: 'Pong',
    description: 'A simple Pong game coded in C.',
    githubLink: 'https://github.com/JulesCamuzet/pong',
    pictureUrl: `${process.env.API_URL}/images/pong.png`,
    skills: [Skills.C],
  },
  {
    id: '3D-engine',
    name: '3D Engine',
    description:
      'A basic 3D engine built from scratch in C using the SDL library.',
    githubLink: 'https://github.com/JulesCamuzet/3D_engine',
    pictureUrl: `${process.env.API_URL}/images/3D_engine.png`,
    skills: [Skills.C],
  },
  {
    id: 'django-restaurant',
    name: 'Booking Restaurant App',
    description:
      'A Django-based web application for managing restaurant reservations, email notifications, and more.',
    githubLink: 'https://github.com/juleau14/DjangoApp-Restaurant',
    pictureUrl: `${process.env.API_URL}/images/restaurant.png`,
    skills: [Skills.PYTHON, Skills.DJANGO],
  },
  {
    id: 'airpods',
    name: 'AirPods Shop',
    description:
      'A product landing page for a fictional headphone store, built with React.',
    githubLink: 'https://github.com/JulesCamuzet/airpods-shop',
    pictureUrl: `${process.env.API_URL}/images/airpods.png`,
    skills: [Skills.REACT, Skills.JAVASCRIPT],
  },
  {
    id: 'portfolio',
    name: 'This Website!',
    description:
      'The portfolio you are currently viewing. Built with React and TypeScript.',
    githubLink: 'https://github.com/JulesCamuzet/my-portfolio',
    pictureUrl: `${process.env.API_URL}/images/portfolio.png`,
    skills: [Skills.REACT, Skills.TYPESCRIPT],
  },
]

export default projects
