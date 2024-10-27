import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import { GiGraduateCap } from "react-icons/gi";

const Resume = () => {
  return (
    <>
        <div className='bg-black md:pt-28 flex flex-col md:flex-row justify-around pb-16'>
            <div className='gap-10 flex flex-col  items-center'>
                <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent md:text-3xl lg:text-4xl text-3xl flex gap-2 items-center'> <LiaCertificateSolid size={40} className='text-[#8750f7]'/> My Experience</h1>
                <div className='bg-[#140C1C] hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>Feb-23 - July-23</h4>
                    <h2 className='text-white'>Mern Stack Developer</h2>
                    <p className='text-white'>Unipolar Technologies, Belapur</p>
                </div>
            </div>
            <div  className='gap-10 flex flex-col justify-center items-center pt-10 md:pt-0'>
            <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent md:text-3xl lg:text-4xl text-3xl flex gap-2 items-center'> <GiGraduateCap  size={40} className='text-[#8750f7]'/> My Education</h1>
                <div className='bg-[#140C1C] hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2021 - 2023</h4>
                    <h2 className='text-white'>Master of Computer Application</h2>
                    <p className='text-white'>Mumbai University</p>
                </div>
                <div className='bg-[#140C1C] hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2018 - 2021</h4>
                    <h2 className='text-white'>Bachelor of Computer Science</h2>
                    <p className='text-white'>Mumbai University</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume