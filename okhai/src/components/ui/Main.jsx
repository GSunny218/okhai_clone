import React, { useState, useEffect } from 'react';
import FPIMG1 from '../../assets/company/firstPageimgs/fpimg.webp';
import FPIMG2 from '../../assets/company/firstPageimgs/fpimg1.webp';
import FPIMG3 from '../../assets/company/firstPageimgs/fpimg2.webp';
import FPIMG4 from '../../assets/company/firstPageimgs/fpimg3.webp';
import FPIMG5 from '../../assets/company/firstPageimgs/fpimg4.webp';
import WE from '../../assets/company/firstPageimgs/WE_img.avif';
import CF from '../../assets/company/firstPageimgs/CF_img.webp';
import SUS from '../../assets/company/firstPageimgs/SUS_img.avif';
import HC from '../../assets/company/firstPageimgs/HC_img.avif';
import ER from '../../assets/company/firstPageimgs/ER_img.avif';
import DC from '../../assets/company/firstPageimgs/dressesCollection.webp';
import KC from '../../assets/company/firstPageimgs/kurtasCollection.webp';
import WWC from '../../assets/company/firstPageimgs/winterWearCollection.webp';
import JC from '../../assets/company/firstPageimgs/jewellaryCollection.webp';

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
                <div className='flex flex-col items-center justify-center gap-4 p-2'>
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
                <div className='flex flex-row items-center justify-center gap-20 mt-1'>
                    <figure className='flex flex-col items-center justify-center'>
                        <img src={WE} alt="" />
                        <figcaption className='text-[11px] text-black font-serif mt-1  font-thin'>Women Empowerment</figcaption>
                    </figure>
                    <figure className='flex flex-col items-center justify-center'>
                        <img src={CF} alt="" />
                        <figcaption className='text-[11px] text-black font-serif mt-1 font-thin'>Cirular Fashion</figcaption>
                    </figure>
                    <figure className='flex flex-col items-center justify-center'>
                        <img src={SUS} alt="" />
                        <figcaption className='text-[11px] text-black font-serif mt-1 font-thin'>Sustainable</figcaption>
                    </figure>
                    <figure className='flex flex-col items-center justify-center'>
                        <img src={HC} alt="" />
                        <figcaption className='text-[11px] text-black font-serif mt-1 font-thin'>Heirloom Crafts</figcaption>
                    </figure>
                    <figure className='flex flex-col items-center justify-center'>
                        <img src={ER} alt="" />
                        <figcaption className='text-[11px] text-black font-serif mt-1 font-thin'>Easy Returns</figcaption>
                    </figure>
                </div>
            </section>
            <section className='mt-10'>
                <div>
                    <h1 className='text-center text-2xl tracking-wide font-serif'>Collections</h1>
                </div>
                <div className='flex flex-row justify-evenly mt-10'>
                    <figure>
                        <img src={DC} className='h-95' alt="" />
                        <figcaption className='text-lg text-gray-600 font-serif mt-1 font-thin text-center'>Dresses</figcaption>
                    </figure>
                    <figure>
                        <img src={KC} className='h-95' alt="" />
                            <figcaption className='text-lg text-gray-600 font-serif mt-1 font-thin text-center'>Kurtas</figcaption>
                    </figure>
                    <figure>
                        <img src={WWC} className='h-95'  alt="" />
                        <figcaption className='text-lg text-gray-600 font-serif mt-1 font-thin text-center'>Winter Wear</figcaption>
                    </figure>
                    <figure>
                        <img src={JC} className='h-95' alt="" />
                        <figcaption className='text-lg text-gray-600 font-serif mt-1 font-thin text-center'>Jewellery</figcaption>
                    </figure>
                </div>
            </section>
        </main>
        </>
    );
}
export default Main;