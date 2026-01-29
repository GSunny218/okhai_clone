import React from 'react';
const FiltersSideBar = () => {
    return (
        <>
            <aside className='mt-4 flex flex-col gap-6 p-4'>
                <h3 className='text-orange-400'>FILTERS</h3>
                <div className='flex flex-col gap-6'>
                    <div>PRICE</div>
                    <div>PRODUCT TYPE</div>
                    <div>CRAFT</div>
                    <div>MATERIAL</div>
                    <div>GENDER</div>
                    <div>COLOR</div>
                </div>
            </aside>
        </>
    );
}
export default FiltersSideBar;