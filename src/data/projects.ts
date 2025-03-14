export interface Project {
  slug: string;
  title: string;
  description: string;
  detailedDescription?: string[];
  technologies: string[];
  link?: string;
  link_deployed?: string;
  image?: string;
  challenges?: string[];
  features?: string[];
  role?: string;
  duration?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    slug: "flight-route-visualizer",
    title: "Flight Route Visualizer",
    description: "A sophisticated aviation route optimization system implementing custom CSR graph structures with Dijkstra and BFS algorithms. Processes real airway data to create authentic flight corridors, visualizes the pathfinding process step-by-step, and simulates aircraft movement along optimal routes. Features bidirectional routing and a RESTful API connecting C++ backend with Next.js visualization frontend.",
    detailedDescription: [
      "Developed a full-stack aviation route optimization system handling real-world flight data",
      "Implemented custom Compressed Sparse Row (CSR) graph structure for efficient pathfinding",
      "Designed bidirectional routing algorithm combining Dijkstra and BFS for optimal corridor generation",
      "Built REST API bridge between C++ backend and Next.js frontend using cpprestsdk",
      "Deployed on AWS EC2 with automated CI/CD pipeline for seamless updates"
    ],
    challenges: [
      "Optimized graph traversal to handle 10,000+ nodes in under 100ms",
      "Solved coordinate system conversion challenges between aviation data formats",
      "Implemented smooth aircraft movement simulation using cubic Bezier curves",
      "Ensured real-time synchronization between backend calculations and frontend visualization"
    ],
    features: [
      "Real-time visualization of pathfinding algorithms",
      "Interactive 3D globe representation of flight paths",
      "Multi-criteria route optimization (distance, fuel, weather)",
      "Historical flight path comparison system",
      "Customizable aircraft parameters for simulation"
    ],
    technologies: ['C++', 'AWS', 'Next.js', 'CSR Graph', 'REST API', 'cpprestsdk'],
    link: "https://github.com/aymanamkassou/Flight-Route-Visualizer",
    link_deployed: "https://ifr-route-dijkstra-visualizer.vercel.app/",
    role: "Full-stack Developer & System Architect",
    duration: "6 months",
    impact: "Reduced route calculation time by 40% compared to traditional methods"
  },
  {
    slug: "verlet-integration-particle-physics-simulation",
    title: "Verlet Integration Particle Physics Simulation",
    description: "A 2D particle physics simulation with collision detection, boundary constraints, and interactive mouse forces. The simulation uses OpenGL for rendering and supports creating and manipulating particles with various physical properties.",
    detailedDescription: [
      "Developed a physics engine from scratch using Verlet integration for particle simulation",
      "Implemented spatial partitioning using uniform grid for efficient collision detection",
      "Created interactive environment with mouse force interaction and dynamic constraints",
      "Optimized rendering pipeline to handle 10,000+ particles at 60 FPS"
    ],
    challenges: [
      "Achieving stable simulation with large particle counts",
      "Implementing efficient broad-phase collision detection",
      "Maintaining numerical stability in the integration system",
      "Creating intuitive user interactions with physics system"
    ],
    features: [
      "Real-time particle simulation with physics accuracy",
      "Interactive mouse force effects",
      "Customizable particle properties (mass, charge, etc.)",
      "Multiple constraint types (distance, angle, etc.)",
      "Exportable simulation states for analysis"
    ],
    technologies: ['C++', 'OpenGL', 'GLFW', 'GLM'],
    link: "https://github.com/aymanamkassou/Verlet-Integration-Physics-Simulation-using-OpenGL-and-Cpp",
    role: "Physics Engine Developer",
    duration: "3 months",
    impact: "Demonstrated complex physics concepts through interactive visualization"
  },
  {
    slug: "hydraulic-electronic-centralized-aircraft-monitor-simulation",
    title: "Hydraulic Electronic Centralized Aircraft Monitor Simulation",
    description: "Created a visually detailed simulation of the HYD ECAM page of the Airbus A320, using HTML, CSS, and JS with jQuery. Simulated the GREEN hydraulic system with accurate pressure value fluctuations and system behavior.",
    detailedDescription: [
      "Developed accurate simulation of Airbus A320 hydraulic systems",
      "Implemented real-time pressure and flow calculations",
      "Created interactive interface mimicking actual ECAM display",
      "Simulated various failure scenarios and system responses"
    ],
    challenges: [
      "Accurately modeling hydraulic system behavior",
      "Implementing real-time system status updates",
      "Creating realistic failure scenarios",
      "Ensuring accurate pressure and flow calculations"
    ],
    features: [
      "Real-time hydraulic system monitoring",
      "Interactive system controls",
      "Failure scenario simulation",
      "System status logging",
      "Customizable simulation parameters"
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    link: "https://github.com/aymanamkassou/HYD-ECAM-GREEN-SYSTEM-PUMP-SIMULATION-USING-HTML-CSS-AND-JS",
    role: "Frontend Developer & Systems Modeler",
    duration: "2 months",
    impact: "Created valuable training tool for aviation enthusiasts"
  },
  {
    slug: "hydraulic-electronic-centralized-aircraft-monitor-simulation",
    title: "Gladiator Video Game",
    description: "Developed Gladiator, a 1v1 game using GTK and C, featuring multiple characters with unique fighting mechanics and a dynamic leveling system. Designed distinct character abilities while optimizing performance for smooth real-time gameplay.",
    detailedDescription: [
      "Designed and implemented game engine from scratch using C and GTK",
      "Created character system with unique abilities and stats",
      "Implemented AI opponent with multiple difficulty levels",
      "Developed dynamic leveling and progression system"
    ],
    challenges: [
      "Achieving smooth real-time gameplay in C",
      "Implementing responsive controls with GTK",
      "Creating balanced character abilities",
      "Optimizing performance for low-end systems"
    ],
    features: [
      "Multiple playable characters",
      "Dynamic combat system",
      "AI opponents with adaptive difficulty",
      "Progression and leveling system",
      "Customizable game settings"
    ],
    technologies: ['C', 'GTK+'],
    link: "private repository",
    role: "Game Developer & Designer",
    duration: "4 months",
    impact: "Demonstrated low-level game development skills"
  },
  {
    slug: "casablanca-twin-center",
    title: "Casablanca Twin Center - Flight Simulator Scenery",
    description: "Contributed to the flight simulation community by creating a detailed 3D model of the iconic Casablanca Twin Center for Microsoft Flight Simulator. The model features accurate dimensions, texturing, and placement within the Casablanca cityscape.",
    detailedDescription: [
      "Created high-fidelity 3D model of the Casablanca Twin Center with accurate proportions",
      "Developed detailed textures with PBR materials for realistic appearance",
      "Optimized polygon count and LOD implementation for performance efficiency",
      "Integrated the model into Microsoft Flight Simulator with proper placement and orientation",
      "Published as an open-source contribution to the flight simulation community"
    ],
    challenges: [
      "Maintaining balance between visual fidelity and performance optimization",
      "Accurately recreating architectural details from reference materials",
      "Implementing proper LOD (Level of Detail) for various viewing distances",
      "Ensuring compatibility with Microsoft Flight Simulator SDK requirements"
    ],
    features: [
      "Architecturally accurate 3D model of the Twin Center towers",
      "High-resolution textures with night lighting effects",
      "Performance-optimized mesh and materials",
      "Seamless integration with existing Casablanca scenery",
      "Open-source availability for community use and improvement"
    ],
    technologies: ['3D Modeling', 'Blender', 'Microsoft Flight Simulator SDK', 'Photoshop', 'PBR Texturing'],
    link_deployed: "https://flightsim.to/file/355/casablanca-twin-center",
    role: "3D Modeler & Open-Source Contributor",
    duration: "4 weeks",
    impact: "Enhanced realism for flight simulation experiences in Casablanca"
  },
  {
    slug: "hassan-ii-grand-mosque",
    title: "Hassan II Grand Mosque - Flight Simulator Scenery",
    description: "Created a detailed 3D model of the Hassan II Grand Mosque in Casablanca for Microsoft Flight Simulator, featuring intricate architectural details, accurate placement, and optimized performance. Published as an open-source contribution to the flight simulation community.",
    detailedDescription: [
      "Modeled the iconic Hassan II Grand Mosque with attention to architectural details",
      "Created custom textures capturing the distinctive Moroccan artistic elements",
      "Implemented night lighting to showcase the mosque's illumination features",
      "Optimized the model for flight simulator performance across various hardware configurations",
      "Contributed to the open-source flight simulation community with free access and usage rights"
    ],
    challenges: [
      "Recreating complex Islamic architectural details within polygon budget constraints",
      "Developing accurate textures for intricate tile work and decorative elements",
      "Implementing proper scale and placement relative to surrounding Casablanca scenery",
      "Balancing detail level with performance requirements for smooth simulation"
    ],
    features: [
      "Highly detailed minaret (the tallest in the world) with accurate proportions",
      "Realistic prayer hall and courtyard layout",
      "Custom night lighting matching the real-world landmark",
      "Proper integration with coastal placement overlooking the Atlantic Ocean",
      "Open-source licensing for community modifications and improvements"
    ],
    technologies: ['3D Modeling', 'Blender', 'Microsoft Flight Simulator SDK', 'Substance Painter', 'PBR Texturing'],
    link_deployed: "https://flightsim.to/file/311/hassan-ii-grand-mosque-casablanca",
    role: "3D Modeler & Open-Source Contributor",
    duration: "6 weeks",
    impact: "Preserved important cultural landmark in digital form for global simulation enthusiasts"
  }
];
