import PrimaryButton from './ui/PrimaryButton';

export default function Pricing() {
  const offerings = [
    {
      title: 'BLS for Healthcare Providers',
      price: '$100',
      desc: 'AHA-aligned course for medical, dental, and clinical staff.',
    },
    {
      title: 'BLS — Skills Only',
      price: '$65',
      desc: 'For students and staff who completed the online portion and only need skills check.',
    },
    {
      title: 'Heartsaver CPR/AED',
      price: '$125',
      desc: 'Adult/Child/Infant CPR with AED — great for schools and community.',
    },
    {
      title: 'First Aid + CPR Combo',
      price: '$85',
      desc: 'Combined safety training for workplaces and staff.',
    },
    {
      title: 'Friends & Family (non-cert)',
      price: '$20 / person',
      desc: 'Min 6, max 12. Perfect for community groups, churches, and parents.',
    },
    {
      title: 'On-Site / Workplace Training',
      price: 'Call for pricing',
      desc: 'We come to your site for 6–12 participants. Mileage may apply.',
    },
  ];

  return (
    <section id="pricing" className="bg-navy text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream">
            Training Programs & Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-cream/80">
            Transparent, AHA-aligned training for individuals, students, and workplaces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="bg-cream/5 border border-cream/10 rounded-xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-cream">{item.title}</h3>
                <p className="text-cream/70 mb-6 leading-relaxed">{item.desc}</p>
              </div>
              <div className="border-t border-cream/20 pt-6">
                <p className="text-3xl font-bold mb-6 text-red">{item.price}</p>
                <PrimaryButton href="#contact" className="w-full">
                  Book / Ask
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl p-6 bg-cream/5 border border-cream/10 max-w-4xl">
            <p className="text-cream/80 text-sm leading-relaxed">
              We are an American Heart Association (AHA) Training Site. Group rates and student discounts available.
              American Red Cross pricing may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

