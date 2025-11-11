import React from "react";
import s from "./PricingTable.module.css";
import PaymentNotice from "./PaymentNotice";

type Row = {
  name: string;
  price?: string;           // "—" or "$85"
  desc: string;
  badge?: "Popular" | "Best Value" | string;
  priceNote?: string;       // e.g., "Contact for pricing"
};

const rows: Row[] = [
  {
    name: "HSV-First Aid",
    price: "$85",
    desc: "AHA-aligned certification • 2-year validity • 6-hour comprehensive training (AHA minimum)",
    badge: "Popular",
  },
  {
    name: "HSV-CPR-AED",
    price: "$85",
    desc: "CPR & AED training • 2-year certification • 6-hour comprehensive training (AHA minimum) • Hands-on practice",
  },
  {
    name: "HSV-First Aid, CPR-AED Combo",
    price: "$130",
    desc: "Complete certification package • Save $40 with combo • 6-hour comprehensive course (reflects real pacing for groups)",
    badge: "Best Value",
  },
  {
    name: "HSV Skill Only Session",
    price: "$75",
    desc: "Skills validation only • Online course pre-required • 4-hour session",
  },
  {
    name: "Heartcode BLS (Skills only)",
    price: "$70",
    desc: "Proof of online certification required • Healthcare provider level • 4-hour skills check",
  },
  {
    name: "BLS Provider",
    price: "$100",
    desc: "Healthcare professionals • 2-year certification • 4-hour comprehensive training (AHA minimum) • In-depth clinical training",
  },
  {
    name: "BLS Renewal",
    price: "$100",
    desc: "Returning customers receive a 10% discount • Refresher course • 4-hour comprehensive training (AHA minimum)",
  },
  {
    name: "Heartsaver",
    price: "$125",
    desc: "Comprehensive training • First Aid + CPR + AED • 4-hour comprehensive training (AHA minimum)",
  },
  {
    name: "American Red Cross BLS",
    price: "$110",
    desc: "Red Cross certification • 2-year validity • Professional credential • +$12 surcharge per certification (ARC charges us $42/card)",
  },
  {
    name: "Heartsaver CPR AED",
    price: "$130",
    desc: "Essential life-saving skills • 2-year certification • 4-hour comprehensive training (AHA minimum)",
  },
  {
    name: "Friends and Family",
    price: "$25 / person",
    desc: "Non-certification group training • Min 6 / Max 12 • Ages 12+ may upgrade to certification at standard course rates (AHA e-card required)",
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={s.wrap}>
      <div className={s.container}>
        <header className={s.header}>
          <h2 className={s.h1}>Courses &amp; Pricing</h2>
          <p className={s.sub}>
            Transparent, AHA-aligned training for individuals, students, and workplaces.
          </p>
        </header>

        <div className={s.card}>
          <div className={s.cardTop} />

          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={`${s.th} ${s.thFirst}`}>Course</th>
                <th className={`${s.th} ${s.thLast}`}>Price</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.name}
                  className={`${s.tr} ${i === rows.length - 1 ? s.trLast : ""}`}
                >
                  <td className={s.td}>
                    <div className={s.name}>
                      {r.name}
                      {r.badge ? <span className={s.badge}>{r.badge}</span> : null}
                    </div>
                    <div className={s.desc}>{r.desc}</div>
                  </td>
                  <td className={s.td}>
                    <div className={s.price}>
                      {r.price ?? "—"}
                      {r.priceNote ? <span className={s.priceNote}>{r.priceNote}</span> : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={s.cta}>
            <div className={s.ctaText}>Ready to get certified?</div>
            <a href="#booking" className={s.btn}>
              <span>Book Your Skills Session</span>
            </a>
          </div>
        </div>

        <div className="relative z-10 opacity-100">
          <PaymentNotice className="mt-8" />
        </div>

        <div className={s.trust}>
          <h3 style={{ marginBottom: 10, fontSize: "2rem" }}>AHA-Aligned Training</h3>
          <p style={{ color: "#94a3b8", marginBottom: 20 }}>
            Trusted by thousands of healthcare professionals and individuals
          </p>
          <div className={s.stats}>
            <div>
              <div className={s.statNum}>5,000+</div>
              <div className={s.statLabel}>Students Trained</div>
            </div>
            <div>
              <div className={s.statNum}>98%</div>
              <div className={s.statLabel}>Pass Rate</div>
            </div>
            <div>
              <div className={s.statNum}>2-Year</div>
              <div className={s.statLabel}>Certification Validity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
