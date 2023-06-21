import React from 'react';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';



function App() {
  return (
      <>
      <div className='flex flex-col h-screen justify-between'>
      <Navbar />
         <Hero  />
        <Footer />
      </div>
    
     </>
  );
}

export default App;
