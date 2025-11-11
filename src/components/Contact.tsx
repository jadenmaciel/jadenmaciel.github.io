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
    // TODO: Implement form submission logic (e.g., send to an API endpoint)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Get In Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-dark">
            Have questions or ready to schedule your training? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4 bg-red">
                  <MapPin className="text-cream" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-dark">Location</p>
                  <p className="text-dark">1477 E. Shaw Ave. Suite 126D</p>
                  <p className="text-dark">Fresno, CA 93710</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4 bg-red">
                  <Phone className="text-cream" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-dark">Phone</p>
                  <a href="tel:5593601016" className="text-dark hover:opacity-70">
                    (559) 360-1016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4 bg-red">
                  <Mail className="text-cream" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-dark">Email</p>
                  <a href="mailto:j.wes@wesleyscprfresno.com" className="text-dark hover:opacity-70 break-all">
                    j.wes@wesleyscprfresno.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-lg mr-4 bg-red">
                  <Clock className="text-cream" size={24} />
                </div>
                <div>
                  <p className="font-semibold mb-1 text-dark">Hours</p>
                  <p className="text-dark">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-dark">Weekend classes available</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-6 bg-navy">
              <h4 className="text-xl font-bold mb-3 text-cream">Ready to Learn?</h4>
              <p className="mb-4 text-cream">
                Call us today to reserve your spot or ask about group training options.
              </p>
              <a
                href="tel:5593601016"
                className="inline-block px-6 py-3 rounded-lg transition-colors font-semibold hover:opacity-90 bg-red text-cream"
              >
                Call Now: (559) 360-1016
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-dark">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-dark">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-red rounded-lg outline-none transition focus:ring-2 focus:ring-red text-dark"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-red rounded-lg outline-none transition focus:ring-2 focus:ring-red text-dark"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-red rounded-lg outline-none transition focus:ring-2 focus:ring-red text-dark"
                  placeholder="(559) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-dark">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-red rounded-lg outline-none transition resize-none focus:ring-2 focus:ring-red text-dark"
                  placeholder="Tell us about your training needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg transition-all font-semibold text-lg hover:opacity-90 bg-red text-cream"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs opacity-80 mt-2 text-dark">
              A Release of Liability is required for all students. Parent/guardian must sign for minors (ages 12–17).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
