import { motion } from "framer-motion";
import { GraduationCapIcon } from "lucide-react";
export function Education() {
  const courses = [
    {
      title: "Higher National Diploma",
      institution: "Institute of Management and Technology",
      period: "2021",
      status: "Graduated",
      // topics: ['Advanced React Patterns', 'Performance Optimization', 'State Management']
    },
    {
      title: "Frontend Developer Career Path",
      institution: "Scrimba",
      period: "2023",
      status: "Completed",
    },
    {
      title: "Responsive Design",
      institution: "FreeCodeCamp",
      period: "2022",
      status: "Completed",
    },
        {
      title: "Product Design",
      institution: "Zuri",
      period: "2022",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-gray-900">
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
            Education & Courses
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.2,
              }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <GraduationCapIcon
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {course.institution}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {course.period}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      {course.status}
                    </span>
                  </div>
                  {/* <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    {course.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                  </ul> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
