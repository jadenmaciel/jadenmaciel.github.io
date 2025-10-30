import { Heart, Award, Users, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-cream">
              CPR & Safety Training You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream">
              Empowering Fresno's community with life-saving skills and confidence in emergency situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#services"
                className="px-8 py-4 rounded-lg transition-colors font-semibold text-lg text-center hover:opacity-90 bg-red text-cream"
              >
                View Classes
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg transition-colors font-semibold text-lg text-center hover:opacity-90 bg-cream text-dark"
              >
                Book a Session
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2 bg-red/20">
                  <Award size={28} className="text-red" />
                </div>
                <p className="text-sm font-medium text-cream">Certified Instructors</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2 bg-red/20">
                  <Heart size={28} className="text-red" />
                </div>
                <p className="text-sm font-medium text-cream">AHA Approved</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2 bg-red/20">
                  <Users size={28} className="text-red" />
                </div>
                <p className="text-sm font-medium text-cream">Hands-On Training</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full mb-2 bg-red/20">
                  <CheckCircle size={28} className="text-red" />
                </div>
                <p className="text-sm font-medium text-cream">Same-Day Certification</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl p-8 bg-red">
              <div className="aspect-square rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🦘</div>
                  <p className="text-2xl font-bold text-cream">Life-Saving Skills</p>
                  <p className="mt-2 text-cream">Training Fresno Since Day One</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
