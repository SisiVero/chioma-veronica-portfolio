import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { allProjects } from '../data';

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);
  return <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {showAll ? 'All Projects' : 'Featured Projects'}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are {showAll ? 'all' : 'some'} of my projects that showcase my
            skills and expertise.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => <motion.div key={project.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-slate-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => <span key={tagIndex} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {tag}
                      </span>)}
                  </div>
                  <div className="flex space-x-3">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                      { project.liveLink ? <ExternalLinkIcon size={16} className="mr-1" /> : ""}
                      {project.liveLink ? 'Live Demo' : ''}
                    </a>
                   { project.githubLink ? <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">
                      
                    <GithubIcon size={16} className="mr-1" />
                      Code
                    </a> : ""}
                  </div>
                </div>
              </motion.div>)}
          </AnimatePresence>
        </div>
        <div className="text-center mt-12">
          <motion.button onClick={() => setShowAll(!showAll)} className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            {showAll ? 'Show Less' : 'View All Projects'}
          </motion.button>
        </div>
      </div>
    </section>;
}