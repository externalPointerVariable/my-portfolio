import { useEffect, useState } from 'react';

const educationCertifications = [
  {
    type: 'Education',
    title: 'Bachelor of Science in Computer Science',
    institution: 'Tech University',
    year: '2015 - 2019',
    description: 'Focused on UI/UX design and web development.'
  },
  {
    type: 'Certification',
    title: 'Advanced UI/UX Design',
    institution: 'DesignPro Academy',
    year: '2020',
    description: 'Mastered advanced techniques in user interface and experience design.'
  },
  {
    type: 'Certification',
    title: 'Full Stack Web Development',
    institution: 'CodeMaster Institute',
    year: '2021',
    description: 'Comprehensive training in modern web development technologies.'
  }
];

export default function EducationCertifications() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-8">
      {educationCertifications.map((item, index) => (
        <div
          key={index}
          className={`bg-gray-900 p-6 rounded-lg shadow-lg transition-opacity transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          } duration-500`}
          style={{ transitionDelay: `${index * 0.2}s` }}
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
        </div>
      ))}
    </div>
  );
}
