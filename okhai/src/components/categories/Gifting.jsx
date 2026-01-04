import React from 'react';
import G1 from '../../assets/company/gifting_p1.avif';
import G2 from '../../assets/company/gifting_p2.avif';
import G3 from '../../assets/company/gifting_p3.avif';
import G4 from '../../assets/company/gifting_p4.avif';
import G5 from '../../assets/company/gifting_p5.avif';

const Gifting = () => {
    return (
        <>
            <div className='h-80 w-250 text-xs grid grid-cols-6 gap-2 p-3 font-serif overflow-scroll snap-y overflow-x-hidden'>
                <div className='grid grid-row-1 gap-3'>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm cursor-pointer'>Gifts</div>
                        <div className='cursor-pointer'>Gifts For Her</div>
                        <div className='cursor-pointer'>Gifts For Him</div>
                        <div className='cursor-pointer'>Toys & Dolls</div>
                        <div className='cursor-pointer'>Games & Puzzles</div>
                        <div className='cursor-pointer'>Charms</div>
                        <div className='cursor-pointer'>DIY Kits</div>
                        <div className='cursor-pointer'>Stationery</div>
                        <div className='cursor-pointer'>Secret Santa</div>
                        <div className='cursor-pointer'>Gifts Under 1500</div>
                        <div className='cursor-pointer'>Gifts Under 2500</div>
                        <div className='cursor-pointer'>Gifts Under 5000</div>
                        <div className='cursor-pointer'>Festive Gifting</div>
                    </div>
                </div>
                <div className='mr-3 ml-3'>
                    <img src={G1} className='h-64' alt="" />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Artisanal Gifts</div>
                </div>
                <div className='mr-3 ml-3'>
                    <img src={G2} className='h-64' alt="" srcset="" />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Gift Cards</div>
                </div>
                <div className='mr-3 ml-3'>
                    <img src={G3} className='h-64' alt="" />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Suitable Toys</div>
                </div>
                <div className='mr-3 ml-3'>
                    <img src={G4} className='h-64' alt="" />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Charms</div>
                </div>
                <div className='mr-3 ml-3'>
                    <img src={G5} className='h-64' alt="" />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Festive Gifting</div>
                </div>
            </div>
        </>
    );
}
export default Gifting;