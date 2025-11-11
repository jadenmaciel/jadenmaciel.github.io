import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Policies from './components/Policies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './routes/Privacy';

function ScrollToAnchor() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Booking />
      <Testimonials />
      <Policies />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToAnchor />
      <SkipLink />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
