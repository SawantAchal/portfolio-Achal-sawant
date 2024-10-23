import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <>
        <main className="relative w-full h-screen bg-[#0F0715]">
            {/* SVG Background */}
            <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <text x="50%" y="50%" textAnchor="middle" className="animate-stroke animate-zoom text-[15rem] fill-transparent stroke-purple-400 stroke-[2px]" style={{   dominantBaseline: 'middle',   transformOrigin: 'center', }}>
                        HI
                    </text>
                </svg>
            </div>
            <div className="relative z-10">
                <Navbar />
            </div>
        </main>
    </>
  );
};

export default HomePage;
