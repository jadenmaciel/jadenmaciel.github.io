import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import PrimaryButton from './ui/PrimaryButton';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Book Online', href: '#booking' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoSrc = `${import.meta.env.BASE_URL}images/logo.png`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a
            href="#home"
            className="inline-flex items-center gap-3 group focus:outline-none focus:ring-0 focus-visible:outline-none"
            aria-label="Go to top of page"
          >
            <img
              src={logoSrc}
              width={48}
              height={48}
              alt="Wesley's CPR logo"
              className="h-12 w-12 rounded-full object-contain bg-transparent"
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="text-xl font-bold text-cream group-hover:text-cream/90 transition-colors">Wesley's CPR</h1>
              <p className="text-xs text-cream">Central Valley, CA</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors font-medium hover:opacity-80 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream/70 focus-visible:outline-offset-2 rounded"
              >
                {item.name}
              </a>
            ))}
            <PrimaryButton href="#booking">Book Now</PrimaryButton>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-cream/20 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream/70 focus-visible:outline-offset-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pb-4 mt-2 border-t border-red/30 bg-navy"
          >
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors font-medium hover:opacity-80 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream/70 focus-visible:outline-offset-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <PrimaryButton
                href="#booking"
                className="w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </PrimaryButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
