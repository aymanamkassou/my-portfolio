export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Research Assistant',
    company: 'Oracle Labs',
    location: 'Hybrid @ Casablanca, Morocco',
    period: 'July 2024 - October 2024',
    description: [
      'Worked as a first year student within Oracle Labs on a confidential project.',
      'Applied algorithm development skills in a research context.',
      'Collaborated with experienced researchers on cutting-edge technology development.'
    ]
  },
  {
    title: 'Independent Graphic Designer and Website Developer',
    company: 'Various Companies',
    location: 'Remote',
    period: 'Since January 2015',
    description: [
      'Developed creative and visual content to enhance brand presence and recognition, resulting in a ≈ 150% increase in website traffic and ≈ 80% customer engagement.',
      'Worked on numerous projects for a variety of renowned companies, primarily in the mobile phone repair sector and other industries such as dentistry.',
      'Provided affordable and quality advertising services and websites to support the growth and expansion of small businesses.'
    ]
  }
];
