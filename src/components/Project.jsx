import React, { useEffect, useState, useContext } from 'react';
import projectData from '../assets/projectData';
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { ThemeContext } from '../context/ThemeContext'; 

const Project = () => {
  const { theme } = useContext(ThemeContext); 
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setFilteredProjects(projectData);
  }, []);

  // Filter projects based on the selected category
  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === 'all') {
      setFilteredProjects(projectData);
    } else {
      const filtered = projectData.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };

  return (
    <>
      <main className={`${theme === 'light' ? 'bg-[#f6f3fc]' : 'bg-[#0F0715]'} pt-24 pb-8`}>
        <h1 className={`${theme === 'light' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] ' : 'bg-gradient-to-r from-[#8750f7] to-white'} bg-clip-text text-transparent text-5xl text-center`}>My Recent Works</h1>
        <div className='flex justify-center items-center mt-7'>
          <div className={`flex gap-5 mb-8 ${theme === 'light' ? 'bg-white':'bg-black'} p-1 rounded-full items-center w-80 justify-center`}>
            <button onClick={() => handleFilterChange('all')} className={`p-2 ${filter === 'all' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full px-9 text-white' : `${theme === 'light' ? 'text-[#8750f7]' : 'text-white'}`}`}>All</button>
            <button onClick={() => handleFilterChange('web')} className={`p-2 ${filter === 'web' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full px-9 text-white' : `${theme === 'light' ? 'text-[#8750f7]' : 'text-white'}`}`}>Web</button>
            <button onClick={() => handleFilterChange('uiux')} className={`p-2 ${filter === 'uiux' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full px-9 text-white' : `${theme === 'light' ? 'text-[#8750f7]' : 'text-white'}`}`}>UI/UX</button>
          </div>
        </div>
        <div className='flex justify-around'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:mt-32 w-full px-5 md:px-10">
            {
              filteredProjects.map((project) => (
                <div key={project.id} className='relative group bg-[#140c1c] lg:w-[85%] w-full h-96 mx-auto overflow-hidden rounded-lg'>
                  <img src={project.image} alt={project.title} className='absolute bottom-0 h-[100%] w-full px-7 pt-7' style={{ objectFit: 'cover' }} />
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-3 left-3 right-3 rounded-xl p-6 bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 '>
                      <div className='flex items-center gap-5'>
                        <div>
                          <h3 className='md:text-2xl text-sm font-bold'>{project.title}</h3>
                          <p className='md:text-sm text-[8px] mt-2'>{project.description}</p>
                        </div>
                        <div>
                          <a href={project.link}><div className='lg:text-3xl text-xl transform group-hover:animate-circular cursor-pointer'><GoArrowUpRight /></div></a>
                          <a href={project.github}><div className='lg:text-3xl text-xl transform group-hover:animate-circular cursor-pointer'><FaGithub /></div></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
