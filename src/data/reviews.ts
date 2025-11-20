export interface Review {
  reviewer: string;
  rating: number;
  price_comment: string | null;
  services: string[];
  review_text: string;
}

export const REVIEWS: Review[] = [
  {
    reviewer: 'Jennifer Romo',
    rating: 5,
    price_comment: 'Reasonable price',
    services: ['BLS/CPR'],
    review_text:
      'Wesley’s CPR helped me in a pinch! I called Jaqueline... and she was able to accommodate me same day to which I am so incredibly grateful. Now, I can’t say that will always be an option... but what I observed towards the end of the class is that Jaqueline was incredibly accommodating for other people attempting to schedule BLS renewals as she understands the struggle of trying to find time to schedule renewal courses while working in a hectic schedule in medicine. Her class was great, up-to-date with new recommendations from AHA and she left me with a sense of new found confidence for my BLS abilities. Her many years of experience are apparent as she did an outstanding job with her class. Thank you so much Jaqueline!',
  },
  {
    reviewer: 'Jocelyn R',
    rating: 5,
    price_comment: 'Reasonable price',
    services: [],
    review_text:
      "Great CPR class! I took my course with Jacqueline and she was an amazing instructor. She was very helpful when I had questions and made sure I was comfortable and confident in performing the skills I learned. Highly recommend Wesley's for...",
  },
  {
    reviewer: 'Bri Phillips',
    rating: 5,
    price_comment: null,
    services: ['BLS'],
    review_text:
      'I couldn’t have asked for a better BLS class. From the moment I called Wesley’s CPR LLC, they were friendly, answered all my questions, and helped ensure it was the correct certification I needed. Jacqueline made the class really comfortable — no pressure, just clear instructions and plenty of time to practice CPR, AED use, and choking response.',
  },
  {
    reviewer: 'Harveen Kaur',
    rating: 5,
    price_comment: 'Great price',
    services: ['BLS/CPR'],
    review_text:
      'Wonderful place to get certified for CPR! It was my first time, and Jacqueline is such a great teacher! Overall, wonderful experience, and truly worth it.',
  },
  {
    reviewer: 'Joshua Arreola',
    rating: 5,
    price_comment: 'Reasonable price',
    services: ['BLS/CPR', 'Infant adult cpr', 'Aed training'],
    review_text:
      'Very informative class. Instructor was excellent. Prices are fair and worth it. Learned a lot. Thank you!',
  },
  {
    reviewer: 'Dolores Woodson',
    rating: 5,
    price_comment: null,
    services: [],
    review_text:
      'Wesleys CPR is one of the best out there. Jacqueline is very professional and is very knowledgeable. She cares about her clients and will have everything done in a timely manner. She is equipped with all the tools for your training. I will definitely recommend anyone to get certified with Wesleys CPR.',
  },
  {
    reviewer: 'Bryan Feil',
    rating: 5,
    price_comment: null,
    services: ['CPR'],
    review_text:
      'Jacqueline knows how to share and education on CPR so that you will feel well equipped to be able to serve those if the need comes up. Highly recommend! She has over 12 years of experience.',
  },
  {
    reviewer: 'debbie scott-jones',
    rating: 5,
    price_comment: null,
    services: [],
    review_text:
      'Had a great experience w Jacqueline. She was able to assist when needed and very personable. Highly recommend!!!',
  },
  {
    reviewer: 'LaTonyia Johns',
    rating: 5,
    price_comment: null,
    services: ['CPR'],
    review_text:
      'The most amazing and awesome person for training CPR will see you again for recertification classes.',
  },
  {
    reviewer: 'Elesia Evans',
    rating: 5,
    price_comment: null,
    services: [],
    review_text:
      'She is very professional and knowledgeable. I recommend her to everyone that needs certification.',
  },
  {
    reviewer: 'Barbara j Epps',
    rating: 5,
    price_comment: null,
    services: [],
    review_text:
      'Years of experience. If you want to feel safe and secure this is the place to go. Concerning and careing atmosphere immediate response.',
  },
  {
    reviewer: 'Darryl Barallon',
    rating: 5,
    price_comment: null,
    services: [],
    review_text: 'Excellent instructor. Responsive and knowledgeable. 5 stars.',
  },
  {
    reviewer: 'Ni C',
    rating: 5,
    price_comment: null,
    services: [],
    review_text: 'Very professional and informative.',
  },
];

