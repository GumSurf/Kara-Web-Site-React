import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import About from './About';
import NotFound from './NotFound';
import ApartmentDetails from './ApartmentDetails';
import '../css/style.css'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/Kasa-Web-Site-React" element={<Body />} />
        <Route path="/Kasa-Web-Site-React/about" element={<About />} />
        <Route path="/Kasa-Web-Site-React/details_appartement/:id" element={<ApartmentDetails />} />
        <Route path='Kasa-Web-Site-React/*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;