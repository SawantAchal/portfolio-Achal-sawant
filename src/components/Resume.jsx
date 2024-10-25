import React from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import { GiGraduateCap } from "react-icons/gi";

const Resume = () => {
  return (
    <>
        <div className='bg-black pt-16 flex flex-col md:flex-row justify-around pb-16'>
            <div className='gap-10 flex flex-col justify-center items-center'>
                <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent md:text-3xl lg:text-4xl text-3xl flex gap-2 items-center'> <LiaCertificateSolid size={40} className='text-[#8750f7]'/> My Experience</h1>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
            </div>
            <div  className='gap-10 flex flex-col justify-center items-center pt-10 md:pt-0'>
            <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent md:text-3xl lg:text-4xl text-3xl flex gap-2 items-center'> <GiGraduateCap  size={40} className='text-[#8750f7]'/> My Education</h1>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
                <div className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 gap-2 rounded-2xl p-3 h-28 md:w-80 w-72 lg:w-96 transition-transform transform hover:scale-105'>
                    <h4 className='text-indigo-700 hover:text-white'>2022 - Present</h4>
                    <h2 className='text-white'>Lead Developer</h2>
                    <p className='text-white'>Blockdots, London</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume

// import React from 'react';

// const Resume = () => {
//   return (
//     <>
//       <div className='bg-black pt-16 flex flex-col md:flex-row justify-around pb-16 px-5'>
//         <div className='flex flex-col gap-10 w-full md:w-1/2'>
//           <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent text-6xl text-center md:text-left'>My Experience</h1>
          
//           {/* Experience Items */}
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 rounded-2xl p-6 h-32 transition-transform transform hover:scale-105'>
//               <h4 className='text-indigo-700'>{`2022 - Present`}</h4>
//               <h2 className='text-white text-xl font-semibold'>Lead Developer</h2>
//               <p className='text-white'>Blockdots, London</p>
//             </div>
//           ))}
//         </div>

//         <div className='flex flex-col gap-10 w-full md:w-1/2 mt-10 md:mt-0'>
//           <h1 className='bg-gradient-to-r from-violet-700 to-indigo-100 bg-clip-text text-transparent text-6xl text-center md:text-left'>My Education</h1>
          
//           {/* Education Items */}
//           {[...Array(4)].map((_, index) => (
//             <div key={index} className='bg-zinc-800 hover:bg-gradient-to-r from-purple-400 to-indigo-900 rounded-2xl p-6 h-32 transition-transform transform hover:scale-105'>
//               <h4 className='text-indigo-700'>{`2022 - Present`}</h4>
//               <h2 className='text-white text-xl font-semibold'>Bachelor of Science</h2>
//               <p className='text-white'>University of London</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Resume;
