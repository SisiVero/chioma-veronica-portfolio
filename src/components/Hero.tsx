import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import me from "../assets/png/me.png";
import hero from "../assets/png/hero.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={hero}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Frontend Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
            Building modern web experiences with React & Next.js
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I craft responsive, user-friendly and accessible web applications
            that deliver exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-gray-700 dark:text-white"
            >
              View Projects
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/SisiVero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/chioma-veronica-ezezim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://x.com/Sisiivero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600 bg-opacity-10 dark:bg-opacity-5 flex items-center justify-center">
              <img
                src={me}
                alt="Developer profile"
                className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg">
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                5+ Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
