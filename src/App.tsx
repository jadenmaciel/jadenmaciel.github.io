import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Schedule />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
