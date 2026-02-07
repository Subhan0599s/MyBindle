
import { useState } from 'react';
import Hero from './components/hero.jsx';
import Services from './components/services.jsx';
import About from './components/about.jsx';
import Howtouse from './components/howtouse.jsx';
import Donate from './components/donate.jsx';
import Testimonials from './components/testemonial.jsx';
import Footer from './components/footer.jsx';
import Header from './components/navbar.jsx';

function App() {
  return (
        <>
    <Header />
    <Hero />
    <Services />
    <About />
    <Howtouse />
    <Donate />
    <Testimonials />
    <Footer />
    </>
  )
}

export default App
