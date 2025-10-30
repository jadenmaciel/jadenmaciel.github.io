import { Heart, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12" style={{ backgroundColor: '#0C1D2F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-2xl">🦘</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: '#F6E3C7' }}>Wesley's CPR</h3>
                <p className="text-sm" style={{ color: '#F6E3C7' }}>Fresno, CA</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#F6E3C7' }}>
              Empowering our community with life-saving skills since day one.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F6E3C7' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="transition-colors hover:opacity-70" style={{ color: '#F6E3C7' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:opacity-70" style={{ color: '#F6E3C7' }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:opacity-70" style={{ color: '#F6E3C7' }}>
                  Our Classes
                </a>
              </li>
              <li>
                <a href="#schedule" className="transition-colors hover:opacity-70" style={{ color: '#F6E3C7' }}>
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F6E3C7' }}>Services</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#F6E3C7' }}>
              <li>CPR & AED Certification</li>
              <li>First Aid Training</li>
              <li>BLS for Healthcare</li>
              <li>Heartsaver Courses</li>
              <li>Workplace Training</li>
              <li>Private Classes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4" style={{ color: '#F6E3C7' }}>Contact</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#F6E3C7' }}>
              <li>1477 E. Shaw Ave. Suite 126D</li>
              <li>Fresno, CA 93710</li>
              <li>
                <a href="tel:5593601016" className="hover:opacity-70 transition-colors">
                  (559) 360-1016
                </a>
              </li>
              <li>
                <a href="mailto:j.wes@wesleyscprfresno.com" className="hover:opacity-70 transition-colors break-all">
                  j.wes@wesleyscprfresno.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTopColor: 'rgba(198, 66, 59, 0.3)' }}>
          <p className="text-sm mb-4 md:mb-0" style={{ color: '#F6E3C7' }}>
            &copy; {currentYear} Wesley's CPR. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-sm flex items-center" style={{ color: '#F6E3C7' }}>
              Made with <Heart size={16} className="mx-1" style={{ color: '#C6423B' }} /> in Fresno
            </span>
            <div className="flex space-x-3 ml-4">
              <a
                href="#"
                className="p-2 rounded-full transition-colors hover:opacity-70"
                style={{ backgroundColor: 'rgba(198, 66, 59, 0.3)' }}
                aria-label="Facebook"
              >
                <Facebook size={20} style={{ color: '#C6423B' }} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-colors hover:opacity-70"
                style={{ backgroundColor: 'rgba(198, 66, 59, 0.3)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} style={{ color: '#C6423B' }} />
              </a>
              <a
                href="mailto:j.wes@wesleyscprfresno.com"
                className="p-2 rounded-full transition-colors hover:opacity-70"
                style={{ backgroundColor: 'rgba(198, 66, 59, 0.3)' }}
                aria-label="Email"
              >
                <Mail size={20} style={{ color: '#C6423B' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
