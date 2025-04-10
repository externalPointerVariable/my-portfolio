import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTerminal,
  FaPaintBrush,
  FaRocket,
  FaCogs,
  FaLaptop,
  FaMicrophone,
  FaServer,
  FaHeadphones,
  FaKeyboard,
  FaDesktop,
} from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

const Category = ({ title, icon, children }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2 className="text-3xl font-semibold flex items-center gap-3 mb-6 text-gray-900 dark:text-white">
      <span className="text-orange-500">{icon}</span> {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  </motion.div>
);

const Card = ({ title, icon, items }) => (
  <motion.div
    className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5 shadow-sm"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
      {icon} {title}
    </h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Uses = () => {
  return (
    <motion.div
      className="mx-auto px-6 py-16 bg-white dark:bg-black min-w-full min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Uses ⚙️
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          A curated collection of tools, software, and hardware that power my
          daily workflow and creative process.
        </p>
      </div>

      <Category title="Code Crafting" icon={<FaCode />}>
        <Card
          title="Editor & Environment"
          icon={<FaCode />}
          items={[
            "VS Code as my main editor",
            "GitHub Theme (Dark)",
            "JetBrains Mono font",
            "ESLint + Prettier for code formatting",
            "GitHub Copilot for AI assistance",
          ]}
        />
        <Card
          title="Terminal & Version Control"
          icon={<FaTerminal />}
          items={[
            "iTerm2 with Oh My Zsh",
            "Fig for terminal autocomplete",
            "Git for version control",
            "GitHub CLI for repository management",
            "Warp as an alternative terminal",
          ]}
        />
      </Category>

      <Category title="Tooling" icon={<FaCogs />}>
        <Card
          title="Design & Prototyping"
          icon={<FaPaintBrush />}
          items={[
            "Figma for UI design",
            "Excalidraw for diagrams",
            "Adobe Photoshop for image editing",
            "Loom for screen recordings",
            "CleanShot X for screenshots",
          ]}
        />
        <Card
          title="Productivity"
          icon={<FaRocket />}
          items={[
            "Raycast as app launcher",
            "Notion for notes and documentation",
            "1Password for password management",
            "Arc Browser as my main browser",
            "Spotify for music while coding",
          ]}
        />
      </Category>

      <Category title="Stack" icon={<FaLaptop />}>
        <Card
          title="Frontend"
          icon={<FaDesktop />}
          items={[
            "Next.js as my React framework",
            "TypeScript for type safety",
            "Tailwind CSS for styling",
            "shadcn/ui for component library",
            "Framer Motion for animations",
          ]}
        />
        <Card
          title="Backend & Infrastructure"
          icon={<FaServer />}
          items={[
            "Node.js for server-side JavaScript",
            "Supabase for backend services",
            "Vercel for hosting and deployment",
            "Prisma for database ORM",
            "tRPC for type-safe APIs",
          ]}
        />
      </Category>

      <Category title="Gear" icon={<FiMonitor />}>
        <Card
          title="Workstation"
          icon={<FaKeyboard />}
          items={[
            'MacBook Pro 16" (M1 Pro, 32GB RAM, 1TB SSD)',
            'Dell UltraSharp 27" 4K Monitor',
            "Keychron K2 Mechanical Keyboard",
            "Logitech MX Master 3 Mouse",
            "CalDigit TS4 Thunderbolt Dock",
          ]}
        />
        <Card
          title="Audio & Accessories"
          icon={<FaHeadphones />}
          items={[
            "Sony WH-1000XM4 Headphones",
            "Blue Yeti USB Microphone",
            "Logitech C920 HD Webcam",
            "Elgato Key Light",
            "Fully Jarvis Standing Desk",
          ]}
        />
      </Category>
    </motion.div>
  );
};

export default Uses;
