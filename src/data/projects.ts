export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Flight Route Visualizer',
    description: 'A real-time aviation route visualization system that implements Dijkstra\'s algorithm and BFS for optimal route finding between airports. The system visualizes the pathfinding process and simulates aircraft movement along the selected routes, with a focus on Morocco\'s airspace but extensible to other regions.',
    technologies: ['C++', 'cpprestsdk', 'Next.js', 'CSR Graph Implementation'],
    link: 'https://github.com/aymanamkassou'
  },
  {
    title: 'Particle Physics Simulation',
    description: 'A 2D particle physics simulation with collision detection, boundary constraints, and interactive mouse forces. The simulation uses OpenGL for rendering and supports creating and manipulating particles with various physical properties.',
    technologies: ['C++', 'OpenGL', 'GLFW', 'GLM'],
    link: 'https://github.com/aymanamkassou'
  },
  {
    title: 'Hydraulic Electronic Centralized Aircraft Monitor Simulation',
    description: 'Created a visually detailed simulation of the HYD ECAM page of the Airbus A320, using HTML, CSS, and JS with jQuery. Simulated the GREEN hydraulic system with accurate pressure value fluctuations and system behavior.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    link: 'https://github.com/aymanamkassou'
  },
  {
    title: 'Gladiator Video Game',
    description: 'Developed Gladiator, a 1v1 game using GTK and C, featuring multiple characters with unique fighting mechanics and a dynamic leveling system. Designed distinct character abilities while optimizing performance for smooth real-time gameplay.',
    technologies: ['C', 'GTK+'],
    link: 'https://github.com/aymanamkassou'
  }
];
