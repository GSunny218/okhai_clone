import React from 'react';
import H1 from "../../assets/company/home_p1.avif";
import H2 from "../../assets/company/home_p2.avif";

const Home = () => {
    return (
        <>
            <div className='h-80 w-250 text-xs grid grid-cols-6 gap-2 p-3 font-serif overflow-scroll snap-y overflow-x-hidden'>
                <div className='grid grid-row-1 gap-3'>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm cursor-pointer'>Home Decor</div>
                        <div className='cursor-pointer'>Furniture</div>
                        <div className='cursor-pointer'>Lightings</div>
                        <div className='cursor-pointer'>Planters & Vascs</div>
                        <div className='cursor-pointer'>Seating</div>
                        <div className='cursor-pointer'>Storage</div>
                        <div className='cursor-pointer'>Table Tops</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm'>Collections</div>
                        <div className='cursor-pointer'>Basketry</div>
                        <div className='cursor-pointer'>Handblock Print - Home</div>
                        <div className='cursor-pointer'>Macrame - Home</div>
                        <div className='cursor-pointer'>Crochlet Home</div>
                        <div className='cursor-pointer'>Hand Painting - Home</div>
                        <div className='cursor-pointer'>Blue Pottery - Home</div>
                        <div className='cursor-pointer'>Metal Craft - Home</div>
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm cursor-pointer'>Wall Decor</div>
                        <div className='cursor-pointer'>Hoops</div>
                        <div className='cursor-pointer'>Wall Hanging</div>
                        <div className='cursor-pointer'>Wall Plates</div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='font-bold text-sm cursor-pointer'>Home Furnishing</div>
                    <div className='cursor-pointer'>Baskets</div>
                    <div className='cursor-pointer'>Bedcovers</div>
                    <div className='cursor-pointer'>Curtains</div>
                    <div className='cursor-pointer'>Cushion Covers</div>
                    <div className='cursor-pointer'>Rugs & Mats</div>
                    <div className='cursor-pointer'>Throw & Quihs</div>
                    <div className='cursor-pointer'>Utility Bags & Pouches</div>
                </div>
                <div className='space-y-2'>
                    <div className='font-bold text-sm cursor-pointer'>Kitchen & Dining</div>
                    <div className='cursor-pointer'>Apron</div>
                    <div className='cursor-pointer'>Drinkwate</div>
                    <div className='cursor-pointer'>Kitchenware</div>
                    <div className='cursor-pointer'>Serveware</div>
                    <div className='cursor-pointer'>Table Linen</div>
                    <div className='cursor-pointer'>Trays & Platters</div>
                    <div className='cursor-pointer'>Bath</div>
                </div>
                <div>
                    <img src={H1} alt="Home Banner 1" className='cursor-pointer' />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Handmade Cushions</div>
                </div>
                <div>
                    <img src={H2} alt="Home Banner 2" className='cursor-pointer' />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Home Decor</div>
                </div>
            </div>
        </>
    );
}
export default Home;