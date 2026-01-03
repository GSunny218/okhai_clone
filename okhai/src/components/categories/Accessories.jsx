import React from 'react';
import A1 from "../../assets/company/accessories_p1.avif";
import A2 from "../../assets/company/accessories_p2.avif";

const Accessories = () => {
  return (
    <>
        <div className='h-80 w-250 text-xs grid grid-cols-6 gap-2 p-3 font-serif'>
          <div className='grid grid-row-1 gap-3'>
            <div className='grid grid-cols-1 gap-0.5'>
              <div className='font-bold text-sm cursor-pointer'>Fashion Jewellery</div>
              <div className='cursor-pointer'>Earrings</div>
              <div className='cursor-pointer'>Neckpieces</div>
              <div className='cursor-pointer'>Bracelets, Anklets & Rings</div>
              <div className='cursor-pointer'>All Jewellery</div>
            </div>
            <div className='grid grid-cols-1 gap-0.5'>
              <div className='font-bold text-sm'>Bags</div>
              <div className='cursor-pointer'>Tote bags</div>
              <div className='cursor-pointer'>Laptop bags</div>
              <div className='cursor-pointer'>Pouches</div>
              <div className='cursor-pointer'>Handbags</div>
              <div className='cursor-pointer'>Clothes and Potlis</div>
              <div className='cursor-pointer'>Bucklets bags</div>
            </div>
          </div>
          <div className='grid grid-row-1 gap-4'>
            <div className='grid grid-cols-1'>
              <div className='font-bold text-sm cursor-pointer'>Silver Jewellery</div>
              <div className='cursor-pointer'>Earrings</div>
              <div className='cursor-pointer'>Silver Necpieces</div>
              <div className='cursor-pointer'>Bracelets, Anklets & Rings</div>
            </div>
            <div className='grid grid-cols-1 gap-0.5'>
              <div className='font-bold text-sm cursor-pointer'>Collections</div>
              <div className='cursor-pointer'>Hand Embroidery</div>
              <div className='cursor-pointer'>Accessories</div>
              <div className='cursor-pointer'>Crochet - Accessories</div>
              <div className='cursor-pointer'>Dokra - Accessories</div>
              <div className='cursor-pointer'>Black Pottery</div>
              <div className='cursor-pointer'>Upcycling and Recycling</div>
            </div>
          </div>
          <div className='grid grid-row-1 gap-0.5'>
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
            <img src={A1} alt="Accessories Banner 1" className='cursor-pointer' />
            <div className='font-bold text-sm mt-2 cursor-pointer'>Jewellery</div>
          </div>
          <div>
            <img src={A2} alt="Accessories Banner 2" className='cursor-pointer' />
            <div className='font-bold text-sm mt-2 cursor-pointer'>Handcrafted Bags</div>
          </div>
        </div>
    </>
  );
}

export default Accessories;