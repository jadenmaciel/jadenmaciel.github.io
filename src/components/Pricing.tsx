import PrimaryButton from './ui/PrimaryButton';
import { COURSES } from '../data/courses';

export default function Pricing() {
  const paid = COURSES.filter((c) => !c.isELearning);
  const elearn = COURSES.filter((c) => c.isELearning);

  return (
    <section id="pricing" className="bg-navy text-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cream">
            Courses & Pricing
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-cream/80">
            Transparent, AHA-aligned training for individuals, students, and workplaces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paid.map((c) => (
            <article
              key={c.code}
              className="bg-cream/5 border border-cream/10 rounded-xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-cream">{c.name}</h3>
                {c.notes && c.notes.length > 0 && (
                  <ul className="mt-2 mb-6 list-disc pl-5 text-sm text-cream/70 space-y-1">
                    {c.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="border-t border-cream/20 pt-6">
                {c.price && <p className="text-3xl font-bold mb-6 text-red">${c.price}</p>}
                <PrimaryButton href="#booking" className="w-full">
                  Book Skills Session
                </PrimaryButton>
              </div>
            </article>
          ))}
        </div>

        {elearn.length > 0 && (
          <div className="mt-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-cream text-center">
              AHA e-Learning
            </h3>
            <p className="text-sm text-cream/80 mb-8 text-center max-w-3xl mx-auto">
              Complete the online portion on AHA. You&apos;ll schedule a separate in-person skills check
              here.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {elearn.map((c) => (
                <article
                  key={c.code}
                  className="bg-cream/5 border border-cream/10 rounded-xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold mb-3 text-cream">{c.name}</h4>
                  </div>
                  <div className="border-t border-cream/20 pt-6">
                    <a
                      href={c.elink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cream text-navy px-5 py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2 border border-cream/60 transition-colors hover:opacity-90 w-full text-center"
                    >
                      Start on AHA site
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-block rounded-xl p-6 bg-cream/5 border border-cream/10 max-w-4xl">
            <p className="text-cream/80 text-sm leading-relaxed">
              We are an American Heart Association (AHA) Training Site. Group rates and student
              discounts available. American Red Cross pricing may differ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

