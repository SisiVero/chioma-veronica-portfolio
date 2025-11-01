import { ProjectType } from "../types/types";
import infinion from "../assets/png/infinion.png";
import dashboard from "../assets/png/dashboard.png";
import tax from "../assets/png/tax.png";
import quizzical from "../assets/png/quizzical.png";
import password from "../assets/png/passwordgenerator.png";
import waether from "../assets/png/weatherapp.png";
import color from "../assets/png/colorscheme.png";
// import endorsement from "../assets/png/endorsementapp.png";
import restaurant from "../assets/png/restaurantapp.png";
import alphaPins from "../assets/png/alphaPins.png";
// import cart from "../assets/png/cart.png";
import forge from "../assets/png/forge.png";
import portfolio from "../assets/png/portfolio.png";

export const allProjects: ProjectType[] = [
  
  {
    id: 11,
    name: "Tax Calculator(work in progress)",
    description:
      "This a tax calculator designed to help Nigerians calculate the total amount of tax expected of each citizen annualy. It also conatians guide, vides and quizes section to ascertain how much knowledge a person has about the Nigerian tax system.",
    // githubLink: "https://github.com/SisiVero/Scoreboard",
    // liveLink: "https://codepen.io/SisiVero/pen/oNMGoLw",
    image: tax,
    tags: ["Next JS", "TypeScript","Tailwind CSS", "Framer motion"],
  },
  
  {
    id: 12,
    name: "Alpha Pins",
    description:
      "A web app where users can boost their socila media followers, likes and views",
    // githubLink: "https://github.com/SisiVero/firebase-app",
    liveLink: "https://alphapins-frontend.vercel.app/app",
    image: alphaPins,
    tags: ["React", "TypeScript","Tailwind CSS", "Radix UI", "RTK"],
  },
  {
    id: 9,
    name: "Dashboard",
    description:
      "A random dashboard",
    githubLink: "https://github.com/SisiVero/assessment",
    liveLink: "https://assessment-zeta-three.vercel.app/home",
    image: dashboard,
    tags: ["React", "TypeScript","Vitest", "RTK", "Tailwind CSS", "Radix UI"],
  },
  {
    id: 1,
    name: "Infinion Website",
    description:
      "The official website of Infinion rebuilt with a teammate, replacing a slower Next.js version with a faster, cleaner React.js implementation focused on simplicity and optimization",
    // githubLink: "https://www.infinion.co",
    liveLink: "https://www.infinion.co",
    image: infinion,
    tags: ["React", "TypeScript","Tailwind CSS"],
  },
    {
    id: 2,
    name: "Portfolio",
    description:
      "This a portfolio website showcasing some of my projects",
    githubLink: "https://github.com/SisiVero/firebase-app",
    liveLink: "https://veronica-portfolio-kappa.vercel.app/",
    image: portfolio,
    tags: ["React", "TypeScript","Tailwind CSS", "Jest"],
  },
  {
    id: 3,
    name: "Print Forge",
    description:
      "A simple web application built with NextJs, tailwind and Typescript.",
    githubLink: "https://github.com/SisiVero/print-forge",
    liveLink: "https://print-forge-zeta.vercel.app/",
    image: forge,
    tags: ["Next Js", "TypeScript","Tailwind CSS"],
  },
  // {
  //   id: 3,
  //   name: "Learning Journal",
  //   description:
  //     "A solo project assigned by scrimba on frontend career path. Built with HTML and CSS. It is responsive",
  //   githubLink: "https://github.com/SisiVero/learning-journal",
  //   liveLink: "https://visionary-semolina-39567a.netlify.app/",
  //   image: learning,
  //   tags: ["React", "TypeScript","Tailwind CSS"],
  // },
  // {
  //   id: 4,
  //   name: "Wig Dealers",
  //   description:
  //     "Built from scratch, with ReactJs and CSS. An online market place for just wigs. Users can create account to be able to add items to cart. Admins have higher permissions to add new wigs to the home page. There is a separate sign up page for admin, admin can navigate to dashboard to perform some actions.Responsive",
  //   githubLink: "https://github.com/SisiVero/wig-e-commerce",
  //   liveLink: "https://wig-e-commerce.vercel.app/",
  //   image: wig,
  //   tags: ["React", "TypeScript","Tailwind CSS"],
  // },
  {
    id: 4,
    name: "Quizzical",
    description:
      "This is a quizzical web app built with React.js and CSS. It was built as a part of Scrimba's Frontend Developer Career Path. It is a responsive site that can be viewed on Desktop and Mobile devices. It consists of two pages: Welcome page and Quiz page",
    githubLink: "https://github.com/SisiVero/quizzical-app",
    liveLink: "https://cheery-parfait-37ad05.netlify.app/",
    image: quizzical,
    tags: ["React", "TypeScript","Tailwind CSS"],
  },
  {
    id: 5,
    name: "Password Generator",
    description:
      "This is a Password Generator Web App. It is built using vanilla CSS, Javascript and HTML. It was built as a part of Scrimba's Frontend Developer Career Path.",
    githubLink: "https://github.com/SisiVero/password-generator",
    liveLink: "https://mellifluous-lokum-877eb8.netlify.app/",
    image: password,
    tags: ["React", "TypeScript","Tailwind CSS"],
  },
  {
    id: 6,
    name: "Weather App",
    description:
      "A weather app built with data fetched from openmapweather api. Built with ReactJs",
    githubLink: "https://github.com/SisiVero/weather-app",
    liveLink: "https://weather-app-sisivero.vercel.app/",
    image: waether,
    tags: ["React", "TypeScript","Tailwind CSS"],
  },
  {
    id: 7,
    name: "Color Scheme Generator",
    description:
      "This is a sample of a Color Scheme Generator. It is built using vanilla CSS, Javascript and HTML. It was built as a part of Scrimba's Frontend Developer Career Path",
    githubLink: "https://github.com/SisiVero/color-scheme-generator",
    liveLink: "https://profound-brioche-edeccd.netlify.app/",
    image: color,
    tags: ["React", "TypeScript","Tailwind CSS"],
  },
  {
    id: 8,
    name: "Mobile Restaurant",
    description:
      "This a mobile restauarnt that displays the menu and price, and totals your order when you are done ordering. It is built using vanilla CSS, Javascript and HTML. It was built as a part of Scrimba's Frontend Developer Career Path.",
    githubLink: "https://github.com/SisiVero/Mobile-restaurant",
    liveLink: "https://bright-pavlova-d3f7f6.netlify.app/",
    image: restaurant,
    tags: ["React", "TypeScript","Tailwind CSS"],
  }
  

];

// const allProjects = [
//   {
//     title: "E-commerce Platform",
//     description:
//       "A full-featured e-commerce platform built with Next.js, featuring server components, optimistic updates, and a headless CMS integration.",
//     image:
//       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Dashboard UI Kit",
//     description:
//       "A comprehensive dashboard UI kit with 50+ components, dark mode support, and multiple theme options. Built with React and TypeScript.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "TypeScript", "Styled Components", "Storybook"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Real-time Collaboration Tool",
//     description:
//       "A collaborative document editing tool with real-time updates, commenting, and version history. Built with React and WebSockets.",
//     image:
//       "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Socket.io", "Redux", "Node.js"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "AI-Powered Chat Application",
//     description:
//       "An intelligent chat application with real-time translation and sentiment analysis.",
//     image:
//       "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "OpenAI", "WebSocket", "Node.js"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Project Management Tool",
//     description:
//       "A comprehensive project management solution with task tracking and team collaboration features.",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Redux", "Express", "MongoDB"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Social Media Analytics Dashboard",
//     description:
//       "A powerful analytics dashboard for tracking social media performance and engagement.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "D3.js", "GraphQL", "Material-UI"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Weather Forecast App",
//     description:
//       "A beautiful weather application with detailed forecasts and interactive maps.",
//     image:
//       "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Weather API", "Leaflet", "TailwindCSS"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Recipe Sharing Platform",
//     description:
//       "A community-driven recipe sharing platform with search and filtering capabilities.",
//     image:
//       "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Firebase", "Algolia", "Styled-components"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Fitness Tracking App",
//     description:
//       "A comprehensive fitness tracking application with workout plans and progress monitoring.",
//     image:
//       "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React Native", "Redux", "GraphQL", "TypeScript"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Music Streaming Service",
//     description:
//       "A modern music streaming platform with playlist management and social features.",
//     image:
//       "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Node.js", "MongoDB", "Web Audio API"],
//     liveLink: "#",
//     githubLink: "#",
//   },
//   {
//     title: "Educational Platform",
//     description:
//       "An interactive learning platform with course management and progress tracking.",
//     image:
//       "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//     tags: ["React", "Redux", "Express", "PostgreSQL"],
//     liveLink: "#",
//     githubLink: "#",
//   },
// ];
