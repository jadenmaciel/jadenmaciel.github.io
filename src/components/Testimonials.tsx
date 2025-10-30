import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Elementary School Teacher',
      text: 'Wesley\'s CPR made learning life-saving skills approachable and fun. The instructor was patient, knowledgeable, and created a comfortable environment. I feel confident I could help someone in an emergency now.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Restaurant Manager',
      text: 'We had Wesley\'s CPR train our entire staff at our restaurant. The mobile training was convenient and professional. Every team member left feeling prepared and certified. Highly recommend for any business!',
      rating: 5,
    },
    {
      name: 'Jennifer Lopez',
      role: 'New Parent',
      text: 'As a first-time mom, I was nervous about emergencies. The Friends & Family class was perfect - no pressure, lots of practice, and I left with real confidence. Best decision I made as a new parent!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#0C1D2F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F6E3C7' }}>
            What Our Students Say
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#F6E3C7' }}>
            Real stories from real people who are now prepared to save lives in their community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
              style={{ backgroundColor: '#F6E3C7', borderColor: '#C6423B' }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400" size={20} style={{ color: '#C6423B' }} />
                ))}
              </div>
              <p className="leading-relaxed mb-6 italic" style={{ color: '#142131' }}>
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4" style={{ borderTopColor: '#C6423B' }}>
                <p className="font-bold" style={{ color: '#142131' }}>{testimonial.name}</p>
                <p className="text-sm" style={{ color: '#142131' }}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-2xl p-8" style={{ backgroundColor: '#C6423B' }}>
            <p className="text-3xl font-bold mb-2" style={{ color: '#F6E3C7' }}>500+ Lives Empowered</p>
            <p className="text-lg" style={{ color: '#F6E3C7' }}>Join our growing community of trained responders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
