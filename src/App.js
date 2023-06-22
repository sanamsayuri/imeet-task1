import React from 'react';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import Contact from './components/Contact';




function App() {
  return (
      <>
      
      <Router>
      <div className='flex flex-col h-screen justify-between'>
      <Navbar />
        <Routes>
        <Route exact  path="/" element={<Hero />} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
        </div>
       
        </Router>
      
    
      </>
  );
}

export default App;
