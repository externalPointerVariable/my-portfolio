import { FileDown } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="min-h-screen pt-16 container mx-auto px-4 dark:bg-black">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 py-20">
        <motion.div
          className="flex-1 space-y-8"
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="space-y-2">
            <motion.h2
              className="text-2xl text-gray-800 font-mono dark:text-gray-400"
              variants={fadeInUp}
            >
              Hi, I am
            </motion.h2>
            <motion.h1
              className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-orange-500 to-orange-600 text-transparent bg-clip-text pb-4"
              variants={fadeInUp}
            >
              Software Developer
            </motion.h1>
          </div>

          <motion.div className="flex gap-4" variants={fadeInUp}>
            {[
              {
                href: "https://instagram.com",
                target: "_blank",
                icon: <FaInstagram className="w-5 h-5" />,
              },
              {
                href: "https://linkedin.com",
                target: "_blank",
                icon: <FaLinkedin className="w-5 h-5" />,
              },
              {
                href: "https://x.com",
                target: "_blank",
                icon: <FaXTwitter className="w-5 h-5" />,
              },
            ].map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-none hover:bg-gray-100 transition dark:text-white dark:hover:bg-gray-700/50"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          <motion.div className="flex gap-4" variants={fadeInUp}>
            <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md">
              Hire Me
            </button>
            <button className="px-6 py-2 border border-gray-300 flex items-center gap-2 rounded-md hover:bg-gray-100 transition dark:border-gray-700 dark:text-white dark:hover:bg-gray-700/50">
              <FileDown className="w-4 h-4" />
              Download CV
            </button>
          </motion.div>

          <motion.div className="flex gap-12 pt-8" variants={fadeInUp}>
            {[
              { value: "5+", label: "Experiences" },
              { value: "20+", label: "Projects Done" },
            ].map(({ value, label }, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-orange-500">{value}</h3>
                <p className="text-gray-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative aspect-square hidden sm:block" // 👈 Hide on small screens
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent"
            animate={{ scale: [1, 1.01, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <img
            src="/placeholder.svg"
            alt="Profile"
            width={600}
            height={600}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
