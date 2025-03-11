import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", progress: 95 },
  { name: "TypeScript", progress: 85 },
  { name: "Python", progress: 90 },
  { name: "Java", progress: 85 },
  { name: "C++", progress: 80 },
  { name: "C", progress: 75 },
  { name: "SQL", progress: 85 },
  { name: "PHP", progress: 70 },
  { name: "Shell Scripting", progress: 65 },
  { name: "Rust", progress: 60 },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium dark:text-white">{skill.name}</span>
            <span className="text-orange-500">{skill.progress}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange-500"
              initial={{ width: 0 }}
              animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
