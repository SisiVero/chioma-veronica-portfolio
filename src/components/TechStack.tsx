export function TechStack() {
  const technologies = [{
    category: 'Frontend',
    items: [{
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }, {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    }, {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }, {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg'
    }]
  }, {
    category: 'Tools & Others',
    items: [{
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }, {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }, {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }, {
      name: 'Figma',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
     {
      name: 'Azure Repo',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
    },
     {
      name: 'GitLab',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain-wordmark.svg'
    }
  ]
  }];
  return <section id="stack" className="py-20 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in modern frontend technologies, with a focus on React
            and Next.js ecosystem. Here are the technologies I work with on a
            daily basis.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="space-y-12">
          {technologies.map((techCategory, index) => <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {techCategory.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {techCategory.items.map((tech, techIndex) => <div key={techIndex} className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow">
                    <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {tech.name}
                    </h4>
                  </div>)}
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-blue-50 dark:bg-gray-800 rounded-lg p-8 border border-blue-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                React.js
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Good in React hooks, context API, performance optimization, and component architecture.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Next.js
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Proficient in server-side rendering as well as dynamic routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}