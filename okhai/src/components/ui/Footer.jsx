import React from 'react'
import '../../global.css';

const Footer = () => {
    return (
        <>
            <footer className='footer h-100 px-20'>
                <div className='flex flex-row items-center justify-center gap-4 p-2 pt-10'>
                    <div className='font-serif text-white'>Stay in touch with us</div>
                    <div className='border-dashed border-1 p-[5px] border-white'>
                        <div className='flex flex-row p-2 bg-white h-10 w-60 justify-between items-center'>
                            <div className='flex-1 text-center text-gray-500 font-sans text-lg'>SIGN UP</div>
                            <div className='flex-none text-amber-400 text-[30px] hover:cursor-pointer'>&#8594;</div>
                        </div>
                    </div>
                </div>
                <div className='footer-2'>
                    <div></div>
                </div>
            </footer>
        </>
    );
}

export default Footer;