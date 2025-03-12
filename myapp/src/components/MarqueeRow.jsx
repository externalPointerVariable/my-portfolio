import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiGraphql,
  SiKubernetes,
  SiSpringboot,
  SiPostgresql,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiFirebase,
  SiOpenai,
  SiMysql,
  SiRedis,
  SiTypescript,
  SiJavascript,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiRender,
  SiDart,
  SiFlutter,
  SiElectron,
  SiOpencv,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiSolidity,
  SiC,
  SiCplusplus,
  SiMarkdown,
  SiJquery,
  SiSocketdotio,
  SiWebpack,
  SiYarn,
  SiAnaconda,
  SiNeo4J,
  SiLatex,
  SiStrapi,
} from "react-icons/si";

const techStack = [
  [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiGraphql color="#E535AB" />, name: "GraphQL" },
    { icon: <FaDocker color="#2496ED" />, name: "Docker" },
    { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes" },
    { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
    { icon: <SiChakraui color="#4ED1C5" />, name: "Chakra UI" },
    { icon: <SiRedux color="#764ABC" />, name: "Redux" },
    { icon: <FaJava color="#007396" />, name: "Java" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <SiRedis color="#DC382D" />, name: "Redis" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <SiFastapi color="#009688" />, name: "FastAPI" },
    { icon: <SiDjango color="#092E20" />, name: "Django" },
    { icon: <SiFlask color="#000000" />, name: "Flask" },
  ],

  [
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <SiTensorflow color="#FF6F00" />, name: "TensorFlow" },
    { icon: <SiPytorch color="#EE4C2C" />, name: "PyTorch" },
    { icon: <SiOpenai color="#00A67E" />, name: "OpenAI" },
    { icon: <SiOpencv color="#5C3EE8" />, name: "OpenCV" },
    { icon: <SiKeras color="#D00000" />, name: "Keras" },
    { icon: <SiNumpy color="#013243" />, name: "NumPy" },
    { icon: <SiPandas color="#150458" />, name: "Pandas" },
    { icon: <SiScikitlearn color="#F7931E" />, name: "Scikit-Learn" },
    { icon: <FaPhp color="#777BB4" />, name: "PHP" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
    { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { icon: <SiDart color="#0175C2" />, name: "Dart" },
    { icon: <SiFlutter color="#02569B" />, name: "Flutter" },
  ],
  [
    { icon: <SiElectron color="#47848F" />, name: "Electron.js" },
    { icon: <SiJquery color="#0769AD" />, name: "jQuery" },
    { icon: <SiSocketdotio color="#010101" />, name: "Socket.io" },
    { icon: <SiWebpack color="#8DD6F9" />, name: "Webpack" },
    { icon: <SiYarn color="#2C8EBB" />, name: "Yarn" },
    { icon: <SiAnaconda color="#44A833" />, name: "Anaconda" },
    { icon: <SiNeo4J color="#008CC1" />, name: "Neo4j" },
    { icon: <SiLatex color="#008080" />, name: "LaTeX" },
    { icon: <SiStrapi color="#2E7EEA" />, name: "Strapi" },
    { icon: <FaAws color="#FF9900" />, name: "AWS" },
    { icon: <SiVercel color="#000000" />, name: "Vercel" },
    { icon: <SiNetlify color="#00C7B7" />, name: "Netlify" },
    { icon: <SiHeroku color="#430098" />, name: "Heroku" },
    { icon: <SiRender color="#46E3B7" />, name: "Render" },
    { icon: <SiSolidity color="#363636" />, name: "Solidity" },
    { icon: <SiC color="#A8B9CC" />, name: "C" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <SiMarkdown color="#000000" />, name: "Markdown" },
  ],
];

const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap sm:block">
      <div className="flex gap-6 py-2 animate-marquee-wrapper">
        <div
          className={`flex gap-6 py-2 animate-marquee ${
            direction === "reverse" ? "animate-marquee-reverse" : ""
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-lg font-semibold border dark:border-gray-600 dark:bg-gray-900 bg-gray-100 rounded-2xl px-4 py-2 shadow-md"
            >
              {item.icon}
              <span className="dark:text-white text-black">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function TechMarquee() {
  return (
    <div className="hidden sm:block text-white p-6 space-y-2 relative w-1/2 mx-auto dark:text-gray-600">
      {techStack.map((stack, index) => (
        <MarqueeRow
          key={index}
          items={stack}
          direction={index % 2 === 0 ? "normal" : "reverse"}
        />
      ))}
    </div>
  );
}
