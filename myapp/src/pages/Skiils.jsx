import { motion } from "framer-motion";
import { Skills, SoftSkills } from "../components/index";

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-16 pb-20 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          As a UI/UX designer and developer, I've honed my skills in various design and development tools. 
          Here's an overview of my proficiency in key areas:
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Soft Skills</h2>
          <SoftSkills />
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Additional Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Responsive Web Design",
              "User Research and Testing",
              "Wireframing and Prototyping",
              "Agile Methodologies",
              "Version Control (Git)",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              >
                <span className="text-orange-500 font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
