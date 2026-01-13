import React from 'react';
import './global.css';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import Main from './components/ui/Main.jsx';

function App() {

  return (
    <>
      <Navbar />
      <div className='absolute top-52 left-0'>
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App;
