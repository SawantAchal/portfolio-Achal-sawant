import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around cursor-pointer items-center p-3 h-20 text-white'>
        <div>
          <h3 className='text-2xl'>ACHAL SAWANT</h3>
        </div>
        <div className='flex gap-16 items-center'>
          <ul className='flex gap-8 items-center'>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              HOME
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              ABOUT
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              PROJECT
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              CONTACT
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              RESUME
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              SKILLS
            </li>
          </ul>
          <button className='bg-gradient-to-r from-purple-400 to-indigo-900 p-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-900 hover:to-purple-400'>
            Hire me!
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
