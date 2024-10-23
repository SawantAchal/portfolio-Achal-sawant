import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import img from '../assets/img1.webp'

const Main = () => {
  return (
    <>
        <main className='m-40 flex justify-between '>
            <div className='flex gap-5 flex-col'>
                <div className=''>
                    <h3 className='text-white text-5xl'>I am Achal</h3>
                    <h1 className='text-7xl bg-gradient-to-r from-indigo-900 to-purple-100 bg-clip-text text-transparent'>Web Developer +</h1>
                    <h1 className='text-7xl bg-gradient-to-r from-indigo-900 to-purple-100 bg-clip-text text-transparent'>UX Designer</h1>
                    <pre className='text-white text-lg'>
                        I break down complex user experience problems to<br/>
                        create integrity focussed solutions that connect <br/>
                        billions of people.
                    </pre>
                </div>
                <div className='flex gap-5 cursor-pointer items-center'>
                    <button className='w-48 flex justify-center items-center gap-3 border border-purple-500 text-purple-500  p-4 rounded-full hover:bg-purple-500 hover:text-white'>Download CV <MdOutlineFileDownload size={22}/></button>
                    <FaLinkedinIn className='rounded-full text-5xl border p-2 text-purple-500 border-purple-500 w-[35px] h-[35px] hover:bg-purple-500 hover:text-white'/>
                    <IoLogoGithub className='rounded-full text-5xl border p-2 text-purple-500 border-purple-500 w-[35px] h-[35px] hover:bg-purple-500 hover:text-white'/>
                </div>
            </div>
            <div >
                <img src={img} className='border border-purple-950 rounded-3xl h-[28rem] hover:border-purple-500 transform rotate-6 hover:rotate-0 transition-transform duration-500 '/>
            </div>
        </main>
    </>
  )
}

export default Main