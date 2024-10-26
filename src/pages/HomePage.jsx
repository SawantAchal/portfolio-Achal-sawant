import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { FaArrowUp } from "react-icons/fa";

const HomePage = ({ scrollToSection, refs }) => {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            const scrollThreshold = window.innerHeight / 2;
            if (window.scrollY > scrollThreshold) {
                setShowArrow(true)
            } else {
                setShowArrow(false)
            }
        }
        window.addEventListener('scroll' , handleScroll);
        return () => window.removeEventListener('scroll' , handleScroll)
    },[]);

    const scrollToTop = () => {
        window.scrollTo({top:0 , behavior : 'smooth'})
    }

  return (
    <>
        <main className="relative w-full h-screen bg-[#140c1c]">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" className="absolute inset-0 hidden md:block">
                    <text x="50%" y="50%" textAnchor="middle" className="animate-stroke animate-zoom text-[15rem] fill-transparent stroke-purple-400 stroke-[2px]" style={{   dominantBaseline: 'middle',   transformOrigin: 'center', }}>
                        HI
                    </text>
                </svg>
            </div>
            <div className="relative z-10">
                <Navbar scrollToSection={scrollToSection} refs={refs}/>
                <Main />
            </div>
            {
                showArrow && (
                    <button onClick={scrollToTop} className='fixed bottom-5 right-5 border border-[#8750f7] text-[#8750f7] p-3 rounded-full transition duration-300 z-50' aria-label='Scroll to top'><FaArrowUp className='text-xl'/></button>
                )
            }
        </main>
    </>
  );
};

export default HomePage;