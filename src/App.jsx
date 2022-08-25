import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/Contact/Contact';
import Sermon from './components/Sermon/Sermon'
import Blog from './components/Blog/Blog'



const App = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sermon" element={<Sermon />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App