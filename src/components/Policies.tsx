import { ShieldCheck } from "lucide-react";

export default function Policies() {
  return (
    <section id="policies" className="bg-dark text-cream py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-6 h-6" aria-hidden />
          <h2 className="text-2xl font-semibold">Policies & Important Info</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm leading-6">
          <ul className="space-y-3">
            <li><strong>Age:</strong> Students must be <strong>12+</strong>. Parent/guardian must sign for minors.</li>
            <li><strong>Class Size:</strong> <strong>Min 3 / Max 19</strong> for all courses.</li>
            <li><strong>Location:</strong> Varies by class size; onsite or our training space.</li>
            <li><strong>Same-Day:</strong> We prefer no same-day bookings—<a href="#contact" className="underline">contact us</a> to check availability.</li>
            <li><strong>Late Arrival:</strong> If you arrive after skills practice begins, you must reschedule.</li>
          </ul>
          <ul className="space-y-3">
            <li><strong>Payment:</strong> Due within <strong>24 hours</strong> of scheduling to hold your spot.</li>
            <li><strong>Deposit:</strong> <strong>20% non-refundable</strong> (applied to total).</li>
            <li><strong>No-Call/No-Show:</strong> No refund.</li>
            <li><strong>Certification:</strong> <strong>AHA e-card only</strong> (ARC available by request; <strong>+$12</strong>/cert).</li>
            <li><strong>Waiver:</strong> Release of Liability required (parent/guardian signs for minors).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

