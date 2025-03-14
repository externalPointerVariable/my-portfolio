import { motion } from "framer-motion";
import { Skills, SoftSkills, TechMarquee } from "../components/index";
import GitHubCalendar from "react-github-calendar";
import {
  FaLaptopCode,
  FaUserCheck,
  FaPencilRuler,
  FaProjectDiagram,
  FaCodeBranch,
  FaDatabase,
} from "react-icons/fa";

export default function SkillsPage() {
  const additionalSkills = [
    { name: "Responsive Web Design", icon: <FaLaptopCode /> },
    { name: "User Research & Testing", icon: <FaUserCheck /> },
    { name: "Wireframing & Prototyping", icon: <FaPencilRuler /> },
    { name: "Agile Methodologies", icon: <FaProjectDiagram /> },
    { name: "Version Control (Git)", icon: <FaCodeBranch /> },
    { name: "Full Stack CRUD Applications", icon: <FaDatabase /> },
  ];

  return (
    <div className="min-h-screen pt-16 pb-20 dark:bg-black">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12 dark:text-white flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
            alt="Man Technologist"
            width="40"
            height="40"
          />
        </motion.h1>

        {/* Hard Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Skills />
        </motion.div>

        {/* Tech Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full mx-auto mt-4"
        >
          <TechMarquee />
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            Soft Skills
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png"
              alt="Robot"
              width="30"
              height="30"
            />
          </h2>
          <SoftSkills />
        </motion.div>

        {/* Additional Technical Skills */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            Additional Technical Skills
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
              alt="Thought Balloon"
              width="30"
              height="30"
            />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              >
                <span className="text-orange-500 text-3xl mb-3">
                  {skill.icon}
                </span>
                <span className="text-white font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Contribution Calendar */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white flex items-center justify-center gap-2">
            GitHub Contributions
            <img
              src="https://user-images.githubusercontent.com/74038190/216122041-518ac897-8d92-4c6b-9b3f-ca01dcaf38ee.png"
              alt="Github Contribution"
              width="25"
              height="25"
            />
          </h2>

          {/* Theme-Based Background Container */}
          <div className="bg-gray-800 dark:bg-black rounded-lg p-6 text-white">
            <div className="flex justify-center">
              <GitHubCalendar
                username="externalPointerVariable"
                theme={{
                  light: [
                    "#ffffff",
                    "#FFEDD5",
                    "#FDBA74",
                    "#FB923C",
                    "#EA580C",
                  ],
                  dark: ["#ffffff", "#FFB866", "#FF9E3D", "#FF7700", "#CC5C00"],
                }}
                blockSize={15}
                blockMargin={5}
                fontSize={16}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
