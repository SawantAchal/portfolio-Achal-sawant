// import React from 'react'
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";

// const Navbar = ({ scrollToSection, refs }) => {
//   return (
//     <>
//       <nav className='flex justify-around cursor-pointer items-center p-3 h-20 text-white'>
//         <div>
//           <h3 className='md:text-xl text-sm lg:text-2xl'>ACHAL SAWANT</h3>
//         </div>
//         <div className='flex md:gap-16 items-center gap-6'>
//           <ul className='md:flex lg:gap-8 gap-4 items-center hidden '>
//             <li onClick={() => scrollToSection(refs.mainRef)} className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
//               HOME
//             </li>
//             <li onClick={() => scrollToSection(refs.projectRef)} className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
//               PROJECT
//             </li>
//             <li onClick={() => scrollToSection(refs.resumeRef)} className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
//               RESUME
//             </li>
//             <li onClick={() => scrollToSection(refs.skillsRef)} className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
//               SKILLS
//             </li>
//             <li onClick={() => scrollToSection(refs.contactRef)} className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'>
//               CONTACT
//             </li>
//           </ul>
//           <button className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] lg:p-3 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7]'>
//             Hire me!
//           </button>
//           <HiOutlineBars3BottomRight className='text-4xl md:hidden'/>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar

// //toggle well
// import React, { useState } from 'react';
// import { HiOutlineBars3BottomRight } from "react-icons/hi2";
// import { IoClose } from "react-icons/io5"; // For the close button

// const Navbar = ({ scrollToSection, refs }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className='flex justify-around cursor-pointer items-center p-3 h-20 text-white'>
//         <div>
//           <h3 className='md:text-xl text-sm lg:text-2xl'>ACHAL SAWANT</h3>
//         </div>
//         <div className='flex md:gap-16 items-center gap-6'>
//           {/* Desktop Menu */}
//           <ul className='md:flex lg:gap-8 gap-4 items-center hidden '>
//             {['HOME', 'PROJECT', 'RESUME', 'SKILLS', 'CONTACT'].map((section, index) => (
//               <li
//                 key={index}
//                 onClick={() => scrollToSection(refs[`${section.toLowerCase()}Ref`])}
//                 className='relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500'
//               >
//                 {section}
//               </li>
//             ))}
//           </ul>
//           <button className='bg-gradient-to-r from-[#8750f7] to-[#2a1454] lg:p-3 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7]'>
//             Hire me!
//           </button>
//           {/* Mobile Menu Toggle Icon */}
//           <HiOutlineBars3BottomRight
//             className='text-4xl md:hidden'
//             onClick={toggleSidebar}
//           />
//         </div>
//       </nav>

//       {/* Sidebar for Mobile */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center text-white space-y-8 p-8 transition-transform duration-300">
//           <IoClose
//             className="text-4xl self-end cursor-pointer"
//             onClick={toggleSidebar}
//           />
//           <ul className="flex flex-col gap-6 text-xl">
//             {['HOME', 'PROJECT', 'RESUME', 'SKILLS', 'CONTACT'].map((section, index) => (
//               <li
//                 key={index}
//                 onClick={() => {
//                   scrollToSection(refs[`${section.toLowerCase()}Ref`]);
//                   toggleSidebar();
//                 }}
//                 className='relative pb-2'
//               >
//                 {section}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Scroll Event Handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight / 2;
      setIsFixed(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-around items-center p-3 h-20 text-white cursor-pointer
          ${isFixed ? 'fixed top-0 w-full bg-black bg-opacity-90 shadow-lg' : 'relative bg-transparent'}`}
      >
        <div>
          <h3 className="md:text-xl text-sm lg:text-2xl">ACHAL SAWANT</h3>
        </div>

        <div className="flex items-center gap-6">
          <ul className={`flex flex-col md:flex-row md:gap-16 gap-4 items-center 
                         ${isOpen ? 'flex' : 'hidden md:flex'} 
                         absolute md:static top-20 left-0 w-full bg-black bg-opacity-80 md:bg-transparent text-center md:text-left p-8 md:p-0 z-50`}>
            {['HOME', 'PROJECT', 'RESUME', 'SKILLS', 'CONTACT'].map((section, index) => (
              <li
                key={index}
                onClick={() => {
                  scrollToSection(refs[`${section.toLowerCase()}Ref`]);
                  setIsOpen(false);
                }}
                className="relative pb-2 hover:before:w-full before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-gradient-to-r before:from-purple-400 before:to-indigo-900 before:transition-all before:duration-500"
              >
                {section}
              </li>
            ))}
          </ul>

          <button className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] lg:p-3 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#2a1454] hover:to-[#8750f7] md:w-40 w-24">
            Hire me!
          </button>

          {/* Toggle button */}
          <div className="md:hidden">
            {isOpen ? (
              <IoClose className="text-4xl" onClick={toggleSidebar} />
            ) : (
              <HiOutlineBars3BottomRight className="text-4xl" onClick={toggleSidebar} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
