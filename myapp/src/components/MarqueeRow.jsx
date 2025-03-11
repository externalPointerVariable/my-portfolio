import React from "react";
import { FaReact, FaNodeJs, FaDocker, FaJava, FaPython } from "react-icons/fa";
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
} from "react-icons/si";

const techStack = [
  [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiGraphql color="#E535AB" />, name: "GraphQL" },
    { icon: <FaDocker color="#2496ED" />, name: "Docker" },
    { icon: <SiKubernetes color="#326CE5" />, name: "Kubernetes" },
  ],
  [
    { icon: <FaJava color="#007396" />, name: "Java" },
    { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
    { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <SiFastapi color="#009688" />, name: "FastAPI" },
  ],
  [
    { icon: <FaPython color="#3776AB" />, name: "Python" },
    { icon: <SiTensorflow color="#FF6F00" />, name: "TensorFlow" },
    { icon: <SiPytorch color="#EE4C2C" />, name: "PyTorch" },
    { icon: <SiOpenai color="#00A67E" />, name: "OpenAI" },
  ],
];

const MarqueeRow = ({ items, direction }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap sm:block">
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white dark:from-black via-transparent to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white dark:from-black via-transparent to-transparent z-10"></div>

      <div
        className={`flex gap-6 py-2 animate-marquee ${
          direction === "reverse" ? "animate-marquee-reverse" : ""
        }`}
      >
        {[...items, ...items].map((item, index) => (
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
  );
};

export default function TechMarquee() {
  return (
    <div className="hidden sm:block text-white p-6 space-y-2 relative dark:text-gray-600">
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
