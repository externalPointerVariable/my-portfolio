import { motion } from "framer-motion";
import { Skills, SoftSkills, TechMarquee } from "../components/index";

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-16 pb-20 dark:bg-black min-w-full">
      <div className="container mx-auto px-4">
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

        {/* Intro Text */}
        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I specialize in UI/UX design and full-stack development, proficient in
          modern tools and frameworks. Here's an overview of my expertise:
        </motion.p>

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
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white flex items-center justify-center gap-2">
            Additional Technical Skills
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
              alt="Thought Balloon"
              width="25"
              height="25"
            />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Responsive Web Design",
              "User Research & Testing",
              "Wireframing & Prototyping",
              "Agile Methodologies",
              "Version Control (Git)",
              "Full Stack CRUD Applications",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-gray-800 p-4 rounded-lg text-center shadow-md"
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
