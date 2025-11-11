// src/data/courses.ts

export type Course = {
  code: string; // internal key
  name: string; // display name
  price: number | string; // Can be a number or a string like "25 / person"
  desc: string;
  badge?: "Popular" | "Best Value" | string;
  priceNote?: string; // e.g., "Contact for pricing"
  notes?: string[]; // bullets like "Requires proof...", "10% returning..."
  isELearning?: boolean; // AHA e-learning link-out, no price/time shown
  elink?: string; // AHA URL when isELearning = true
};

export const COURSES: Course[] = [
  {
    code: "HSV-FA",
    name: "HSV-First Aid",
    price: 85,
    desc: "AHA-aligned certification • 2-year validity • 6-hour comprehensive training (AHA minimum)",
    badge: "Popular",
  },
  {
    code: "HSV-CPR-AED",
    name: "HSV-CPR-AED",
    price: 85,
    desc: "CPR & AED training • 2-year certification • 6-hour comprehensive training (AHA minimum) • Hands-on practice",
  },
  {
    code: "HSV-COMBO",
    name: "HSV-First Aid, CPR-AED Combo",
    price: 130,
    desc: "Complete certification package • Save $40 with combo • 6-hour comprehensive course (reflects real pacing for groups)",
    badge: "Best Value",
  },
  {
    code: "HSV-SKILLS",
    name: "HSV Skill Only Session",
    price: 75,
    desc: "Skills validation only • Online course pre-required • 4-hour session",
  },
  {
    code: "HEARTCODE-BLS-SKILLS",
    name: "Heartcode BLS (Skills only)",
    price: 70,
    desc: "Proof of online certification required • Healthcare provider level • 4-hour skills check",
    notes: ["Requires proof of online certification"],
  },
  {
    code: "BLS-PROVIDER",
    name: "BLS Provider",
    price: 100,
    desc: "Healthcare professionals • 2-year certification • 4-hour comprehensive training (AHA minimum) • In-depth clinical training",
  },
  {
    code: "BLS-RENEWAL",
    name: "BLS Renewal",
    price: 100,
    desc: "Returning customers receive a 10% discount • Refresher course • 4-hour comprehensive training (AHA minimum)",
    notes: ["Returning customers receive a 10% discount"],
  },
  {
    code: "HEART-SAVER",
    name: "Heartsaver",
    price: 125,
    desc: "Comprehensive training • First Aid + CPR + AED • 4-hour comprehensive training (AHA minimum)",
  },
  {
    code: "ARC-BLS",
    name: "American Red Cross BLS",
    price: 110,
    desc: "Red Cross certification • 2-year validity • Professional credential • +$12 surcharge per certification (ARC charges us $42/card)",
  },
  {
    code: "HEARTSAVER-CPR-AED",
    name: "Heartsaver CPR AED",
    price: 130,
    desc: "Essential life-saving skills • 2-year certification • 4-hour comprehensive training (AHA minimum)",
  },
  {
    code: "FRIENDS-FAMILY",
    name: "Friends and Family",
    price: "25 / person",
    desc: "Non-certification group training • Min 6 / Max 12 • Ages 12+ may upgrade to certification at standard course rates (AHA e-card required)",
  },
  {
    code: 'AHA-ELEARN',
    name: 'AHA e-Learning',
    price: "—",
    desc: "Official AHA online courses to be completed before your skills session.",
    isELearning: true,
    elink: 'https://shopcpr.heart.org/',
  },
];