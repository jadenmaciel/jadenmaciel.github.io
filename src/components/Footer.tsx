export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Wesley&apos;s CPR</h2>
            <p className="text-cream/70 text-sm mb-3">
              CPR & safety training for the Central Valley&apos;s students, healthcare workers, and workplaces.
            </p>
            <p className="text-cream/70 text-sm">
              We are an American Heart Association (AHA) Training Site. Group and student discounts available. American Red Cross pricing may differ.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm">1477 E. Shaw Ave. Suite 126D</p>
            <p className="text-sm mb-2">Fresno, CA 93710</p>
            <p className="text-sm">
              Phone/Text:{' '}
              <a href="tel:15593601016" className="text-cream underline-offset-2 hover:underline">
                (559) 360-1016
              </a>
            </p>
            <p className="text-sm">
              Email:{' '}
              <a
                href="mailto:j.wes@wesleyscprfresno.com"
                className="text-cream underline-offset-2 hover:underline"
              >
                j.wes@wesleyscprfresno.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-cream/80 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-cream/80 transition-colors">
                  Policies & FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cream/80 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-cream/80 transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cream/80 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-cream/80 transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cream/80 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/p/Wesleys-CPR-LLC-61576489035954/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Wesley's CPR on Facebook (opens in new tab)"
                  className="hover:text-cream/80 transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/wesleycpr559"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Wesley's CPR on Instagram (opens in new tab)"
                  className="hover:text-cream/80 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.yelp.com/biz/wesley-s-cpr-fresno"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Wesley's CPR on Yelp (opens in new tab)"
                  className="hover:text-cream/80 transition-colors"
                >
                  Yelp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
          <p>© {currentYear} Wesley&apos;s CPR. All rights reserved.</p>
          <p>Confidence starts with training.</p>
        </div>
      </div>
    </footer>
  );
}
