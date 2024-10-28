import React, { useState, useEffect, useContext } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ scrollToSection, refs, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { theme } = useContext(ThemeContext); 

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      setIsFixed(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`${theme === 'light' ? 'text-black ' : 'text-white '} flex justify-around p-3 h-20 cursor-pointer items-center ${isFixed ? (theme === 'light' ? 'fixed top-0 w-full bg-[#f6f3fc] shadow-md' : 'fixed top-0 w-full bg-black bg-opacity-90 shadow-lg') : 'relative bg-transparent'}`}>
      <div>
        <h3 className='md:text-xl text-sm lg:text-2xl'>ACHAL SAWANT</h3>
      </div>
      <div className='flex md:gap-16 items-center gap-6'>
        <ul className={`flex flex-col md:flex-row md:gap-6 lg:gap-16 gap-4 items-center ${isOpen ? `flex  ${theme === 'light' ? 'bg-[#2a1454] text-white bg-opacity-95' : 'bg-black' }` : 'hidden md:flex'} absolute md:static top-20 left-0 w-full bg-black bg-opacity-80 md:bg-transparent text-center md:text-left p-8 md:p-0 z-50`}>
          <li onClick={() => { scrollToSection(refs.mainRef); setIsOpen(false); }} className={`relative pb-2 ${activeSection === 'HOME' ? 'before:w-full' : 'hover:before:w-full'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500`}>HOME</li>
          <li onClick={() => { scrollToSection(refs.projectRef); setIsOpen(false);}} className={`relative pb-2 ${activeSection === 'PROJECT' ? 'before:w-full' : 'hover:before:w-full'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500`}>PROJECT</li>
          <li onClick={() => { scrollToSection(refs.resumeRef); setIsOpen(false);}} className={`relative pb-2 ${activeSection === 'RESUME' ? 'before:w-full' : 'hover:before:w-full'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500`}>RESUME</li>
          <li onClick={() => { scrollToSection(refs.skillsRef); setIsOpen(false);}} className={`relative pb-2 ${activeSection === 'SKILLS' ? 'before:w-full' : 'hover:before:w-full'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500`}>SKILLS</li>
          <li onClick={() => { scrollToSection(refs.contactRef); setIsOpen(false);}} className={`relative pb-2 ${activeSection === 'CONTACT' ? 'before:w-full' : 'hover:before:w-full'} before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500`}>CONTACT</li>
        </ul>
        <a href='https://www.linkedin.com/in/achal-sawant-16853b210/' target='_blank' ><button className={` text-white bg-gradient-to-r from-[#8750f7] to-[#2a1454] lg:p-3 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7] md:w-40 w-24`}>
          Hire me!
        </button></a>
        <div className='md:hidden'>
          {
            isOpen ? (
              <IoClose className='text-4xl' onClick={toggleSidebar} />
            ) : (
              <HiOutlineBars3BottomRight className='text-4xl' onClick={toggleSidebar}/>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
