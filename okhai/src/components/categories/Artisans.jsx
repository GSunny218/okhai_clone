import React from 'react';
import Ar1 from "../../assets/company/artisans_p1.avif";
import Ar2 from "../../assets/company/artisans_p2.avif";

const Artisans = () => {
    return (
        <>
            <div className='h-80 w-250 text-xs grid grid-cols-6 gap-2 p-2 font-serif overflow-scroll snap-y overflow-x-hidden'>
                <div className='grid grid-row-1 gap-3'>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm cursor-pointer'>Embroidery</div>
                        <div className='cursor-pointer'>Okhai</div>
                        <div className='cursor-pointer'>Shrujan</div>
                        <div className='cursor-pointer'>Porgai</div>
                        <div className='cursor-pointer'>Urmul</div>
                        <div className='cursor-pointer'>Bebaak</div>
                        <div className='cursor-pointer'>Onset Homes</div>
                        <div className='cursor-pointer'>Dhaaga Handcrafts</div>
                        <div className='cursor-pointer'>Sadhna</div>
                        <div className='cursor-pointer'>Whitewater Kids</div>
                        <div className='cursor-pointer'>Rangsutra</div>
                        <div className='cursor-pointer'>Leera</div>
                        <div className='cursor-pointer'>Chambray</div>
                        <div className='cursor-pointer'>Soleilclo</div>
                        <div className='cursor-pointer'>Samuday Craft</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm'>Metal Craft</div>
                        <div className='cursor-pointer'>Studio Coppre</div>
                        <div className='cursor-pointer'>Silver Linigs</div>
                        <div className='cursor-pointer'>Anantaya Decor</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm'>Chikankari</div>
                        <div className='cursor-pointer'>Phae</div>
                        <div className='cursor-pointer'>Shwet</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm'>Basketry</div>
                        <div className='cursor-pointer'>Kadam Haat</div>
                        <div className='cursor-pointer'>Kraftribe</div>
                        <div className='cursor-pointer'>Pine Cone</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm'>Eco Printing</div>
                        <div className='cursor-pointer'>Mulya</div>
                        <div className='cursor-pointer'>Bageeya</div>
                    </div>
                </div>
                <div className='grid grid-row-1 gap-4'>
                    <div className='grid grid-cols-1'>
                        <div className='font-bold text-sm cursor-pointer'>Handblock Printing</div>
                        <div className='cursor-pointer'>Sooti Syahi</div>
                        <div className='cursor-pointer'>Silver Necpieces</div>
                        <div className='cursor-pointer'>Bracelets, Anklets & Rings</div>
                    </div>
                    <div className='grid grid-cols-1 gap-2'>
                        <div className='font-bold text-sm cursor-pointer'>Collections</div>
                        <div className='cursor-pointer'>Hand Embroidery</div>
                        <div className='cursor-pointer'>Accessories</div>
                        <div className='cursor-pointer'>Crochet - Accessories</div>
                        <div className='cursor-pointer'>Dokra - Accessories</div>
                        <div className='cursor-pointer'>Black Pottery</div>
                        <div className='cursor-pointer'>Upcycling and Recycling</div>
                    </div>
                </div>
                <div className='grid grid-row-1 gap-2'>
                    <div className='font-bold text-sm cursor-pointer'>Other Accessories</div>
                    <div className='cursor-pointer'>Key Chains</div>
                    <div className='cursor-pointer'>Spec chain</div>
                    <div className='cursor-pointer'>Aprons</div>
                    <div className='cursor-pointer'>Dupattas</div>
                    <div className='cursor-pointer'>Hair Accessories</div>
                    <div className='cursor-pointer'>Hats</div>
                    <div className='cursor-pointer'>Footwear</div>
                    <div className='cursor-pointer'>Masks</div>
                    <div className='cursor-pointer'>Stoles</div>
                    <div className='cursor-pointer'>Winter Accessories</div>
                </div>
                <div>
                    <div className='font-bold text-sm cursor-pointer'>Jewellery Under 1500</div>
                    <div className='font-bold text-sm mt-3 cursor-pointer'>Accessories Under 1500</div>
                    <div className='font-bold text-sm mt-3 cursor-pointer'>Gifts Under 1500</div>
                </div>
                <div>
                    <img src={Ar1} alt="Artisans Banner 1" className='cursor-pointer ' />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Serveware</div>
                </div>
                <div>
                    <img src={Ar2} alt="Artisans Banner 2" className='cursor-pointer mr-3' />
                    <div className='font-bold text-sm mt-2 cursor-pointer'>Baskets</div>
                </div>
            </div>
        </>
    );
}
export default Artisans;