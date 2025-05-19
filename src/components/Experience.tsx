import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";
export function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Infinion Technologies",
      period: "2024 - Present",
      description:
        "Work closely with designers and backend developers to bring product to life",
      achievements: [
        "Collaborate closely with UI/UX designers to interpret and implement detailed user interface designs into responsive, interactive web applications.",
        "Consume and integrate APIs provided by the back-end team to ensure seamless data flow and dynamic content rendering.",
        "Utilize modern front-end technologies to build high-quality, user-friendly interfaces that align with project specifications and enhance user experience.",
      ],
    },
    {
      role: "Frontend Developer - Contributor",
      company: "Creative Commons",
      period: "2024 - 2024",
      description:
        "Suggested and implemented features that will enhance UX across websites",
      achievements: [
        "Collaborated with the Creative Commons team to consolidate and standardize design across their websites, creating a comprehensive set of guidelines for new contributors.",
        "Proposed and implemented UX/UI improvements for various Creative Commons websites, leading to accepted features and enhancements across multiple GitHub repositories",
        "Suggested and contributed code improvements for better readability and adherence to established templates across the codebase.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="bg-slate-50 dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <BriefcaseIcon
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {exp.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
