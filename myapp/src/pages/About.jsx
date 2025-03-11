import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import {
  ContactForm,
  EducationCertifications,
  ExperienceTimeline,
} from "../components/index";
import { GithubProfile } from "../hooks/index";
import Resume from "../assets/resume/Abhishek_Thakur_resume.pdf";

export default function About() {
  const [profilData, setProfileData] = useState("");
  (async () => {
    setProfileData(await GithubProfile());
  })();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-20 container mx-auto px-4 dark:bg-black dark:text-white min-w-full">
      <div className="py-8 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div
          className={`relative w-full max-w-md aspect-[3/4] md:aspect-auto md:h-full transition-opacity transform ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          } duration-500`}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
          <img
            src={profilData.avatar_url}
            alt="About"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div
          className={`space-y-6 md:space-y-8 transition-opacity transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } duration-500 delay-200`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <h2 className="text-xl dark:text-gray-400 text-gray-700">
              Software Engineer | Frontend & Backend Developer
            </h2>
          </div>

          <p className="dark:text-gray-300 text-gray-500 leading-relaxed">
            Passionate about crafting intuitive user experiences and scalable
            backend solutions. I specialize in full-stack development, bringing
            together modern frameworks and best practices to create seamless
            applications.
          </p>

          <p className="dark:text-gray-300 text-gray-500 leading-relaxed">
            With experience in frontend and backend technologies, I love solving
            complex problems, optimizing performance, and continuously learning
            new technologies to stay ahead in the evolving tech landscape.
          </p>

          <a href={Resume} download="Abhishek_Resume.pdf">
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white dark:text-white rounded-lg hover:bg-orange-600 transition">
              <FileDown className="w-4 h-4" />
              Download CV
            </button>
          </a>
        </div>
      </div>

      <div
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } duration-500 delay-400`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Experience
        </h2>
        <ExperienceTimeline />
      </div>

      <div
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } duration-500 delay-600`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Education & Certifications
        </h2>
        <EducationCertifications />
      </div>

      <div className="flex items-center justify-center">
        <div
          className={`py-8 md:py-20 transition-opacity transform border-0.5 border-gray-500 w-1/2 rounded shadow-2xl 
      ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-500 delay-800`}
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Contact Me
          </h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
