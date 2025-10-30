import { Heart, Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-2xl">🦘</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-cream">Wesley's CPR</h3>
                <p className="text-sm text-cream">Fresno, CA</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream">
              Empowering our community with life-saving skills since day one.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cream">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="transition-colors hover:opacity-70 text-cream">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:opacity-70 text-cream">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:opacity-70 text-cream">
                  Our Classes
                </a>
              </li>
              <li>
                <a href="#schedule" className="transition-colors hover:opacity-70 text-cream">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cream">Services</h4>
            <ul className="space-y-2 text-sm text-cream">
              <li>CPR & AED Certification</li>
              <li>First Aid Training</li>
              <li>BLS for Healthcare</li>
              <li>Heartsaver Courses</li>
              <li>Workplace Training</li>
              <li>Private Classes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-cream">Contact</h4>
            <ul className="space-y-2 text-sm text-cream">
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

        <div className="border-t border-red/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-cream">
            &copy; {currentYear} Wesley's CPR. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-sm flex items-center text-cream">
              Made with <Heart size={16} className="mx-1 text-red" /> in Fresno
            </span>
            <div className="flex space-x-3 ml-4">
              <a
                href="#"
                className="p-2 rounded-full transition-colors hover:opacity-70 bg-red/30"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-red" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full transition-colors hover:opacity-70 bg-red/30"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-red" />
              </a>
              <a
                href="mailto:j.wes@wesleyscprfresno.com"
                className="p-2 rounded-full transition-colors hover:opacity-70 bg-red/30"
                aria-label="Email"
              >
                <Mail size={20} className="text-red" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
