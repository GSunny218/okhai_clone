import React from 'react';
import './global.css';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import Main from './components/ui/Main.jsx';
import AllClothing from './pages/women/all-clothing.jsx';

function App() {

  return (
    <>
      <Navbar />
      {/* <div className='absolute top-48 left-0'>
      <AllClothing />
      </div> */}
      <div className='absolute top-48 left-0'>
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
