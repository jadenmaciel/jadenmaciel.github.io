import React from "react";
import s from "./PricingTable.module.css";
import PaymentNotice from "./PaymentNotice";
import { COURSES } from "../data/courses"; // Import the single source of truth

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
            <tbody className={s.tbody}>
              {COURSES.map((course, i) => (
                <tr
                  key={course.code}
                  className={`${s.tr} ${i === COURSES.length - 1 ? s.trLast : ""}`}
                >
                  <td className={s.td}>
                    <div className={s.name}>
                      {course.name}
                      {course.badge ? <span className={s.badge}>{course.badge}</span> : null}
                    </div>
                    <div className={s.desc}>{course.desc}</div>
                  </td>
                  <td className={s.td}>
                    <div className={s.price}>
                      {typeof course.price === 'number' ? `$${course.price}` : course.price}
                      {course.priceNote ? <span className={s.priceNote}>{course.priceNote}</span> : null}
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
