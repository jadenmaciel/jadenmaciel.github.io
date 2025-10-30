import { Heart, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Expert Instruction',
      description: 'American Heart Association certified instructors with years of real-world experience.',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with hands-on practice for every student.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Evening and weekend classes available. We work around your schedule.',
    },
    {
      icon: MapPin,
      title: 'Mobile Training',
      description: 'We bring the training to you. Perfect for businesses and groups.',
    },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#F6E3C7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#142131' }}>
            Why Choose Wesley's CPR?
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#142131' }}>
            We're passionate about empowering our Fresno community with the confidence and skills to save lives.
            Our friendly, supportive approach makes learning CPR accessible and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: '#0C1D2F' }}
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#C6423B' }}>
                <feature.icon style={{ color: '#F6E3C7' }} size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F6E3C7' }}>{feature.title}</h3>
              <p className="leading-relaxed" style={{ color: '#F6E3C7' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: '#C6423B' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F6E3C7' }}>
            Join Thousands of Trained Community Members
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#F6E3C7' }}>
            Every person trained is another potential life saved. Be ready to make a difference when it matters most.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg transition-colors font-semibold text-lg hover:opacity-90"
            style={{ backgroundColor: '#F6E3C7', color: '#142131' }}
          >
            Start Your Training Today
          </a>
        </div>
      </div>
    </section>
  );
}
