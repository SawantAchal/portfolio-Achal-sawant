import React, { useContext } from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <>
        <main className={`${theme === 'light' ? 'bg-white' : 'bg-[#050709] '} flex flex-col-reverse md:flex-row justify-around  gap-5 pt-8 md:pt-20 pb-8 lg:pl-52`}>
            <div className={`flex-1 px-8 pt-9 md:pt-0 ${theme === 'light' ? 'bg-[#f6f3fc]' : 'bg-[#140C1C]'}  m-3 rounded-3xl py-5`}>
                <h1 className={`text-3xl ${theme === 'light' ? 'bg-gradient-to-r from-[#8750f7] to-[#2a1454] ' : 'bg-gradient-to-r from-[#8750f7] to-white'} bg-clip-text text-transparent mb-4 pt-9`}>Let’s work together!</h1>
                <p className={`${theme === 'light' ? 'text-black':'text-white'} mb-8`}>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <form className='space-y-6'>
                    <div className='flex md:flex-row flex-col md:space-x-4 gap-5 md:gap-0'>
                        <input type='text' placeholder='First name' className={` ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} w-full p-2  border border-gray-600 rounded-md `}/>
                        <input type='text' placeholder='Last name' className={` ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} w-full p-2  border border-gray-600 rounded-md `}/>
                    </div>
                    <div className='flex md:flex-row flex-col md:space-x-4 gap-5 md:gap-0'>
                        <input type='email' placeholder='Email address' className={` ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} w-full p-2  border border-gray-600 rounded-md `}/>
                        <input type='tel' placeholder='Phone number' className={` ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} w-full p-2  border border-gray-600 rounded-md `}/>
                    </div>
                    <div className='relative w-full'>
                        <select className={`w-full p-2 ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} border border-[#050709] rounded-md appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}>
                            <option disabled selected className="text-gray-500">—Please choose an option—</option>
                            <option>Web Design</option>
                            <option>UI/UX Design</option>
                            <option>Frontend Developer</option>
                        </select>
                    </div>
                    <textarea placeholder='Message' rows={5} className={` ${theme === 'light' ? 'bg-white text-gray-400 ' : 'bg-[#050709] text-white'} w-full p-2  border border-gray-600 rounded-md`}/>
                    <button className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] p-3 rounded-full text-white w-36'>Send Message</button>
                </form>
            </div>
            <div className=' flex-1 flex flex-col gap-10 text-white justify-center px-8'>
                <a href="tel:+917798620210" target="_blank" rel="noreferrer" aria-label="phone">
                    <div className='flex items-center gap-5'>
                        <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                            <LuPhoneCall />
                        </div>
                        <div>
                            <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>Phone</p>
                            <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>+91 - 7798620210</p>
                        </div>
                    </div>
                </a>
                <a href="mailto:achals1718@gmail.com" target="_blank" rel="noreferrer" aria-label="phone">
                    <div className='flex items-center gap-5'>
                        <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                            <IoMailOutline />
                        </div>
                        <div>
                            <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>Email</p>
                            <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>achals1718@gmai.com</p>
                        </div>
                    </div>
                </a>
                <div className='flex items-center gap-5'>
                    <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>Address</p>
                        <p className={`${theme === 'light'  ? 'text-[#140C1C]' : 'text-[#DDDDDD] ' }`}>Thane, Maharashtra</p>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Contact