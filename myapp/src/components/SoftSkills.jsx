import { motion } from "framer-motion";
import { softSkills } from "../content/index";

export default function SoftSkills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {softSkills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center hover:scale-105 transform transition duration-y"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="text-orange-500 text-4xl mb-4">{skill.icon}</div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </motion.div>
      ))}
    </div>
  );
}
