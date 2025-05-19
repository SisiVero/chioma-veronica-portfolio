import React, { Component } from "react";
import { BookOpenIcon, CodeIcon, UserIcon } from "lucide-react";
export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I’m a Frontend Engineer who loves bringing ideas to life on the
              web. With skills in HTML, CSS, JavaScript, React, TypeScript, and
              Jest, I enjoy creating clean, user-friendly interfaces that make
              apps enjoyable to use. I focus on making sure everything works
              smoothly, looks great, and is easy to maintain.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I’m always up for a challenge, whether it’s solving tough problems
              or learning something new, and I get a real kick out of building
              innovative solutions that make digital experiences better.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I specialize in creating responsive, accessible, and user-friendly
              user interfaces that provide exceptional user experiences. I'm
              dedicated to writing clean, maintainable code and staying
              up-to-date with the latest industry trends and best practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open source
              projects or exploring new technologies to expand my skill set.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Open Source Contributions
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Creative Commons
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Contributed 20+ additional features components to six (6) of
                  <a
                    href="https://creativecommons.org/"
                    target="_blank"
                    className="text-blue-700"
                  >
                    {" "}
                    Creative Commons live sites.
                  </a>{" "}
                  Improving accessibility and performance across the board.
                </p>
                <a
                  href="https://github.com/SisiVero?tab=repositories"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  View Project →
                </a>
              </div>
              <div className="bg-slate-50 dark:bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Fedora DEI Documentation
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Improved fedora's DEI documentation by fixing broken links and
                  adding relevant DEI links and clarifying complex concepts,
                  helping new contributors get up to speed more quickly.
                </p>
                <a
                  href="https://docs.fedoraproject.org/en-US/dei/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
