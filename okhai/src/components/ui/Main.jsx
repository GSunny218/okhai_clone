import React, { useState, useEffect } from 'react';
import FPIMG1 from '../../assets/company/firstPageimgs/fpimg.webp';
import FPIMG2 from '../../assets/company/firstPageimgs/fpimg1.webp';
import FPIMG3 from '../../assets/company/firstPageimgs/fpimg2.webp';
import FPIMG4 from '../../assets/company/firstPageimgs/fpimg3.webp';
import FPIMG5 from '../../assets/company/firstPageimgs/fpimg4.webp';

const Main = () => {
    const images = [FPIMG1, FPIMG2, FPIMG3, FPIMG4, FPIMG5];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change the image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
        <main>
            <section>
                <div className='flex flex-col items-center justify-center gap-4 p-4'>
                    <div className='relative w-full overflow-hidden'>
                        <img 
                            key={currentIndex}
                            src={images[currentIndex]} 
                            alt="Featured" 
                            className='w-full animate-fadeIn transition-all duration-700 ease-in-out'
                        />
                    </div>
                    <style>{`
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateX(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateX(0);
                            }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 0.7s ease-in-out;
                        }
                    `}</style>
                    <div className='flex w-full justify-between items-center px-4'>
                        <button 
                            onClick={handlePrevImage}
                            className='z-10 relative -top-75 text-white rounded transition-colors font-semibold'
                        >
                            <img src="https://cdn.shopify.com/s/files/1/2116/1923/files/left.svg?v=1717248364" alt="" />
                        </button>
                        <button 
                            onClick={handleNextImage}
                            className='z-10 relative -top-75 text-white rounded transition-colors font-semibold'
                        >
                            <img src="https://cdn.shopify.com/s/files/1/2116/1923/files/arrow_c3300d2c-1f15-48e2-aa46-f73950bea81d.svg?v=1717245535" alt="" />
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center justify-center gap-4 p-4 mt-10'></div>
            </section>
        </main>
        </>
    );
}
export default Main;