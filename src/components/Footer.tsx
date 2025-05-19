import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between items-center md:justify-normal md:gap-4">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-blue-400 mb-2 text-center">Chioma Veronica</div>
            <p className="text-gray-400 max-w-xs md:max-w-full">
              Frontend developer specializing in React and Next.js, building
              modern web experiences.
            </p>
          </div>
          <div className="flex flex-col items-cente rmd:flex-col">
            <div className="flex space-x-4 mb-4 mx-auto">
              <a href="https://github.com/SisiVero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/chioma-veronica-ezezim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://x.com/Sisiivero" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <TwitterIcon size={20} />
              </a>
            </div>
            <p className="text-gray-400">
              © {new Date().getFullYear()} | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>;
}