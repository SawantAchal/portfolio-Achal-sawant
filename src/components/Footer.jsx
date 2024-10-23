import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='bg-[#0F0715] flex flex-col justify-center items-center pt-10 gap-8 text-white'>
            <h1 className='text-3xl'>ACHAL SAWANT </h1>
            <ul className='flex gap-10'>
                <li>Home.</li>
                <li>Work.</li>
                <li>Resume.</li>
                <li>Skills.</li>
            </ul>
            <p>&copy; 2024 All Rights Reserved by AchalSawant</p>
        </footer>
    </>
  )
}

export default Footer