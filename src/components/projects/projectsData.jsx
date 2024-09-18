const projectsData = [
  {
    id: 1,
    imgSrc: "./my-portfolio.png",
    altText: "My Portfolio",
    tag: "My Portfolio",
    title: "My Portfolio",
    description:
      "I created a portfolio project that showcases information about myself, where I explored CI/CD hosting, managing domains, and hosting smaller projects on subdomains. Through this project, I honed my React skills by implementing lightbox imaging, animations, and clean design, offering a well-rounded view of my abilities and what I can bring to potential employers.",
    technologies: [
      { name: "React", icon: "./react.png" },
      { name: "JavaScript", icon: "./javascript.png" },
      { name: "HTML", icon: "./html.png" },
      { name: "SASS", icon: "./sass.png" },
      { name: "Figma", icon: "./figma.png" },
      { name: "Git", icon: "./git.png" },
    ],
    website: "https://www.arronreed.com",
    github: "https://github.com/Arron-Reed/react-portfolio",
  },
  {
    id: 2,
    imgSrc: "./user-profile.png",
    altText: "User Profile",
    tag: "User Profile",
    title: "User Profile Case Study",
    description:
      "I designed a user profile for Flaivy's website as part of my examination project. I researched competitors, interviewed users to identify key features, and implemented a full-stack solution with seamless front-end and back-end integration. The project used Bootstrap, CSS, HTML, React, Next.js, and TypeScript, with a focus on UX/UI design.",
    technologies: [
      { name: "NextJS", icon: "./next.png" },
      { name: "React", icon: "./react.png" },
      { name: "TypeScript", icon: "./typescript.png" },
      { name: "PostgreSQL", icon: "./postgres.png" },
      { name: "Bootstrap", icon: "./bootstrap.png" },
      { name: "Figma", icon: "./figma.png" },
    ],
  },
  {
    id: 3,
    imgSrc: "./weather-app.png",
    altText: "Weather App",
    tag: "Weather App",
    title: "React Weather App",
    description:
      "For my first JavaScript and React project, I built a dynamic weather app that leveraged an external Weather API to show forecasts for any location, including the user’s current one. The app featured seamless API integration, utilized Zustand for state management, and showcased my CSS skills to create an engaging user experience.",
    technologies: [
      { name: "React", icon: "./react.png" },
      { name: "JavaScript", icon: "./javascript.png" },
      { name: "HTML", icon: "./html.png" },
      { name: "Zustand", icon: "./zustand.png" },
      { name: "CSS", icon: "./css.png" },
    ],
    website: "https://www.arronreed.com/weather-app",
    github: "https://github.com/Arron-Reed/u07-Weather-App-Arron-Reed",
  },
  {
    id: 4,
    imgSrc: "./CRM-Flaivy.png",
    altText: "Flaivy CRM System",
    tag: "CRM",
    title: "CRM FullStack Project",
    description:
      "I played a key role in a small team building a CRM system from scratch into Flaivy's extensive codebase. We conducted deep UX/UI research and worked Agile with sprints, developing an activity planner with a dynamic calendar that tracked customer tasks, upcoming activities, purchase reports, and contact history. I gained experience integrating Microservices using RabbitMQ, Moleculer, TMux, and technologies like React, Bootstrap, Next.js, TypeScript, PostgreSQL, and Node.js.",
    technologies: [
      { name: "React", icon: "./react.png" },
      { name: "NextJS", icon: "./next.png" },
      { name: "TypeScript", icon: "./typescript.png" },
      { name: "PostgreSQL", icon: "./postgres.png" },
      { name: "tmux", icon: "./tmux.png" },
      { name: "RabbitMQ", icon: "./rabbitMQ.png" },
      { name: "Bootstrap", icon: "./bootstrap.png" },
    ],
  },
  /*
  {
    id: 5,
    imgSrc: "./user-profile.png",
    altText: "FullStack Skifield App",
    tag: "FullStack Skifield App",
    title: "FullStack Skifield App",
    description:
      "I built a FullStack app that helped users find the nearest ski field and access live data like lift opening times and snow conditions. I developed a web scraper to collect data from multiple sources, updating a MongoDB database for each ski field. Using React, TypeScript, SASS, and Express, I created a sleek website where users could log in, save favorite ski fields, and track their preferred locations.",
    technologies: [
      { name: "React", icon: "./react.png" },
      { name: "Express", icon: "./node-express.png" },
      { name: "TypeScript", icon: "./typescript.png" },
      { name: "MongoDB", icon: "./mongoDb.png" },
      { name: "Git", icon: "./git.png" },
      { name: "SASS", icon: "./sass.png" },
    ],
    website: "https://www.arronreed.com/weather-app",
    github: "https://github.com/Arron-Reed/ARSE-Alpine-Resort-Search-Engine",
  },
  
  {
    id: 6,
    imgSrc: "./user-profile.png",
    altText: "Recipe App",
    tag: "Recipe App",
    title: "FullStack Recipe App",
    description:
      "I designed and built a recipe app that integrated with the Spoonacular API, allowing users to search for recipes based on specific criteria, including ingredients they had on hand. The app featured sorting and filtering options to personalize recipe results. This was my first project using Angular and TypeScript, and I connected it to a PHP backend (Laravel) for user authentication and saving favorite recipes using a mySQL database.",
    technologies: [
      { name: "Angular", icon: "./angular.png" },
      { name: "JavaScript", icon: "./javascript.png" },
      { name: "Laravel", icon: "./laravel.png" },
      { name: "PHP", icon: "./php.png" },
      { name: "mySql", icon: "./mySql.png" },
      { name: "CSS", icon: "./css.png" },
    ],
    website: "https://www.arronreed.com/recipe-app",
    github: "https://github.com/Arron-Reed/u07-Weather-App-Arron-Reed",
  }, */
];

export default projectsData;
