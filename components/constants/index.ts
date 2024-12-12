import { Briefcase, Code2, GraduationCap, User } from "lucide-react";
import projectOne from "@/public/images/projectOne.png";
import projectTwo from "@/public/images/projectTwo.png";
import projectThree from "@/public/images/projectThree.png";

export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Services", href: "#services" },
  { title: "Resume", href: "#resume" },
  { title: "Work", href: "#work" },
  { title: "Contact", href: "#contact" },
];

export const statusData = [
  { num: 12, title: "Years Of Experience" },
  { num: 25, title: "Projects Completed" },
  { num: 8, title: "Technologies Mastered" },
  { num: 500, title: "Code Commits" },
];

export const servicesData = [
  {
    _id: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sequi distinctio minus esse consequatur fugit accusamus velit iste quisquam aut.",
    href: "https://www.youtube.com/",
  },
  {
    _id: "02",
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sequi distinctio minus esse consequatur fugit accusamus velit iste quisquam aut.",
    href: "https://www.youtube.com/",
  },
  {
    _id: "03",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sequi distinctio minus esse consequatur fugit accusamus velit iste quisquam aut.",
    href: "https://www.youtube.com/",
  },
  {
    _id: "04",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sequi distinctio minus esse consequatur fugit accusamus velit iste quisquam aut.",
    href: "https://www.youtube.com/",
  },
];

export const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];
export const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2021 - Present",
        description:
          "Led the development of multiple React-based web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
        highlights: ["React", "Next.js", "TypeScript", "Team Leadership"],
      },
      {
        role: "Full Stack Developer",
        company: "Digital Innovations Ltd",
        period: "2018 - 2021",
        description:
          "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
        highlights: ["Node.js", "React", "MongoDB", "AWS"],
      },
    ],
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Master of Computer Science",
        institution: "Tech University",
        period: "2016 - 2018",
        description:
          "Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.",
        achievements: ["4.0 GPA", "Research Publication", "Dean's List"],
      },
      {
        degree: "Bachelor of Computer Science",
        institution: "State University",
        period: "2012 - 2016",
        description:
          "Foundation in computer science principles, data structures, and algorithms.",
        achievements: ["Academic Excellence Award", "Programming Club Lead"],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
      },
      {
        name: "Tools & Others",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, distinctio. Quas fugiat nesciunt ipsum. Voluptatem inventore iste labore, similique quod laudantium rerum dolor, impedit voluptas distinctio praesentium quibusdam veniam tempore. Laudantium repellendus possimus adipisci maxime.",
        skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
      },
    ],
  },
  about: {
    title: "About Me",
    bio: "Passionate software developer with over 5 years of experience in building modern web applications. Committed to writing clean, maintainable code and staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "Tech Blogging",
      "UI/UX Design",
      "Machine Learning",
    ],
    languages: ["English (Native)", "Spanish (Intermediate)", "German (Basic)"],
  },
};

export const projects = [
  {
    id: "01",
    title: "E-commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce platform built with Next.js, featuring a responsive design, user authentication, and integration with a headless CMS for easy content management.",
    stack: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
    image: projectOne,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
  },
  {
    id: "02",
    title: "Task Management App",
    category: "Frontend",
    description:
      "A sleek task management application that helps users organize their daily activities, set priorities, and track progress. Built with React and Redux for state management.",
    stack: ["React", "Redux", "Styled Components", "Firebase"],
    image: projectTwo,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
  },
  {
    id: "03",
    title: "Weather Forecast Dashboard",
    category: "Frontend",
    description:
      "An interactive weather forecast dashboard that provides real-time weather information and 5-day forecasts for multiple locations. Utilizes a third-party weather API.",
    stack: ["Vue.js", "Vuex", "Chart.js", "OpenWeatherMap API"],
    image: projectThree,
    liveUrl: "https://ecommerceapp.reactbd.com/",
    githubUrl: "https://github.com/noorjsdivs/",
  },
];
