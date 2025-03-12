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
  const [profileData, setProfileData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await GithubProfile();
      setProfileData(data);
    }
    fetchData();
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 pb-20 container mx-auto px-4 dark:bg-black dark:text-white min-w-full">
      <div className="py-8 md:py-20 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Profile Image Section */}
        {profileData && (
          <div
            className={`relative w-full max-w-md aspect-[3/4] md:aspect-auto md:h-full transition-opacity transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            } duration-500`}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 to-transparent" />
            <img
              src={profileData.avatar_url}
              alt="About"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        )}

        {/* About Me Text Section */}
        <div
          className={`space-y-6 md:space-y-8 transition-opacity transform ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } duration-500 delay-200`}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
              About Me
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png"
                alt="Waving Hand"
                width="40"
                height="40"
              />
            </h1>
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
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              <FileDown className="w-4 h-4" />
              Download CV
            </button>
          </a>
        </div>
      </div>

      {/* Experience Section */}
      <div
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } duration-500 delay-400`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center gap-2 justify-center">
          My Experience
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Tipping%20Hand.png"
            alt="Man Tipping Hand"
            width="40"
            height="40"
          />
        </h2>
        <ExperienceTimeline />
      </div>

      {/* Education & Certifications Section */}
      <div
        className={`py-16 md:py-24 transition-opacity transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } duration-500 delay-600`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center gap-2 justify-center">
          Education & Certifications
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Student.png"
            alt="Man Student"
            width="40"
            height="40"
          />
        </h2>
        <EducationCertifications />
      </div>

      {/* Contact Me Section */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className={`w-full max-w-lg md:max-w-xl lg:max-w-2xl py-8 md:py-16 px-6 md:px-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl transition-all transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } duration-500 delay-800`}
          id="contact"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 md:mb-10 flex items-center gap-2 justify-center">
            Contact Me
            <img
              src="https://user-images.githubusercontent.com/74038190/216120981-b9507c36-0e04-4469-8e27-c99271b45ba5.png"
              alt="Contact me animation"
              width="40"
              height="40"
            />
          </h2>
          <div className="max-w-md mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
