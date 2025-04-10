import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Error = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="space-y-6 max-w-md"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {/* OH! Speech bubble */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="absolute -top-16 -left-4 bg-zinc-700 rounded-full w-16 h-16 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-zinc-400 text-lg font-medium">OH!</span>
          </motion.div>

          {/* 404 Bubbles */}
          <div className="flex items-center">
            {[4, 0, 4].map((num, index) => (
              <motion.div
                key={index}
                className={`relative bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center ${index === 1 ? 'rotate-12 -mx-3' : ''}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + index * 0.15 }}
              >
                <span className="text-5xl font-bold">{num}</span>
                <div className="absolute inset-0 bg-white/20 -translate-y-1/2 h-1/3" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-medium text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Sorry! Page not found
        </motion.h2>
        <motion.p
          className="text-zinc-600 dark:text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <div className="relative py-10">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300 dark:border-zinc-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-black px-2 text-zinc-500 text-sm">
              Let's get you back on track
            </span>
          </div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
          >
            <FaHome className="h-4 w-4" /> Back to home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            <FaArrowLeft className="h-4 w-4" /> Go back
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="grid grid-cols-3 gap-8 text-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Error;
