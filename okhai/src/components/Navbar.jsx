import React, { useState, useEffect } from 'react';
import OkhaiLogo from '../assets/okhaiLogo.avif';
import '../global.css';
import SearchIcon from '../assets/search-icon.png';
import PersonIcon from '../assets/person-icon.png';
import BagIcon from '../assets/bag-icon.jpg';

const Navbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const taglines = [
        { text: 'Meticulously Designed & Handmade in Hierloom Indian Crafts.', bg: 'bg-orange-300' },
        { text: 'Get 10% off on your first purchase with code "WelcomeOkhai".T&C', bg: 'bg-red-600' },
        { text: 'Look Fabulous while Empowering Artisans.', bg: 'bg-blue-700' },
        { text: 'This season choose handmade.', bg: 'bg-sky-700' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [taglines.length]);

    return (
        <>
            <div className='bg-white height-600 border-4 border-black h-auto'>
                <nav>
                    {/* Taglines start here*/}
                    <div className='container pt-0.5'>
                        <div className='grouper'>
                            {taglines.map((tagline, i) => (
                                <div
                                    key={i}
                                    className={`w-screen tagline-item md:h-2 ${tagline.bg} ${i === currentIndex ? 'active' : 'hidden'}`}
                                >
                                    {tagline.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Taglines end here*/}

                    {/* Navbar container start here */}
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row p-4'>
                            <div className='lg:hidden md:block pt-2 pl-2'>
                                <div className='text-4xl text-gray-400'>&#9776;</div>
                            </div>
                            <div className='ml-4'>
                                <img className='lg:h-21 md:h-14 w-auto' src={OkhaiLogo} alt="Okhai Logo" />
                            </div>
                        </div>
                        {/* Navigation links here */}
                        <div className='flex flex-row p-4 space-x-6 items-center'>
                            <div>
                                <img className='h-7 search-icon' src={SearchIcon} alt="Search Icon" />
                            </div>
                            <div>
                                <img className='h-7' src={PersonIcon} alt="Person Icon" />
                            </div>
                            <div>
                                <div className='text-4xl'>&#9829;</div>
                            </div>
                            <div>
                                <img className='h-7 bg-white' src={BagIcon} alt="Bag Icon" />
                            </div>
                        </div>
                    </div>
                    {/* Navbar container end here */}

                    <div>
                        <input type="text" className='border border-black p-2 w-auto m-3 md:hidden' placeholder='Search items'/>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default Navbar;