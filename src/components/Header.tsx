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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: '#0C1D2F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">🦘</span>
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: '#F6E3C7' }}>Wesley's CPR</h1>
              <p className="text-xs" style={{ color: '#F6E3C7' }}>Fresno, CA</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition-colors font-medium hover:opacity-80"
                style={{ color: '#F6E3C7' }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-lg transition-colors font-medium"
              style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden transition-colors"
            style={{ color: '#F6E3C7' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 mt-2 border-t" style={{ borderTopColor: 'rgba(198, 66, 59, 0.3)' }}>
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="transition-colors font-medium hover:opacity-80"
                  style={{ color: '#F6E3C7' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 rounded-lg transition-colors font-medium text-center"
                style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
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
