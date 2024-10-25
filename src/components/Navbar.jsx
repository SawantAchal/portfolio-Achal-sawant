import React from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around cursor-pointer items-center p-3 h-20 text-white'>
        <div>
          <h3 className='md:text-xl text-sm lg:text-2xl'>ACHAL SAWANT</h3>
        </div>
        <div className='flex md:gap-16 items-center gap-6'>
          <ul className='md:flex lg:gap-8 gap-4 items-center hidden '>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              HOME
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              PROJECT
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              RESUME
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              SKILLS
            </li>
            <li className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
              CONTACT
            </li>
          </ul>
          <button className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] lg:p-3 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7]'>
            Hire me!
          </button>
          <HiOutlineBars3BottomRight className='text-4xl md:hidden'/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
