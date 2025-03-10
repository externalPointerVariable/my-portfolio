import { useEffect, useState } from 'react';
import { FileDown } from 'lucide-react';
import { ContactForm, EducationCertifications, ExperienceTimeline } from '../components/index';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true)
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-20 container mx-auto px-4">
      <div className="py-8 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div 
          className={`relative w-full max-w-md aspect-[3/4] md:aspect-auto md:h-full transition-opacity transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          } duration-500`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
          <Image
            src="/placeholder.svg"
            alt="About"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        
        <div 
          className={`space-y-6 md:space-y-8 transition-opacity transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          } duration-500 delay-200`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <h2 className="text-xl text-gray-400">User Interface And User Experience And Also Video Editing</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications.
          </p>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition">
            <FileDown className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </div>

      <div 
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } duration-500 delay-400`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Experience</h2>
        <ExperienceTimeline />
      </div>

      <div 
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } duration-500 delay-600`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education & Certifications</h2>
        <EducationCertifications />
      </div>

      <div 
        className={`py-8 md:py-20 transition-opacity transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } duration-500 delay-800`}
        id="contact"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
