import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#F6E3C7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#142131' }}>
            Get In Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#142131' }}>
            Have questions or ready to schedule your training? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#142131' }}>Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#C6423B' }}>
                  <MapPin style={{ color: '#F6E3C7' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#142131' }}>Location</p>
                  <p style={{ color: '#142131' }}>1477 E. Shaw Ave. Suite 126D</p>
                  <p style={{ color: '#142131' }}>Fresno, CA 93710</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#C6423B' }}>
                  <Phone style={{ color: '#F6E3C7' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#142131' }}>Phone</p>
                  <a href="tel:5593601016" style={{ color: '#142131' }} className="hover:opacity-70">
                    (559) 360-1016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#C6423B' }}>
                  <Mail style={{ color: '#F6E3C7' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#142131' }}>Email</p>
                  <a href="mailto:j.wes@wesleyscprfresno.com" style={{ color: '#142131' }} className="hover:opacity-70 break-all">
                    j.wes@wesleyscprfresno.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#C6423B' }}>
                  <Clock style={{ color: '#F6E3C7' }} size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#142131' }}>Hours</p>
                  <p style={{ color: '#142131' }}>Monday - Friday: 9 AM - 6 PM</p>
                  <p style={{ color: '#142131' }}>Weekend classes available</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6" style={{ backgroundColor: '#0C1D2F' }}>
              <h4 className="text-xl font-bold mb-3" style={{ color: '#F6E3C7' }}>Ready to Learn?</h4>
              <p className="mb-4" style={{ color: '#F6E3C7' }}>
                Call us today to reserve your spot or ask about group training options.
              </p>
              <a
                href="tel:5593601016"
                className="inline-block px-6 py-3 rounded-lg transition-colors font-semibold hover:opacity-90"
                style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
              >
                Call Now: (559) 360-1016
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#142131' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#142131' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg outline-none transition focus:ring-2"
                  style={{ borderColor: '#C6423B', focusRingColor: '#C6423B', color: '#142131' }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#142131' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg outline-none transition focus:ring-2"
                  style={{ borderColor: '#C6423B', focusRingColor: '#C6423B', color: '#142131' }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#142131' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg outline-none transition focus:ring-2"
                  style={{ borderColor: '#C6423B', focusRingColor: '#C6423B', color: '#142131' }}
                  placeholder="(559) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#142131' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg outline-none transition resize-none focus:ring-2"
                  style={{ borderColor: '#C6423B', focusRingColor: '#C6423B', color: '#142131' }}
                  placeholder="Tell us about your training needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg transition-all font-semibold text-lg hover:opacity-90"
                style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
