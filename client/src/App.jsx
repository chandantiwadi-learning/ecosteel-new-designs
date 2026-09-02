import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Products from './components/Products';
import Materials from './components/Materials';
import Quality from './components/Quality';
import Industries from './components/Industries';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Products />
      <Materials />
      <Quality />
      <Industries />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
