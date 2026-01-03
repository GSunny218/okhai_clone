import React from 'react';
import SearchIcon from '../../assets/search-icon.png';
import '../../global.css';

const SearchBar = () => {
    return (
        <>
            <div className='flex flex-row align-middle justify-center border-2 border-black h-12 m-3 lg:hidden'>
                <img src={SearchIcon} className='h-6 mt-2 ml-2' alt="Search Icon" />
                <input type="text" className='border-0 bg-transparent outline-0 p-2 m-1 w-screen' placeholder='Search items'/>
            </div>
        </>
    );
}
export default SearchBar;