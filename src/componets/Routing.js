import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import About from './About';

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Root />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
