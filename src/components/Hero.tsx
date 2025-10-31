import PrimaryButton from './ui/PrimaryButton';
import SecondaryButton from './ui/SecondaryButton';
import TrustBadge from './ui/TrustBadge';

export default function Hero() {
  const trustItems = [
    'AHA Training Site',
    'Hands-On Training',
    'Mobile / On-Site Available',
  ];

  const heroImgSrc = `${import.meta.env.BASE_URL}images/cpr-stock.png`;

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
              <PrimaryButton href="#classes">View Classes</PrimaryButton>
              <SecondaryButton href="#contact">Book a Session</SecondaryButton>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {trustItems.map((item) => (
                <TrustBadge key={item} label={item} />
              ))}
            </div>
          </div>

          <div className="w-full">
            <img
              src={heroImgSrc}
              alt="CPR training with AED pads attached on a mannequin"
              className="w-full h-64 md:h-80 lg:h-[420px] rounded-xl object-cover"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 480px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
