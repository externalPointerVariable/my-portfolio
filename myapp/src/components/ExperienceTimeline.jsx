import { motion } from "framer-motion";

const experiences = [
  {
    period: "Jan 2023 - Present",
    title: "Senior UI/UX Designer",
    company: "TechCorp Inc.",
    description:
      "Led design initiatives for flagship products, improving user engagement by 40%.",
  },
  {
    period: "Mar 2021 - Dec 2022",
    title: "UI/UX Designer",
    company: "DesignHub",
    description:
      "Collaborated on multiple projects, specializing in mobile app interfaces.",
  },
  {
    period: "Jun 2019 - Feb 2021",
    title: "Junior Designer",
    company: "CreativeSolutions",
    description:
      "Started career working on web design projects and learning UX principles.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-orange-500/50 transform -translate-x-1/2"></div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center md:space-x-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div
            className={`mb-4 md:mb-0 w-full md:w-[calc(50%-1rem)] ${
              index % 2 === 0
                ? "md:text-right md:pr-8"
                : "md:order-last md:text-left md:pl-8"
            }`}
          >
            <h3 className="font-bold text-lg text-orange-500">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-sm text-orange-400 mt-1">{exp.period}</p>
          </div>

          <motion.div
            className={`relative bg-gray-900 p-4 rounded-lg shadow-lg w-full md:w-5/12 ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          >
            <div
              className={`absolute top-4 ${
                index % 2 === 0
                  ? "left-0 transform -translate-x-full"
                  : "right-0 transform translate-x-full"
              } w-0 h-0 border-8 border-transparent ${
                index % 2 === 0 ? "border-r-gray-900" : "border-l-gray-900"
              }`}
            ></div>
            <p className="text-gray-300">{exp.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
