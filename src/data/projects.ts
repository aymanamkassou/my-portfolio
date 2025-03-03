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
    description: 'A sophisticated aviation route optimization system implementing custom CSR graph structures with Dijkstra and BFS algorithms. Processes real airway data to create authentic flight corridors, visualizes the pathfinding process step-by-step, and simulates aircraft movement along optimal routes. Features bidirectional routing and a RESTful API connecting C++ backend with Next.js visualization frontend.',
    technologies: ['C++', 'cpprestsdk', 'Next.js', 'CSR Graph Implementation', 'REST API'],
    link: 'https://github.com/aymanamkassou/Flight-Route-Visualizer'
  },
  {
    title: 'Verlet Integration Particle Physics Simulation',
    description: 'A 2D particle physics simulation with collision detection, boundary constraints, and interactive mouse forces. The simulation uses OpenGL for rendering and supports creating and manipulating particles with various physical properties.',
    technologies: ['C++', 'OpenGL', 'GLFW', 'GLM'],
    link: 'https://github.com/aymanamkassou/Verlet-Integration-Physics-Simulation-using-OpenGL-and-Cpp'
  },
  {
    title: 'Hydraulic Electronic Centralized Aircraft Monitor Simulation',
    description: 'Created a visually detailed simulation of the HYD ECAM page of the Airbus A320, using HTML, CSS, and JS with jQuery. Simulated the GREEN hydraulic system with accurate pressure value fluctuations and system behavior.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    link: 'https://github.com/aymanamkassou/HYD-ECAM-GREEN-SYSTEM-PUMP-SIMULATION-USING-HTML-CSS-AND-JS'
  },
  {
    title: 'Gladiator Video Game',
    description: 'Developed Gladiator, a 1v1 game using GTK and C, featuring multiple characters with unique fighting mechanics and a dynamic leveling system. Designed distinct character abilities while optimizing performance for smooth real-time gameplay.',
    technologies: ['C', 'GTK+'],
    link: 'private repository'
  }
];
