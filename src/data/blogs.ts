export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'address-space-randomization',
    title: 'Understanding Address Space Randomization',
    date: 'March 6, 2025',
    excerpt: 'Exploring how ASLR protects systems by making memory attacks significantly more difficult through randomized memory layouts.',
    tags: ['security', 'low-level', 'C/C++', 'memory']
  },
  {
    id: 'tamazight-influence-darija',
    title: "The Linguistic Legacy: Tamazight's Influence on Moroccan Darija",
    date: 'April 15, 2023',
    excerpt: "Tracing the Amazigh roots in Morocco's everyday speech patterns",
    tags: ['linguistics', 'morocco', 'tamazight', 'darija', 'culture']
  },
  {
    id: 'flight-poem',
    title: 'Wings of Aspiration: A Journey Through Poetic Flight',
    date: 'January 10, 2021',
    excerpt: 'An exploration of human aspirations through flight',
    tags: ['poetry', 'inspiration', 'aviation', 'personal-journey']
  },
  {
    id: 'roman-triumph',
    title: 'The Roman Triumph: Victory, Glory, and Spectacle in Ancient Rome',
    date: 'June 2, 2018',
    excerpt: 'Dissecting the ultimate celebration of military glory in the Roman Republic and Empire',
    tags: ['history', 'ancient-rome', 'military', 'ceremonies', 'roman-empire']
  }
//   {
//     id: 'computational-fluid-dynamics',
//     title: 'Computational Fluid Dynamics: Simulating the Flow of Reality',
//     date: 'March 10, 2025',
//     excerpt: 'A deep dive into the mathematics and algorithms behind fluid simulation',
//     tags: ['engineering', 'simulation', 'mathematics', 'physics', 'programming']
//   },
  
]; 