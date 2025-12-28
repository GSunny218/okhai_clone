import React, { useState, useEffect } from 'react';
import OkhaiLogo from '../assets/okhaiLogo.avif';
import '../global.css';
import SearchIcon from '../assets/search-icon.png';
import PersonIcon from '../assets/person-icon.png';
import BagIcon from '../assets/bag-icon.jpg';
import Accessories from './categories/Accessories';

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
            <div>
                <nav  className='bg-white border-b-4 border-black h-auto fixed top-0 w-screen z-50'>
                    {/* Taglines start here*/}
                    <div className='pt-0.5 overflow-hidden'>
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
                                <div className='text-4xl text-gray-400 hover:cursor-pointer'>&#9776;</div>
                            </div>
                            <div className='ml-4'>
                                <img className='lg:h-21 md:h-14 sm:h-11 sm:mt-5 sm:ml-2 w-auto' src={OkhaiLogo} alt="Okhai Logo" />
                            </div>
                        </div>
                        {/* Navigation links here */}
                        <div className='flex flex-row p-4 space-x-4 items-center'>
                            <div>
                                <img className='h-7  search-icon hover:cursor-pointer' src={SearchIcon} alt="Search Icon" />
                            </div>
                            <div>
                                <img className='h-7 hover:cursor-pointer' src={PersonIcon} alt="Person Icon" />
                            </div>
                            <div>
                                <div className='text-4xl hover:cursor-pointer'>&#9829;</div>
                            </div>
                            <div>
                                <img className='h-7 bg-white hover:cursor-pointer' src={BagIcon} alt="Bag Icon" />
                            </div>
                        </div>
                    </div>
                    {/* Navbar container end here */}

                    {/* Search bar for mobile starts here*/}
                    <div>
                        <div className='flex flex-row align-middle justify-center border-2 border-black h-12 m-3 lg:hidden'>
                            <img src={SearchIcon} className='h-6 mt-2 ml-2' alt="Search Icon" />
                            <input type="text" className='border border-none p-2 w-screen relative flex flex-row justify-stretch m-3 active' placeholder='Search items'/>
                        </div>
                    </div>
                    {/* Search bar for mobile ends here*/}

                    <div>
                        <div className='flex flex-row h-12 m-3 space-x-25 text-lg category-menu justify-center pt-3'>
                            <details>
                                <summary>CLOTHING</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                            <details>
                                <summary>KURTAS</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                            <details>
                                <summary>SAREES</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    
                                </div>
                            </details><details>
                                <summary>ACCESSORIES</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    <Accessories />
                                </div>
                            </details><details>
                                <summary>HOME</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                            <details>
                                <summary>GIFTING</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                            <details>
                                <summary>ARTISANS</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                            <details>
                                <summary>SALE ALL</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    regesgsrh
                                </div>
                            </details>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};
export default Navbar;