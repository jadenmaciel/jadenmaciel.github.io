import { ShieldCheck, HelpCircle } from "lucide-react";
import { FEES } from "../lib/fees";

export default function Policies() {
  return (
    <section id="policies" className="bg-dark text-cream py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-6 h-6" aria-hidden />
          <h2 className="text-2xl font-semibold">Policies & FAQ</h2>
        </div>

        <div className="space-y-8">
          {/* Class Logistics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" aria-hidden />
              Class Logistics
            </h3>
            <p className="text-sm leading-6 mb-4 text-cream/90">
              Students must complete the required AHA or ARC online portion and bring the certificate before attending skills sessions.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm leading-6">
              <ul className="space-y-3">
                <li>
                  <strong>Age Requirements:</strong> Students must be <strong>12+</strong>. Parent/guardian must sign for minors.
                </li>
                <li>
                  <strong>Class Size:</strong> <strong>Min 3 / Max 19</strong> students for all courses.
                </li>
                <li>
                  <strong>Location:</strong> Varies by class size; onsite at your location or our training space.
                </li>
                <li>
                  <strong>Duration:</strong> AHA courses minimum <strong>4 hours</strong>; Heartsaver combo courses <strong>6 hours</strong>.
                </li>
                <li>
                  <strong>Same-Day Booking:</strong> We prefer no same-day bookings—<a href="#contact" className="underline hover:text-red transition-colors">contact us</a> to check availability.
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <strong>What to Bring:</strong> Valid ID, comfortable clothing for hands-on practice, and any required pre-course materials (if applicable).
                </li>
                <li>
                  <strong>Late Arrival:</strong> If you arrive after skills practice begins, you must reschedule.
                </li>
                <li>
                  <strong>Certification:</strong> <strong>AHA e-card only</strong> (typically received within 24-48 hours). ARC certification available by request for <strong>+$12</strong> per certificate.
                </li>
                <li>
                  <strong>Waiver:</strong> Release of Liability required for all participants (parent/guardian signs for minors).
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" aria-hidden />
              Payment Policy
            </h3>
            <div className="bg-navy/30 rounded-lg p-6 text-sm leading-6 space-y-3">
              <div>
                <strong>Payment Methods:</strong>
                <ul className="mt-2 ml-4 space-y-2 list-disc">
                  <li>
                    <strong>Cash:</strong> No processing fee. Pay at the training location.
                  </li>
                  <li>
                    <strong>Online/Card:</strong> Processed securely via Troute. A processing fee of <strong>{(FEES.card_fee_percent * 100).toFixed(2)}% + ${FEES.card_fee_fixed.toFixed(2)}</strong> applies to all online/card payments.
                  </li>
                </ul>
              </div>
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

          {/* Refund & Reschedule Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" aria-hidden />
              Refund & Reschedule Policy
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm leading-6">
              <div>
                <strong className="block mb-2">Rescheduling:</strong>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Reschedule requests must be made at least <strong>24 hours</strong> before your class.</li>
                  <li>First reschedule is free; subsequent reschedules may incur a fee.</li>
                  <li>Contact us via phone or email to reschedule.</li>
                </ul>
              </div>
              <div>
                <strong className="block mb-2">Refunds:</strong>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>20% deposit is non-refundable</strong> once booking is confirmed.</li>
                  <li><strong>No refund</strong> for no-call/no-show cancellations.</li>
                  <li>Refund requests must be made at least <strong>48 hours</strong> before class start time (deposit not included).</li>
                  <li>Refunds processed within 5-7 business days to the original payment method.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

