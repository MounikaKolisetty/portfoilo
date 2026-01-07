type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    sourceCodeLink: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    toolstechnologies: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Lakshmi Mounika Kolisetty",
    fullName: "Lakshmi Mounika Kolisetty",
    email: "lakshmimounikak871@gmail.com",
  },
  hero: {
    name: "Lakshmi Mounika Kolisetty",
    p: ["I am a Front-end / Full-Stack Developer.", "Let's turn your ideas into reality."],
    sourceCodeLink: ["https://www.instagram.com/mounika.kolisetty/", "https://github.com/MounikaKolisetty", "https://www.linkedin.com/in/lakshmi-mounika-kolisetty-7b0b11a5/"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview",
      content: `I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Angular, React Native and
      .Net. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    toolstechnologies: {
      p: "Skills",
      h2: "Tools and Technologies",
      content: "I've worked with a range of technologies in the web development world, from frontend to backend and everything in between"
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience",
    },
    works: {
      p: "My work",
      h2: "Projects",
      content: `Following projects highlight my technical skills and real-world experience. Each project includes a brief description along with links to source code and live demos. They demonstrate my ability to tackle complex problems, work across various technologies, and manage end-to-end development effectively.`,
    },
  },
};
