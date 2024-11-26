// import logo from './logo.svg';
import React from 'react';
import Home from    './components/Home';
import About from   './components/About';
import Contact from './components/Contact';
import Navbar from  './components/Navbar';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Nowus from './components/Nowus';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>
      

      <Nowus/>
     <Footer/>

    </div>
    </Router>
  );
}

export default App;
