import { useRef } from 'react'
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Project from './components/Project'
import Resume from './components/Resume'
import Skills from './components/Skills'
import HomePage from './pages/HomePage'

function App() {
  const mainRef = useRef(null)
  const projectRef = useRef(null)
  const navbarRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const resumeRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <HomePage scrollToSection={scrollToSection} refs={{mainRef , navbarRef , projectRef,resumeRef,skillsRef,contactRef}}/>
      <div ref={projectRef}><Project /></div>
      <div ref={resumeRef}><Resume /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer/> 
    </>
  )
}

export default App
