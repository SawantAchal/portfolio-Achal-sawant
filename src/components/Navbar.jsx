import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around  items-center p-3 h-20'>
        <div>
          <h3 className='text-2xl'>ACHAL VITTHAL</h3>
        </div>
        <div className='flex gap-16 items-center'>
          <ul className='flex gap-8 items-center'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CONTACT</li>
          </ul>
          <button className='bg-gradient-to-r from-purple-400 to-indigo-900 p-3 rounded-full hover:bg-gradient-to-r hover:from-indigo-900 hover:to-purple-400'>Hire me!</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar