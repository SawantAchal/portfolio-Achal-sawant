import { useRef, useState, useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project from './components/Project';
import Resume from './components/Resume';
import Skills from './components/Skills';
import HomePage from './pages/HomePage';

function App() {
  const mainRef = useRef(null);
  const projectRef = useRef(null);
  const resumeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('HOME');

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'HOME', ref: mainRef },
        { name: 'PROJECT', ref: projectRef },
        { name: 'RESUME', ref: resumeRef },
        { name: 'SKILLS', ref: skillsRef },
        { name: 'CONTACT', ref: contactRef },
      ];

      const currentSection = sections.find(({ ref }) => {
        if (ref.current) { 
          const top = ref.current.getBoundingClientRect().top;
          // console.log(`Section: ${ref.current.id}, Top: ${top}`);
          return top <= window.innerHeight / 2 && top >= 0;
        }
        return false;
      });

      if (currentSection && currentSection.name !== activeSection) {
        // console.log(`Active Section Updated: ${currentSection.name}`);
        setActiveSection(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <>
      <HomePage scrollToSection={scrollToSection} refs={{ mainRef, projectRef, resumeRef, skillsRef, contactRef }} activeSection={activeSection}/>
      <div ref={projectRef}><Project /></div>
      <div ref={resumeRef}><Resume /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
