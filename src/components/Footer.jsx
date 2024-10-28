import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
        <footer className={` ${theme === 'light' ? 'bg-[#2a1454] ' : ' bg-[#140C1C] ' } flex flex-col justify-center items-center pt-10 gap-8 text-white pb-5`}>
            <h1 className='text-3xl'>ACHAL SAWANT </h1>
            <ul className='grid grid-cols-3 md:grid-cols-4 md:gap-10 gap-3'>
                <li>Home.</li>
                <li>Work.</li>
                <li>Resume.</li>
                <li>Skills.</li>
            </ul>
            <p className='text-center text-[#8750F7]'>&copy; 2024 All Rights Reserved by AchalSawant</p>
        </footer>
    </>
  )
}

export default Footer