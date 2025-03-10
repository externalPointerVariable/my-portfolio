import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import {FaGithub} from "react-icons/fa6";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="relative aspect-video">
            <img
              src={project.banner}
              alt={`${project.name} banner`}
              className={`rounded-t-lg w-full h-auto ${imageLoaded ? '' : 'hidden'}`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-t-lg" />}
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-orange-500">{project.name}</h2>
              <motion.button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>
            </div>
            <p className="text-gray-300">{project.description}</p>
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <motion.span 
                    key={tech} 
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <p className="text-gray-400">
              <span className="font-semibold">Project Type:</span> {project.type}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => window.open(project.githubLink, '_blank')}
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <FaGithub className="w-4 h-4" />
                GitHub Repo
              </button>
              {project.liveLink && (
                <button
                  onClick={() => window.open(project.liveLink, '_blank')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
