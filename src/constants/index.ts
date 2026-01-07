import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  css,
  enval,
  jobit,
  tripguide,
  wianco,
  ciai,
  johndeere,
  kshema,
  accenture
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    title: "Programming Languages",
    icon: css,
    skills: [
      "Javascript", "Typescript", "HTML/CSS", "C#"
    ]
  },
  {
    title: "Frameworks / Libraries",
    icon: css,
    skills: [
      "React Native", "React JS", "Angular", ".NET", "Three.js", "Framer Motion"
    ]
  },
  {
    title: "Styling & UI",
    icon: css,
    skills: [
      "SASS", "LESS", "Bootstrap", "Tailwind CSS", "CSS Grid", "Flexbox",
    ]
  },
  {
    title: "Build Tools",
    icon: css,
    skills: [
      "Vite", "Webpack", "Babel", "NPM", "Yarn"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: css,
    skills: [
      "Git", "Vercel", "Agile/Scrum", "VS Code", "Andriod Studio"
    ]
  },
  {
    title: "Others",
    icon: css,
    skills: [
      "ESLint", "Prettier", "MongoDB Atlas", "MySQL", "RESTful APIs", "GraphQL"
    ]
  },
];

const experiences: TExperience[] = [
  {
    title: "React Native Developer",
    companyName: "Kshema General Insurance Limited, India",
    icon: kshema,
    iconBg: "#D2D8E4",
    date: "Nov 2024 - Present",
    points: [
      "Developed and maintained cross-platform mobile apps using React Native.",
      "Integrated RESTful APIs and SDKs for real-time claim status, policy updates, and notifications.",
      "Collaborated with designers to ensure UI matched Figma specs and achieved pixel-perfect accuracy.",
      "Optimized app performance and reduced initial load time by 30% through bundle size tuning and lazy loading.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Cyber Intellectus, India",
    icon: ciai,
    iconBg: "#EEEEF0",
    date: "Sep 2023 - Oct 2024",
    points: [
      "Delivered client projects using Angular, React.js, and Tailwind CSS onto GoDaddy.",
      "Developed and maintained backend APIs using PHP for form submissions, user management, and content modules.",
      "Collaborated with UI/UX designers to create responsive and user-friendly interfaces for client portals.",
      "Migrated selected Angular modules to React, enhancing code maintainability and performance.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "WIANCO OTT Robotics GmbH, Germany",
    icon: wianco,
    iconBg: "#000101",
    date: "Jun 2022 - Aug 2023",
    points: [
      "Developed enterprise-grade web applications using Angular and .NET, tailored for robotic automation workflows.",
      "Customized DevExpress UI components based on product owner requirements to deliver highly specific functionality.",
      "Integrated MySQL database for storing user configuration data.",
      "Collaborated with cross-functional team following Agile methodology to deliver iterative enhancements.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "John Deere, Germany",
    icon: johndeere,
    iconBg: "#FFFFFF",
    date: "May 2021 - May 2022",
    points: [
      "Developed internal web tools using React.js and integrated them with .NET Core APIs.",
      "Collaborated with global engineering teams on agricultural IoT solutions, handling data on the frontend.",
      "Maintained unit and integration test coverage above 85% using Jest and Cypress.",
      "Participated in user research sessions to iterate on UI features for farm management dashboards.",
    ],
  },
  {
    title: "Associate Software Engineer",
    companyName: "Accenture, India",
    icon: accenture,
    iconBg: "#FFFDFF",
    date: "May 2017 - May 2019",
    points: [
      "Assisted in building enterprise web applications using Angular and ASP.NET Web API.",
      "Wrote frontend modules and reusable services while following Agile development practices.",
      "Created automated scripts for regression testing using Selenium.",
      "Worked in client-facing role to gather and clarify requirements for portal UI components.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Enval",
    description:
      "ENVAL is a digital platform offering courses in Value Engineering, including training, consulting, and AI-powered tools for public, private, and academic sectors.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: enval,
    sourceCodeLink: "https://github.com/MounikaKolisetty/enval",
  },
  {
    name: "Coming Soon...",
    description:
      "This project is under development. Currently, I am focusing on my ongoing work-related projects, which are private. Stay tuned for updates and exciting features soon!",
    tags: [
      {
        name: "Stay",
        color: "blue-text-gradient",
      },
      {
        name: "tuned for",
        color: "green-text-gradient",
      },
      {
        name: "more updates",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Coming Soon...",
    description:
      "This project is under development. Currently, I am focusing on my ongoing work-related projects, which are private. Stay tuned for updates and exciting features soon!",
    tags: [
      {
        name: "Stay",
        color: "blue-text-gradient",
      },
      {
        name: "tuned for",
        color: "green-text-gradient",
      },
      {
        name: "more updates",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
