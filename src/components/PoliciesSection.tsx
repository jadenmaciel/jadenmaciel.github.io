import { useState } from "react";
import { ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { FEES } from "../lib/fees";

type AccordionSection = "privacy" | "logistics" | "payment" | "refund" | null;

export default function PoliciesSection() {
  const [openSection, setOpenSection] = useState<AccordionSection>("privacy");

  const toggleSection = (section: AccordionSection) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section id="policies" className="bg-dark text-cream py-16 pb-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-6 h-6" aria-hidden />
          <h2 className="text-2xl font-semibold">Policies & FAQ</h2>
        </div>

        <div className="space-y-4">
          {/* Privacy & Data Handling */}
          <div className="bg-navy/30 rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => toggleSection("privacy")}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-dark"
              aria-expanded={openSection === "privacy"}
              aria-controls="privacy-content"
              id="privacy-header"
            >
              <h3 className="text-lg font-semibold">Privacy & Data Handling</h3>
              {openSection === "privacy" ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" aria-hidden />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" aria-hidden />
              )}
            </button>
            <div
              id="privacy-content"
              role="region"
              aria-labelledby="privacy-header"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "privacy" ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
                <p className="text-sm leading-6 text-cream/90">
                  We respect your privacy. This page explains what we collect, why we collect it, and how to reach us with questions.
                </p>

                {/* Two-column boxes */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-dark/50 rounded-lg p-5">
                    <h4 className="text-base font-semibold mb-3">What We Collect</h4>
                    <ul className="space-y-2 text-sm leading-6 list-disc list-inside text-cream/90">
                      <li>Basic contact details you choose to share (name, email, phone)</li>
                      <li>Class/booking details (course type, date/time, location)</li>
                      <li>Communications you send us (questions or requests)</li>
                    </ul>
                  </div>
                  <div className="bg-dark/50 rounded-lg p-5">
                    <h4 className="text-base font-semibold mb-3">What We DON'T Collect</h4>
                    <ul className="space-y-2 text-sm leading-6 list-disc list-inside text-cream/90">
                      <li>No marketing tracking pixels or ad networks</li>
                      <li>No selling or sharing of personal data with third parties for marketing</li>
                      <li>No sensitive medical records</li>
                    </ul>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="bg-dark/50 rounded-lg p-5">
                  <h4 className="text-base font-semibold mb-3">How We Use Your Information</h4>
                  <ul className="space-y-2 text-sm leading-6 list-disc list-inside text-cream/90">
                    <li>Schedule and run training sessions</li>
                    <li>Send confirmations or respond to messages</li>
                    <li>Keep basic records required for certification and administration</li>
                  </ul>
                </div>

                {/* Your Choices */}
                <div className="bg-dark/50 rounded-lg p-5">
                  <h4 className="text-base font-semibold mb-3">Your Choices</h4>
                  <p className="text-sm leading-6 text-cream/90">
                    You may request a copy or deletion of your information (subject to training/certification record requirements).
                  </p>
                </div>

                <p className="text-sm italic text-cream/60">Last updated: 2025.</p>
              </div>
            </div>
          </div>

          {/* Class Logistics */}
          <div className="bg-navy/30 rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => toggleSection("logistics")}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-dark"
              aria-expanded={openSection === "logistics"}
              aria-controls="logistics-content"
              id="logistics-header"
            >
              <h3 className="text-lg font-semibold">Class Logistics</h3>
              {openSection === "logistics" ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" aria-hidden />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" aria-hidden />
              )}
            </button>
            <div
              id="logistics-content"
              role="region"
              aria-labelledby="logistics-header"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "logistics" ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
                <p className="text-sm leading-6 text-cream/90">
                  Students must complete the required AHA or ARC online portion and bring the certificate before attending skills sessions.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-sm leading-6">
                  <div className="space-y-3">
                    <div>
                      <strong>Age Requirements:</strong> Students must be <strong>12+</strong>. Parent/guardian must sign for minors.
                    </div>
                    <div>
                      <strong>Class Size:</strong> <strong>Min 3 / Max 19</strong> students for all courses.
                    </div>
                    <div>
                      <strong>Location:</strong> Varies by class size; onsite at your location or our training space.
                    </div>
                    <div>
                      <strong>Duration:</strong> AHA courses minimum <strong>4 hours</strong>; Heartsaver combo courses <strong>6 hours</strong>.
                    </div>
                    <div>
                      <strong>What to Bring:</strong> Valid ID, comfortable clothing for hands-on practice, and any required pre-course materials (if applicable).
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <strong>Late Arrival:</strong> If you arrive after skills practice begins, you must reschedule.
                    </div>
                    <div>
                      <strong>Certification:</strong> <strong>AHA e-card only</strong> (typically received within 24-48 hours). ARC certification available by request for <strong>+$12</strong> per certificate.
                    </div>
                    <div>
                      <strong>Waiver:</strong> Release of Liability required for all participants (parent/guardian signs for minors).
                    </div>
                    <div>
                      <strong>Same-Day Booking:</strong> We prefer no same-day bookings—<a href="#contact" className="underline hover:text-red transition-colors">contact us</a> to check availability.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Policy */}
          <div className="bg-navy/30 rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => toggleSection("payment")}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-dark"
              aria-expanded={openSection === "payment"}
              aria-controls="payment-content"
              id="payment-header"
            >
              <h3 className="text-lg font-semibold">Payment Policy</h3>
              {openSection === "payment" ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" aria-hidden />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" aria-hidden />
              )}
            </button>
            <div
              id="payment-content"
              role="region"
              aria-labelledby="payment-header"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "payment" ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 space-y-6">
                <div>
                  <strong className="block mb-3">Payment Methods:</strong>
                  <ul className="space-y-2 ml-4 list-disc text-sm leading-6 text-cream/90">
                    <li>
                      <strong>Cash:</strong> No processing fee. Pay at the training location.
                    </li>
                    <li>
                      <strong>Online/Card:</strong> Processed securely via Troute. A processing fee of <strong>{(FEES.card_fee_percent * 100).toFixed(2)}% + ${FEES.card_fee_fixed.toFixed(2)}</strong> applies to all online/card payments.
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 text-sm leading-6">
                  <div>
                    <strong>Payment Timing:</strong> Payment is due within <strong>24 hours</strong> of scheduling to hold your spot.
                  </div>
                  <div>
                    <strong>Fee Disclosure:</strong> You'll see any processing fee and your grand total before paying online. The fee will be clearly displayed during checkout.
                  </div>
                  <div>
                    <strong>Deposit:</strong> <strong>20% deposit is non-refundable</strong> (applied toward your total course fee).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refund & Reschedule Policy */}
          <div className="bg-navy/30 rounded-lg overflow-hidden shadow-lg">
            <button
              onClick={() => toggleSection("refund")}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-navy/40 transition-colors focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 focus:ring-offset-dark"
              aria-expanded={openSection === "refund"}
              aria-controls="refund-content"
              id="refund-header"
            >
              <h3 className="text-lg font-semibold">Refund & Reschedule Policy</h3>
              {openSection === "refund" ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" aria-hidden />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" aria-hidden />
              )}
            </button>
            <div
              id="refund-content"
              role="region"
              aria-labelledby="refund-header"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === "refund" ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="grid md:grid-cols-2 gap-6 text-sm leading-6">
                  <div className="bg-dark/50 rounded-lg p-5">
                    <strong className="block mb-3">Rescheduling:</strong>
                    <ul className="space-y-2 ml-4 list-disc text-cream/90">
                      <li>Reschedule requests must be made at least <strong>24 hours</strong> before your class.</li>
                      <li>First reschedule is free; subsequent reschedules may incur a fee.</li>
                      <li>Contact us via phone or email to reschedule.</li>
                    </ul>
                  </div>
                  <div className="bg-dark/50 rounded-lg p-5">
                    <strong className="block mb-3">Refunds:</strong>
                    <ul className="space-y-2 ml-4 list-disc text-cream/90">
                      <li><strong>20% deposit is non-refundable</strong> once booking is confirmed.</li>
                      <li><strong>No refund</strong> for no-call/no-show cancellations.</li>
                      <li>Refund requests must be made at least <strong>48 hours</strong> before class start time (deposit not included).</li>
                      <li>Refunds processed within <strong>5-7 business days</strong> to the original payment method.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

