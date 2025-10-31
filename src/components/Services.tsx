import { Heart, Briefcase, Users, Stethoscope, Home, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'CPR & AED',
      description: 'Learn life-saving CPR techniques and automated external defibrillator use for adults, children, and infants.',
      duration: '4 hours',
      certification: 'AHA Certification',
    },
    {
      icon: Briefcase,
      title: 'First Aid',
      description: 'Comprehensive training in emergency response, wound care, and medical emergency recognition.',
      duration: '3-4 hours',
      certification: 'AHA Certification',
    },
    {
      icon: Users,
      title: 'Heartsaver',
      description: 'Perfect for childcare workers, teachers, and those who need workplace certification.',
      duration: '5-6 hours',
      certification: 'AHA Heartsaver',
    },
    {
      icon: Stethoscope,
      title: 'BLS for Healthcare Providers',
      description: 'Advanced training for medical professionals including high-quality CPR and team dynamics.',
      duration: '4-5 hours',
      certification: 'BLS Provider Card',
    },
    {
      icon: Home,
      title: 'Friends & Family',
      description: 'Informal, relaxed CPR training perfect for parents, grandparents, and community groups.',
      duration: '2-3 hours',
      certification: 'Completion Card',
    },
    {
      icon: Building2,
      title: 'Mobile & Workplace Training',
      description: 'We bring our certified instruction to your office, school, or organization. Group discounts available.',
      duration: 'Flexible',
      certification: 'Custom Options',
    },
  ];

  return (
    <section id="classes" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream">
            Our Training Programs
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-cream">
            From healthcare professionals to concerned parents, we offer courses tailored to your needs and certification requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-red group hover:scale-105 transform bg-cream"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-red">
                <service.icon className="text-cream" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="leading-relaxed mb-4 text-dark">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-dark">
                  <span className="font-semibold mr-2">Duration:</span>
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <span className="font-semibold mr-2">Certification:</span>
                  <span>{service.certification}</span>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-block w-full text-center px-6 py-3 rounded-lg transition-colors font-medium hover:opacity-90 bg-red text-cream"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
