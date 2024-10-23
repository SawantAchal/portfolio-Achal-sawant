import React, { useEffect, useState } from 'react'
import projectData from '../assets/projectData';

const Project = () => {
  const [filter , setFilter] = useState('All')
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
      <main className='bg-[#0F0715] pt-5'>
        <h1 className='bg-gradient-to-r from-indigo-700 to-indigo-200 bg-clip-text text-transparent text-3xl text-center'>My Recent Works</h1>
        <div className='flex justify-center items-center mt-7'>
          <div className="flex gap-5 mb-8 bg-black p-1 rounded-full items-center w-80 justify-center">
            <button onClick={() => handleFilterChange('all')} className={`p-2 ${filter === 'all' ? 'bg-gradient-to-r from-purple-400 to-indigo-900 rounded-full px-9 text-white' : 'text-white'}`}>All</button>
            <button onClick={() => handleFilterChange('web')} className={`p-2 ${filter === 'web' ? 'bg-gradient-to-r from-purple-400 to-indigo-900  rounded-full px-9 text-white' : 'text-white'}`}> Web</button>
            <button onClick={() => handleFilterChange('uiux')} className={`p-2 ${filter === 'uiux' ? 'bg-gradient-to-r from-purple-400 to-indigo-900  rounded-full px-9 text-white' : 'text-white'}`}> UI/UX</button>
          </div>
        </div>
        <div className='flex justify-around'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32 w-full px-5 md:px-10">
            {
              filteredProjects.map((project) => (
                <div key={project.id} className='relative group bg-fuchsia-800 w-[85%] h-96 mx-auto overflow-hidden'>
                  <img src={project.image} alt={project.title}  className='absolute bottom-0  h-[100%] w-full px-7 pt-7'  style={{ objectFit: 'cover' }} />
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-3 left-3 right-3 rounded-xl p-6 bg-purple-700 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 '>
                      <div className='flex   items-center'>
                        <div>
                          <h3 className='text-2xl font-bold'>{project.title}</h3>
                          <p className='text-sm mt-2'>{project.description}</p>
                        </div>
                        <div className=' text-3xl  transform group-hover:animate-circular'>↗</div>
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
  )
}

export default Project
