import SkipLink from './components/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Policies from './components/Policies';
import Footer from './components/Footer';
import Privacy from './routes/Privacy';

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
        <Booking />
        <Testimonials />
        <div id="privacy">
          <Privacy />
        </div>
        <Policies />
      </main>
      <Footer />
    </div>
  );
}

export default App;