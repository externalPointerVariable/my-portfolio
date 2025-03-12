import { useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import {educationCertifications} from '../content/index';

export default function EducationCertifications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-8">
      {educationCertifications.map((item, index) => (
        <motion.div
          key={index}
          className={`bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg transition-opacity transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } duration-500`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-orange-500">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.institution}</p>
            </div>
            <span className="text-sm text-orange-400">{item.year}</span>
          </div>
          <p className="text-gray-300 mt-2">{item.description}</p>
          <span className="inline-block mt-2 px-2 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded">
            {item.type}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
