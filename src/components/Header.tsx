import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">🦘</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-cream">Wesley's CPR</h1>
              <p className="text-xs text-cream">Fresno, CA</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors font-medium hover:opacity-80 text-cream"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg transition-colors font-medium bg-red text-cream"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden transition-colors text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 mt-2 border-t border-red/30">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors font-medium hover:opacity-80 text-cream"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg transition-colors font-medium text-center bg-red text-cream"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
