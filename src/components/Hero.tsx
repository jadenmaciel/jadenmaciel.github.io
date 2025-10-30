import { Heart, Award, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16" style={{ backgroundColor: '#0C1D2F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#F6E3C7' }}>
              CPR & Safety Training You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#F6E3C7' }}>
              Empowering Fresno's community with life-saving skills and confidence in emergency situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#services"
                className="px-8 py-4 rounded-lg transition-colors font-semibold text-lg text-center hover:opacity-90"
                style={{ backgroundColor: '#C6423B', color: '#F6E3C7' }}
              >
                View Classes
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg transition-colors font-semibold text-lg text-center hover:opacity-90"
                style={{ backgroundColor: '#F6E3C7', color: '#142131' }}
              >
                Book a Session
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2" style={{ backgroundColor: 'rgba(198, 66, 59, 0.2)' }}>
                  <Award size={28} style={{ color: '#C6423B' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#F6E3C7' }}>Certified Instructors</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2" style={{ backgroundColor: 'rgba(198, 66, 59, 0.2)' }}>
                  <Heart size={28} style={{ color: '#C6423B' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#F6E3C7' }}>AHA Approved</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2" style={{ backgroundColor: 'rgba(198, 66, 59, 0.2)' }}>
                  <Users size={28} style={{ color: '#C6423B' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#F6E3C7' }}>Hands-On Training</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2" style={{ backgroundColor: 'rgba(198, 66, 59, 0.2)' }}>
                  <CheckCircle size={28} style={{ color: '#C6423B' }} />
                </div>
                <p className="text-sm font-medium" style={{ color: '#F6E3C7' }}>Same-Day Certification</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#C6423B' }}>
              <div className="aspect-square rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🦘</div>
                  <p className="text-2xl font-bold" style={{ color: '#F6E3C7' }}>Life-Saving Skills</p>
                  <p className="mt-2" style={{ color: '#F6E3C7' }}>Training Fresno Since Day One</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
