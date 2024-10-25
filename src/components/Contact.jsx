import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <>
        <main className='bg-[#050709] flex flex-col-reverse md:flex-row justify-around pt-8 pb-8'>
            <div className='flex-1 px-8 pt-9 md:pt-0 bg-[#140C1C] m-3 rounded-3xl py-5'>
                <h1 className='text-3xl bg-gradient-to-r from-[#8750f7] to-white bg-clip-text text-transparent mb-4 pt-9'>Let’s work together!</h1>
                <p className='text-gray-400 mb-8'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                <form className='space-y-6'>
                    <div className='flex md:flex-row flex-col md:space-x-4 gap-5 md:gap-0'>
                        <input type='text' placeholder='First name' className='w-full p-2 bg-[#050709] text-white border border-gray-600 rounded-md'/>
                        <input type='text' placeholder='Last name' className='w-full p-2 bg-[#050709] text-white border border-gray-600 rounded-md'/>
                    </div>
                    <div className='flex md:flex-row flex-col md:space-x-4 gap-5 md:gap-0'>
                        <input type='email' placeholder='Email address' className='w-full p-2 bg-[#050709] text-white border border-gray-600 rounded-md'/>
                        <input type='tel' placeholder='Phone number' className='w-full p-2 bg-[#050709] text-white border border-gray-600 rounded-md'/>
                    </div>
                    <div className='relative w-full'>
                        <select className='"w-full p-2 bg-[#050709] text-white border border-[#050709] rounded-md appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500'>
                            <option disabled selected className="text-gray-500">—Please choose an option—</option>
                            <option>Branding Design</option>
                            <option>Web Design</option>
                            <option>UI/UX Design</option>
                            <option>App Design</option>
                        </select>
                    </div>
                    <textarea placeholder='Message' rows={5} className='w-full p-2 bg-[#050709] text-white border border-gray-600 rounded-md'/>
                    <button className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] p-3 rounded-full text-white w-36'>Send Message</button>
                </form>
            </div>
            <div className=' flex-1 flex flex-col gap-10 text-white justify-center px-8'>
                <div className='flex items-center gap-5'>
                    <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                        <LuPhoneCall />
                    </div>
                    <div>
                        <p className='text-[#DDDDDD]'>Phone</p>
                        <p>+91 - 7798620210</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                        <IoMailOutline />
                    </div>
                    <div>
                        <p className='text-[#DDDDDD]'>Phone</p>
                        <p>+91 - 7798620210</p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] h-12 w-12 flex justify-center items-center text-2xl'>
                        <CiLocationOn />
                    </div>
                    <div>
                        <p className='text-[#DDDDDD]'>Phone</p>
                        <p>+91 - 7798620210</p>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Contact