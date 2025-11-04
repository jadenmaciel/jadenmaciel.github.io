// src/data/courses.ts

export type Course = {
  code: string; // internal key
  name: string; // display name
  price?: number; // omit for e-learning link-outs
  notes?: string[]; // bullets like "Requires proof...", "10% returning..."
  isELearning?: boolean; // AHA e-learning link-out, no price/time shown
  elink?: string; // AHA URL when isELearning = true
};

export const COURSES: Course[] = [
  { code: 'HSV-FA', name: 'HSV-First Aid', price: 85 },
  { code: 'HSV-CPR-AED', name: 'HSV-CPR-AED', price: 85 },
  { code: 'HSV-COMBO', name: 'HSV-First Aid, CPR-AED Combo', price: 130 },
  { code: 'HSV-SKILLS', name: 'HSV Skill Only Session', price: 75 },
  {
    code: 'HEARTCODE-BLS-SKILLS',
    name: 'Heartcode BLS (Skills only)',
    price: 70,
    notes: ['Requires proof of online certification'],
  },
  { code: 'BLS-PROVIDER', name: 'BLS Provider', price: 100 },
  {
    code: 'BLS-RENEWAL',
    name: 'BLS Renewal',
    price: 100,
    notes: ['Returning customers receive a 10% discount'],
  },
  { code: 'HEART-SAVER', name: 'Heartsaver', price: 125 },
  { code: 'ARC-BLS', name: 'American Red Cross BLS', price: 110 },
  { code: 'HEARTSAVER-CPR-AED', name: 'Heartsaver CPR AED', price: 130 },
  { code: 'FRIENDS-FAMILY', name: 'Friends and Family' }, // no change, price left as-is if intentionally blank
  // e-learning classes: no price/time, link to AHA
  {
    code: 'AHA-ELEARN',
    name: 'AHA e-Learning',
    isELearning: true,
    elink: 'https://shopcpr.heart.org/', // placeholder: adjust to specific AHA program links if provided
  },
];

