import React from 'react';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Route,Routes,Router } from 'react-router-dom';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';



function App() {
  return (
      <>
      <Router>
      <div className='flex flex-col h-screen justify-between'>
      <Navbar />
        <Routes>
        <Route path="/" Component={Hero } />
        <Route path="/About" Component={About}></Route>
        <Route path="/Registration" Component={Registration}></Route>
        <Route path="/Login" Component={Login}></Route>
        </Routes>
        <Footer />
      </div>
      </Router>
     
    
     </>
  );
}

export default App;
