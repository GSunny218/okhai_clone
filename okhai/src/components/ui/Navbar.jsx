import React, { useState, useEffect } from 'react';
import OkhaiLogo from '../../assets/okhaiLogo.avif';
import '../../global.css';
import SearchIcon from '../../assets/search-icon.png';
import PersonIcon from '../../assets/person-icon.png';
import BagIcon from '../../assets/bag-icon.jpg';
import Accessories from '../categories/Accessories';
import Clothing from '../categories/Clothing';
import Kurtas from '../categories/Kurtas';
import Sarees from '../categories/Sarees';
import Home from '../categories/Home.jsx';
import Gifting from '../categories/Gifting.jsx';
import Artisans from '../categories/Artisans.jsx';
import SaleAll from '../categories/SaleAll.jsx';
import Slidebar from './SlideBar';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../utilies/searchBar.jsx';

const Navbar = () => {
    // const navigate = useNavigate();
    // const handleSlideBarClick = () => {
    //     navigate('/SlideBar');
    // }
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
    }, []);

    return (
        <>
            <div>
                <nav  className='bg-white border-b-4 border-black sm:h-100 md:h-100 lg:h-60 xl:h-60 fixed top-0 w-screen z-50 navbar'>
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
                    <div className='flex flex-row justify-between mr-12'>
                        <div className='flex flex-row p-3'>

                            <div className='lg:hidden md:block pt-2 pl-2'>
                                <div className='text-4xl text-gray-400 hover:cursor-pointer' >&#9776;</div>
                                {/* <Slidebar /> */}
                            </div>

                            <div className='ml-14'>
                                <img className='lg:h-21 md:h-14 sm:h-11 sm:mt-5 sm:ml-2 w-auto' src={OkhaiLogo} alt="Okhai Logo" />
                            </div>
                        </div>
                        {/* Navigation links here */}
                        <div className='flex flex-row p-3 space-x-4 items-center'>
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
                        <SearchBar />
                    </div>
                    {/* Search bar for mobile ends here*/}

                    {/* Category menu starts here */}
                    <div>
                        <div className='flex flex-row h-12 m-3 gap-x-25 text-lg category-menu justify-center pt-3'>
                            <details>
                                <summary>CLOTHING</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    <Clothing />
                                </div>
                            </details>
                            <details>
                                <summary>KURTAS</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    <Kurtas />
                                </div>
                            </details>
                            <details>
                                <summary>SAREES</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    <Sarees />
                                </div>
                            </details>
                            <details>
                                <summary>ACCESSORIES</summary>
                                <div className='absolute  mt-2 p-4 bg-white shadow-lg inset-x-40'>
                                    <Accessories />
                                </div>
                            </details>
                            <details>
                                <summary>HOME</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg inset-x-30'>
                                    <Home />
                                </div>
                            </details>
                            <details>
                                <summary>GIFTING</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg inset-x-30'>
                                    <Gifting />
                                </div>
                            </details>
                            <details>
                                <summary>ARTISANS</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg inset-x-30'>
                                    <Artisans />
                                </div>
                            </details>
                            <details>
                                <summary>SALE ALL</summary>
                                <div className='absolute mt-2 p-4 bg-white border-2 border-black shadow-lg'>
                                    <SaleAll />
                                </div>
                            </details>
                        </div>
                    </div>
                    {/* Category menu ends here */}
                </nav>
            </div>
        </>
    );
};
export default Navbar;