import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { FaArrowUp } from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from '../context/ThemeContext';

const HomePage = ({ scrollToSection, refs, activeSection }) => {
    const [showArrow, setShowArrow] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = window.innerHeight / 2;
            setShowArrow(window.scrollY > scrollThreshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <main className={`relative w-full lg:h-screen ${theme === 'light' ? 'bg-white' : 'bg-[#140c1c]'}`}>
                {/* SVG Background */}
                <div className="absolute inset-0 z-0">
                    <svg width="100%" height="100%" className="absolute inset-0 hidden lg:block">
                        <text x="50%" y="50%" textAnchor="middle" className="animate-stroke animate-zoom text-[15rem] fill-transparent stroke-[#2a1454] stroke-[2px]" style={{ dominantBaseline: 'middle', transformOrigin: 'center' }}>
                            HI
                        </text>
                    </svg>
                </div>
                <div className="relative z-10">
                    <Navbar scrollToSection={scrollToSection} refs={refs} activeSection={activeSection} />
                    <Main refs={refs} />
                </div>

                {/* Theme toggle button */}
                <button onClick={toggleTheme} className="fixed bottom-20 right-5 p-3  border border-[#8750f7] rounded-full transition duration-300 z-50">
                    {theme === 'light' ? (
                        <BiMoon className="text-[#8750f7] text-2xl" />
                    ) : (
                        <BiSun className="text-[#8750f7] text-2xl" />
                    )}
                </button>

                {showArrow && (
                    <button onClick={scrollToTop} className="fixed bottom-5 right-5 border border-[#8750f7] text-[#8750f7] p-3 rounded-full transition duration-300 z-50" aria-label="Scroll to top">
                        <FaArrowUp className="text-xl" />
                    </button>
                )}
            </main>
        </>
    );
};

export default HomePage;

