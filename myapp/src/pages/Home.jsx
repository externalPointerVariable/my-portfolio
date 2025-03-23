import { FileDown } from "lucide-react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import Resume from "../assets/resume/Abhishek_Thakur_resume.pdf";
import Profile from "../assets/profile/images/profile.jpeg";
import { Particle } from "../components/index";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Separate Mobile Profile Component (Optional Animation)
const MobileProfile = () => (
  <motion.div
    className="w-40 h-40 mx-auto md:hidden rounded-full overflow-hidden border-4 border-orange-500"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
  </motion.div>
);

export default function Home() {
  return (
    <div className="min-h-screen pt-16 dark:bg-black">
      <Particle>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-16 py-20">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
            <motion.div
              className="flex-1 space-y-8"
              initial="initial"
              animate="animate"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              <MobileProfile />

              <div className="space-y-2">
                <motion.h2
                  className="text-xl md:text-2xl font-mono text-gray-700 dark:text-gray-400 tracking-wide relative z-10"
                  variants={fadeInUp}
                >
                  Hi, I am
                </motion.h2>
                <motion.h1
                  className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-orange-500 to-orange-600 text-transparent bg-clip-text pb-4 relative z-10"
                  variants={fadeInUp}
                >
                  Software Developer
                </motion.h1>
              </div>

              <motion.div className="flex gap-4 relative z-10" variants={fadeInUp}>
                {[
                  {
                    href: "https://www.instagram.com/hello_abhi004/",
                    icon: <FaInstagram className="w-5 h-5" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/abhishek-thakur-289969218/",
                    icon: <FaLinkedin className="w-5 h-5" />,
                  },
                  {
                    href: "https://x.com/__Abhi026063__",
                    icon: <FaXTwitter className="w-5 h-5" />,
                  },
                ].map(({ href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border-none hover:bg-gray-100 transition dark:text-white dark:hover:bg-gray-700/50"
                  >
                    {icon}
                  </a>
                ))}
              </motion.div>

              <motion.div className="flex gap-4 relative z-10" variants={fadeInUp}>
                <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md">
                  <a href="mailto:AbhishekThakur004@outlook.com">Hire Me</a>
                </button>
                <a
                  href={Resume}
                  download="Abhishek_Resume.pdf"
                  className="px-6 py-2 border border-gray-300 flex items-center gap-2 rounded-md hover:bg-gray-100 transition dark:border-gray-700 dark:text-white dark:hover:bg-gray-700/50"
                >
                  <FileDown className="w-4 h-4" />
                  Download CV
                </a>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-8 px-10 py-4 rounded-xl bg-gray-100 dark:bg-gray-800 relative z-10"
                variants={fadeInUp}
              >
                {[
                  { value: "1+", label: "Experiences" },
                  { value: "7+", label: "Projects Done" },
                ].map(({ value, label }, index, array) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="text-center min-w-[100px]">
                      <h3 className="text-2xl md:text-3xl font-bold text-orange-500">
                        {value}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                        {label}
                      </p>
                    </div>

                    {index < array.length - 1 && (
                      <div className="h-10 w-px bg-gray-400 dark:bg-gray-500"></div>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <div className="flex-1 relative aspect-square hidden sm:block z-10">
              <img
                src={Profile}
                alt="Profile"
                width={600}
                height={600}
                className="rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </Particle>
    </div>
  );
}
