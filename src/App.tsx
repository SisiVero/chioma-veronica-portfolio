import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVButton } from './components/CVButton';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  return <Router>
      <ThemeProvider>
        <div className="bg-slate-50 dark:bg-gray-900 min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <TechStack />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <CVButton />
        </div>
      </ThemeProvider>
    </Router>;
}