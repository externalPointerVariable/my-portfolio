import Lawverse from "../assets/project/images/Lawverse.png";
import LawverseBanner from "../assets/project/banner/LawverseBanner.png";

import Buildbook from "../assets/project/images/Buildbook.png";
import BuildbookBanner from "../assets/project/banner/BuildbookBanner.png";

import Mundane from "../assets/project/images/Mundane.png";
import MundaneBanner from "../assets/project/banner/MundaneBanner.png";

import Mlbquiz from "../assets/project/images/Mlbquiz.jpg";
import MlbquizBanner from "../assets/project/banner/MlbquizBanner.png";

import Speedy from "../assets/project/images/Speedy.webp";
import SpeedyBanner from "../assets/project/banner/SpeedyBanner.webp";

import PortfolioBackend from "../assets/project/images/PortfolioBackend.png";
import PortfolioBackendBanner from "../assets/project/banner/PortfolioBackendBanner.png";

const categories = [
  "All",
  "Blog",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "AI & Machine Learning",
];

const projects = [
  {
    name: "Portfolio Backend",
    category: "Full Stack Development",
    image: PortfolioBackend,
    banner: PortfolioBackendBanner,
    description:
      "This is the backend of my portfolio website, which is built using Django , Css, and Javascript. It leverage the power of django admin panel to manage all the details from the deployment itself, no need to redeploy continuously after every change. 🚅",
    techStack: ["Django", "Python", "CSS", "Javascript", "Sqlite"],
    type: "Personal",
    githubLink: "https://github.com/externalPointerVariable/Portfolio-With-Backend",
    liveLink: "https://portfolio-with-backend-cle7.onrender.com/",
  },
  {
    name: "Lawverse",
    category: "AI & Machine Learning",
    image: Lawverse,
    banner: LawverseBanner,
    description:
      "This is a RAG application that is trained over constitution data and is capable of answering general question asked from the constitution point of view📔📚",
    techStack: ["Streamlit", "Python", "LLAMA-Index"],
    type: "Personal",
    githubLink: "https://github.com/externalPointerVariable/Knowledge-AI-Agent",
    liveLink: "https://lawverse.streamlit.app/",
  },
  {
    name: "BuildBook",
    category: "Frontend Development",
    image: Buildbook,
    banner: BuildbookBanner,
    description:
      "A ReactJs based project that showcases a list of standard projects ⚛️",
    techStack: ["React.js", "Tailwind CSS", "Javascript"],
    type: "Personal",
    githubLink: "https://github.com/externalPointerVariable/BuildBook",
    liveLink: "https://build-book-steel.vercel.app/",
  },
  {
    name: "Mundane",
    category: "Frontend Development",
    image: Mundane,
    banner: MundaneBanner,
    description:
      "This repository is a collection of some basic JavaScript projects that provides basic functionalities to the user",
    techStack: ["Node.js", "Bootstrap", "Javascript"],
    type: "Personal",
    githubLink: "https://github.com/externalPointerVariable/Mundane.io",
    liveLink: "https://mundane-io.vercel.app/",
  },
  {
    name: "MLB Quiz",
    category: "Full Stack Development",
    image: Mlbquiz,
    banner: MlbquizBanner,
    description:
      "MLP Quiz ia a web applicatrion dedicated to all the baseball fans. Who wants to test their valor int the field of baseball surrounding knowledge 🤯.",
    techStack: [
      "React.js",
      "Python",
      "Javascript",
      "Django Rest Framework",
      "GCP",
    ],
    type: "Collaboration",
    githubLink: "https://github.com/externalPointerVariable/Mundane.io",
    liveLink: "https://mlb-frontend-nine.vercel.app/",
  },
  {
    name: "Speedy",
    category: "Backend Development",
    image: Speedy,
    banner: SpeedyBanner,
    description:
      "Speedy is a Discord bot designed to track and analyze users' typing speed in real-time. Mention the bot, and it will calculate your Words Per Minute (WPM) and display the results instantly! ⚡⌨️. Visit the github repository for more information",
    techStack: ["Node.js", "Discord.js", "Express", "JavaScript", "Render"],
    type: "Personal Project",
    githubLink: "https://github.com/externalPointerVariable/DiscordWPMBot",
    liveLink: "https://discord.gg/Rt28h4Hb",
  },
];

export { categories, projects };
