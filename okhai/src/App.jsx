import React from 'react';
import './global.css';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import Main from './components/ui/Main.jsx';
import AllClothing from './components/collections/Clothing/products/women/all-clothing.jsx';
import FashoinJewellery from './components/collections/Accessories/FashoinJewellery/page.jsx';

function App() {

  return (
    <>
      <Navbar />
      {/* <div className='absolute top-48 left-0'>
      
      </div> */}
      <div className='absolute top-48 left-0'>
        {/* <Main /> */}
        {/* <AllClothing /> */}
        <FashoinJewellery />
        <Footer />
      </div>
    </>
  );
}

export default App;
