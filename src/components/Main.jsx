import React, { useContext } from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import img from '../assets/img1.webp'
import {ThemeContext} from '../context/ThemeContext'

const Main = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <>
        <main className='flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-20 gap-10 md:gap-0 xl:m-12'>
            <div className='flex flex-col gap-5'>
                <div className='text-center md:text-left'>
                    <h3 className={`${theme === 'light' ? 'text-[#2a1454]' : 'text-white ' } text-2xl md:text-3xl lg:text-5xl`}>I am Achal</h3>
                    <h1 className={`${theme === 'light' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] ' : 'bg-gradient-to-r from-[#8750f7] to-white'} text-3xl md:text-4xl lg:text-7xl  bg-clip-text text-transparent`}>
                        Web Developer +
                    </h1>
                    <h1 className={`${theme === 'light' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] ' : 'bg-gradient-to-r from-[#8750f7] to-white'} text-3xl md:text-4xl lg:text-7xl  bg-clip-text text-transparent`}>
                        UI/UX Designer
                    </h1>
                    <pre className={`${theme === 'light' ? 'text-[#140C1C]' : 'text-white ' } text-[10px] md:text-sm pt-3  `}>
                        I break down complex user experience problems to<br/>
                        create integrity-focussed solutions that connect <br/>
                        billions of people.
                    </pre>
                </div>
                <div className='flex flex-col md:flex-row gap-5 items-center'>
                    <button onClick={() => {window.open("https://drive.google.com/file/d/1TiTPLFMJpf9g6kVFX1ZvahIlChRDRou3/view?usp=sharing")}} className='w-48 flex justify-center items-center gap-3 border border-purple-500 text-[#8750f7] p-4 rounded-full hover:bg-[#8750f7] hover:text-white'>
                        Download CV <MdOutlineFileDownload size={22}/>
                    </button>
                    <div className='flex gap-5'>
                        <a href='https://www.linkedin.com/in/achal-sawant-16853b210/' target="_blank" rel="noreferrer"><FaLinkedinIn className='rounded-full text-3xl md:text-5xl border p-2 text-[#8750f7] border-purple-500 w-[35px] h-[35px] hover:bg-[#8750f7] hover:text-white'/></a>
                        <a href="https://github.com/SawantAchal/" target="_blank" rel="noreferrer"><IoLogoGithub className='rounded-full text-3xl md:text-5xl border p-2 text-[#8750f7] border-purple-500 w-[35px] h-[35px] hover:bg-[#8750f7] hover:text-white'/></a>
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-0  md:block'>
                <img src={img} className='border border-[#8750f7] rounded-3xl h-[15rem] md:h-[20rem] lg:h-[28rem] hover:border-[#2a1454] transform rotate-6 hover:rotate-0 transition-transform duration-500'/>
            </div>
        </main>
    </>
  )
}

export default Main;


