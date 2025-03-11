import Lawverse from '../assets/project/images/Lawverse.png';
import LawverseBanner from '../assets/project/banner/LawverseBanner.png';

import Buildbook from '../assets/project/images/Buildbook.png';
import BuildbookBanner from '../assets/project/banner/BuildbookBanner.png';

import Mundane from '../assets/project/images/Mundane.png';
import MundaneBanner from '../assets/project/banner/MundaneBanner.png';

import Mlbquiz from '../assets/project/images/Mlbquiz.jpg';
import MlbquizBanner from '../assets/project/banner/MlbquizBanner.png';

const categories = [
  "All",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "AI & Machine Learning",
];

const projects = [
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
    description: "A ReactJs based project that showcases a list of standard projects ⚛️",
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
    description: "This repository is a collection of some basic JavaScript projects that provides basic functionalities to the user",
    techStack: ["Nodek.js", "Bootstrap", "Javascript"],
    type: "Personal",
    githubLink: "https://github.com/externalPointerVariable/Mundane.io",
    liveLink: "https://mundane-io.vercel.app/",
  },
  {
    name: "MLB Quiz",
    category: "Full Stack Development",
    image: Mlbquiz,
    banner: MlbquizBanner,
    description: "MLP Quiz ia a web applicatrion dedicated to all the baseball fans. Who wants to test their valor int the field of baseball surrounding knowledge 🤯.",
    techStack: ["React.js", "Python", "Javascript", "Django Rest Framework", "GCP"],
    type: "Collaboration",
    githubLink: "https://github.com/externalPointerVariable/Mundane.io",
    liveLink: "https://mlb-frontend-nine.vercel.app/",
  },
];

export { categories, projects };
