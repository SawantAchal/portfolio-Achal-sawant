import React from 'react';
import figma from '../assets/figma.svg'
import css from '../assets/css.svg'
import github from '../assets/github2.svg'
import html from '../assets/html.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import js from '../assets/javascript.svg'

const Skills = () => {
    const skill = [
        { name: 'Figma', percent: '92%', iconSrc: figma}, 
        { name: 'HTML', percent: '90%', iconSrc: html },
        { name: 'CSS', percent: '85%', iconSrc: css},
        { name: 'JavaScript', percent: '93%', iconSrc: js},
        { name: 'ReactJs', percent: '89%', iconSrc: react },
        { name: 'Tailwind CSS', percent: '88%', iconSrc: tailwind },
        { name: 'Git', percent: '87%', iconSrc: github },
    ]

  return (
    <>
        <main className='bg-[#0F0715] py-10'>
            <h1 className='text-3xl text-white text-center mb-4'>My Skills</h1>
            <p className='text-white text-center mb-8'>
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </p>
            <div className='grid lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 p-6 justify-center'>
                {
                    skill.map((skill, index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <div className='rounded-2xl bg-slate-500 h-48 w-40 flex flex-col justify-center items-center transform transition duration-300 hover:scale-105 hover:bg-transparent hover:shadow-lg'>
                                <img src={skill.iconSrc} alt={skill.name} className='h-24 w-24 opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100'/>
                                <p className='text-white absolute top-4 right-4'>{skill.percent}</p>
                            </div>
                            <p className='text-indigo-500 mt-4'>{skill.name}</p>
                        </div>
                    ))
                }
            </div>
        </main>
    </>
  );
};

export default Skills;
