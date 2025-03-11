'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Terminal from '@/components/ui/Terminal';
import { projects } from '@/data/projects';
import { 
  ChevronLeft, 
  Github, 
  ExternalLink, 
  Code, 
  Cpu, 
  Monitor, 
  Lock,
  Calendar,
  Share2,
  User,
  ChevronRight,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetailPage() {
  const { slug } = useParams() as { slug: string };
  const [project, setProject] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [showShareOptions, setShowShareOptions] = useState(false);

  // Images for the project gallery
  const galleryImages = {
    'flight-route-visualizer': [
      '/images/projects/flight-route/gallery1.jpg',
      '/images/projects/flight-route/gallery2.jpg',
      '/images/projects/flight-route/gallery3.jpg',
    ],
    'verlet-integration-particle-physics-simulation': [
      '/images/projects/physics-sim/gallery1.jpg',
      '/images/projects/physics-sim/gallery2.jpg',
      '/images/projects/physics-sim/gallery3.jpg',
    ],
    'hydraulic-electronic-centralized-aircraft-monitor-simulation': [
      '/images/projects/hydraulic-ecam/gallery1.jpg',
      '/images/projects/hydraulic-ecam/gallery2.jpg',
      '/images/projects/hydraulic-ecam/gallery3.jpg',
    ],
    'gladiator-video-game': [
      '/images/projects/gladiator-game/gallery1.jpg',
      '/images/projects/gladiator-game/gallery2.jpg',
      '/images/projects/gladiator-game/gallery3.jpg',
    ]
  };

  // Find the project based on slug
  useEffect(() => {
    if (!slug) return;
    
    const slugStr = Array.isArray(slug) ? slug[0] : slug;
    const foundProject = projects.find(p => 
      p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') === slugStr
    );
    
    if (foundProject) {
      setProject(foundProject);
    }
    
    setIsLoading(false);
  }, [slug]);

  // If project not found
  if (!isLoading && !project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <Link 
          href="/projects"
          className="px-6 py-3 rounded-md bg-light-accent dark:bg-dark-accent text-white"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  // Project key features based on title
  const getProjectFeatures = (title: string) => {
    const featuresMap: Record<string, string[]> = {
      'Flight Route Visualizer': [
        'Custom CSR graph implementation for efficient pathfinding',
        'Real-time visualization of Dijkstra\'s algorithm and BFS',
        'Interactive aircraft movement simulation along optimal routes',
        'Bidirectional routing capabilities',
        'REST API connecting C++ backend with Next.js frontend',
        'Processing of real airway data for authentic flight corridors'
      ],
      'Verlet Integration Particle Physics Simulation': [
        'Real-time physics simulation with Verlet integration',
        'Accurate collision detection and response',
        'Interactive particle manipulation with mouse forces',
        'Customizable physical properties (mass, elasticity, friction)',
        'Efficient rendering with OpenGL optimization techniques',
        'Boundary constraints with realistic bounce effects'
      ],
      'Hydraulic Electronic Centralized Aircraft Monitor Simulation': [
        'Pixel-perfect recreation of Airbus A320 ECAM display',
        'Realistic pressure value fluctuations matching real aircraft behavior',
        'Interactive system controls with authentic feedback',
        'Dynamic color changes reflecting system states and alerts',
        'Accurate simulation of GREEN hydraulic system operations',
        'Educational tool for understanding aircraft systems'
      ],
      'Gladiator Video Game': [
        'Engaging 1v1 combat mechanics with unique character abilities',
        'Dynamic leveling system affecting gameplay strategies',
        'Performance-optimized real-time gameplay',
        'Multiple character selection with distinct fighting styles',
        'Built with pure C and GTK+ for cross-platform compatibility',
        'Challenge-based progression system'
      ]
    };

    return featuresMap[title] || [];
  };

  // Project technical details based on title
  const getProjectTechnicalDetails = (title: string) => {
    const detailsMap: Record<string, string> = {
      'Flight Route Visualizer': 
        'The Flight Route Visualizer employs a Compressed Sparse Row (CSR) graph structure for efficiently representing air routes and waypoints. The backend is implemented in C++ with cpprestsdk providing RESTful services. The pathfinding core implements both Dijkstra\'s algorithm for optimal routing and Breadth-First Search for alternate paths. The Next.js frontend visualizes the search process and resulting routes using dynamic SVG rendering with animation transitions to simulate aircraft movement along calculated paths. The system processes real-world aviation data sets to create an authentic representation of actual flight corridors.',
      'Verlet Integration Particle Physics Simulation': 
        'This physics engine implements Verlet integration, a numerical method that provides stable, second-order accurate results for simulating particle dynamics. The collision detection system uses a spatial hash grid to reduce computational complexity from O(n²) to O(n+k) where k is the number of potential collisions. OpenGL rendering is optimized with instanced drawing and custom GLSL shaders for particle visual effects. The simulation supports different material properties through parameterized physical coefficients affecting restitution, friction, and particle interaction strength.',
      'Hydraulic Electronic Centralized Aircraft Monitor Simulation': 
        'The ECAM simulation recreates the Airbus A320 HYD page with high fidelity using custom SVG elements with JavaScript-controlled attributes for dynamic system states. Pressure calculations follow realistic behavior models based on actual aircraft system specifications. The GREEN hydraulic system simulation includes pump dynamics, reservoir level monitoring, and system pressure indicators with appropriate warning thresholds. The color-coding logic follows genuine Airbus display protocols for normal operations, advisories, cautions, and warnings.',
      'Gladiator Video Game': 
        'The Gladiator game is built using C with GTK+ for cross-platform GUI capabilities. The combat system implements a turn-based mechanics engine with probabilistic outcomes influenced by character statistics and player choices. Character progression follows a balanced leveling curve modeled as a modified logistic function to provide appropriate challenge scaling. The rendering system optimizes redraws to minimize resource usage while maintaining smooth animations during combat sequences.'
    };

    return detailsMap[title] || '';
  };

  // Get project thumbnail
  const getProjectImage = (title: string) => {
    const imageMap: Record<string, string> = {
      'Flight Route Visualizer': '/images/projects/flight-route.png',
      'Verlet Integration Particle Physics Simulation': '/images/projects/physics-sim.png',
      'Hydraulic Electronic Centralized Aircraft Monitor Simulation': '/images/projects/hydraulic-ecam.jpg',
      'Gladiator Video Game': '/images/projects/gladiator-game.jpeg'
    };

    return imageMap[title] || '/images/projects/default-project.jpg';
  };

  // Get project development date
  const getProjectDate = (title: string) => {
    const dateMap: Record<string, string> = {
      'Flight Route Visualizer': 'February 2024',
      'Verlet Integration Particle Physics Simulation': 'November 2023',
      'Hydraulic Electronic Centralized Aircraft Monitor Simulation': 'July 2023',
      'Gladiator Video Game': 'March 2023'
    };

    return dateMap[title] || 'Unknown';
  };

  // Get project slug from title
  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  // Handle share
  const handleShare = async () => {
    setShowShareOptions(!showShareOptions);
  };

  // Get next and previous projects
  const getAdjacentProjects = () => {
    if (!project) return { prev: null, next: null };
    
    const currentIndex = projects.findIndex(p => p.title === project.title);
    const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
    
    return { prev, next };
  };

  const { prev, next } = getAdjacentProjects();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-accent dark:border-dark-accent"></div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-screen flex flex-col">
      {/* Hero section with project image */}
      <div className="relative h-full md:h-[500px] overflow-hidden -mt-8">
        <Image 
          src={getProjectImage(project.title)}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-50"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        
        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            href="/projects"
            className="flex items-center text-white px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          >
            <ChevronLeft size={18} className="mr-1" />
            All Projects
          </Link>
        </div>
        
        {/* Share button */}
        <div className="absolute top-6 right-6 z-10">
          <button 
            onClick={handleShare}
            className="flex items-center text-white px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all"
          >
            <Share2 size={18} className="mr-1" />
            Share
          </button>
          
          {/* Share options dropdown */}
          {showShareOptions && (
            <div className="absolute right-0 mt-2 p-2 w-48 rounded-md bg-white dark:bg-dark-surface shadow-lg z-20">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setShowShareOptions(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Copy Link
              </button>
              <a 
                href={`https://twitter.com/intent/tweet?text=Check out this awesome project: ${project.title}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Twitter
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          )}
        </div>
        
        {/* Project title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <Terminal 
              text={project.title} 
              className="text-2xl md:text-3xl mb-3 text-white" 
              typingSpeed={20}
            />
            
            <div className="flex flex-wrap items-center text-sm mb-4">
              <span className="flex items-center mr-4 mb-2">
                <Calendar size={14} className="mr-1" />
                {getProjectDate(project.title)}
              </span>
              
              <span className="flex items-center mr-4 mb-2">
                <User size={14} className="mr-1" />
                Ayman Amkassou
              </span>
              
              <div className="flex items-center mb-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span 
                    key={i} 
                    className="text-xs py-1 px-2 mr-2 rounded-full bg-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content with tabs */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation tabs */}
        <div className="flex overflow-x-auto scrollbar-hide border-b dark:border-dark-border border-light-border mb-8">
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent' 
                : 'text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'features' 
                ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent' 
                : 'text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent'
            }`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'technical' 
                ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent' 
                : 'text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent'
            }`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Details
          </button>
          <button 
            className={`px-4 py-3 font-medium whitespace-nowrap ${
              activeTab === 'gallery' 
                ? 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent' 
                : 'text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent'
            }`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
        </div>
        
        {/* Tab content */}
        <div className="mb-16">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <Monitor size={20} className="mr-2 dark:text-dark-accent text-light-accent" />
                  Project Overview
                </h3>
                
                <p className="mb-6 whitespace-pre-line text-lg">
                  {project.description}
                </p>
                
                {/* Quick feature highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {getProjectFeatures(project.title).slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-3 p-1 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.link === 'private repository' ? (
                    <div className="inline-flex items-center px-4 py-2 border dark:border-dark-border border-light-border text-sm">
                      <Lock size={16} className="mr-2 dark:text-dark-accent text-light-accent" />
                      <span className="font-medium">Private Repository</span>
                    </div>
                  ) : project.link && (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border dark:border-dark-border border-light-border hover:border-light-accent dark:hover:border-dark-accent text-sm transition-all"
                    >
                      <Github size={16} className="mr-2 dark:text-dark-accent text-light-accent" />
                      View Repository
                    </Link>
                  )}
                  
                  {project.link_deployed && (
                    <Link 
                      href={project.link_deployed} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border dark:border-dark-border border-light-border hover:border-light-accent dark:hover:border-dark-accent text-sm transition-all"
                    >
                      <ExternalLink size={16} className="mr-2 dark:text-dark-accent text-light-accent" />
                      View Live Project
                    </Link>
                  )}
                  
                  {/* Example download link - for illustration
                  <Link 
                    href="#"
                    className="flex items-center px-4 py-2 border dark:border-dark-border border-light-border hover:border-light-accent dark:hover:border-dark-accent text-sm transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Download documentation functionality would be implemented here.');
                    }}
                  >
<Download size={16} className="mr-2 dark:text-dark-accent text-light-accent" />
                    Documentation
                  </Link> */}
                </div>
              </div>
              
              {/* Sidebar with project details */}
              <div className="md:col-span-1">
                <div className="space-y-6">
                  {/* Project details card */}
                  <div className="border dark:border-dark-border border-light-border overflow-hidden">
                    <div className="bg-light-surface/50 dark:bg-dark-surface/50 p-4 border-b dark:border-dark-border border-light-border">
                      <h4 className="font-medium">Project Details</h4>
                    </div>
                    <div className="p-4 space-y-4">
                      <div>
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Completed</h5>
                        <p className="font-medium">{getProjectDate(project.title)}</p>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Category</h5>
                        <p className="font-medium">{
                          project.title.includes('Flight') ? 'Aviation Software' :
                          project.title.includes('Physics') ? 'Simulation' :
                          project.title.includes('Aircraft') ? 'Aviation Simulation' :
                          'Game Development'
                        }</p>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Client</h5>
                        <p className="font-medium">{
                          project.title.includes('Flight') ? 'Personal Project' :
                          project.title.includes('Physics') ? 'University Project' :
                          project.title.includes('Aircraft') ? 'Aviation Enthusiast Community' :
                          'Game Development Course'
                        }</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technologies card */}
                  <div className="border dark:border-dark-border border-light-border overflow-hidden">
                    <div className="bg-light-surface/50 dark:bg-dark-surface/50 p-4 border-b dark:border-dark-border border-light-border">
                      <h4 className="font-medium">Technologies Used</h4>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, index: number) => (
                          <span 
                            key={index}
                            className="badge"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick stats card */}
                  <div className="border dark:border-dark-border border-light-border overflow-hidden">
                    <div className="bg-light-surface/50 dark:bg-dark-surface/50 p-4 border-b dark:border-dark-border border-light-border">
                      <h4 className="font-medium">Project Stats</h4>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Complexity</span>
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-sm overflow-hidden">
                          <div 
                            className="h-full bg-light-accent dark:bg-dark-accent" 
                            style={{ 
                              width: project.title.includes('Flight') ? '90%' :
                                    project.title.includes('Physics') ? '85%' :
                                    project.title.includes('Aircraft') ? '75%' :
                                    '70%' 
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Development Time</span>
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-light-accent dark:bg-dark-accent" 
                            style={{ 
                              width: project.title.includes('Flight') ? '80%' :
                                    project.title.includes('Physics') ? '65%' :
                                    project.title.includes('Aircraft') ? '70%' :
                                    '50%' 
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Innovation</span>
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-light-accent dark:bg-dark-accent" 
                            style={{ 
                              width: project.title.includes('Flight') ? '95%' :
                                    project.title.includes('Physics') ? '90%' :
                                    project.title.includes('Aircraft') ? '85%' :
                                    '75%' 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                Key Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {getProjectFeatures(project.title).map((feature, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className="flex items-start card mb-1 p-4 border dark:border-dark-border border-light-border hover:border-light-accent dark:hover:border-dark-accent transition-all"
                  >
                    <div className="mt-1 mr-4 p-2 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium pt-2">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Feature illustration */}
              <div className="mt-10 border dark:border-dark-border border-light-border overflow-hidden">
                <div className="bg-light-surface/50 dark:bg-dark-surface/50 p-4 border-b dark:border-dark-border border-light-border">
                  <h4 className="font-medium">Feature Impact Diagram</h4>
                </div>
                <div className="p-6 flex justify-center">
                  <div className="w-full max-w-2xl">
                    <div className="relative h-64 border dark:border-dark-border border-light-border overflow-hidden flex items-center justify-center bg-light-surface/30 dark:bg-dark-surface/30">
                      <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400">Feature diagram illustration</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">Visualization would be implemented here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Technical Details Tab */}
          {activeTab === 'technical' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <Cpu size={20} className="mr-2 dark:text-dark-accent text-light-accent" />
                Technical Implementation
              </h3>
              
              <div className="card border dark:border-dark-border border-light-border">
                <p className="whitespace-pre-line">
                  {getProjectTechnicalDetails(project.title)}
                </p>
              </div>
              
              {/* Architecture diagram */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">System Architecture</h4>
                <div className="border dark:border-dark-border border-light-border  p-6 flex justify-center">
                  <div className="relative h-64 w-full border dark:border-dark-border border-light-border overflow-hidden flex items-center justify-center bg-light-surface/30 dark:bg-dark-surface/30">
                    <div className="text-center">
                      <p className="text-gray-500 dark:text-gray-400">Architecture diagram</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500">Technical design visualization would be implemented here</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Development challenges */}
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-4">Development Challenges</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Performance Optimization',
                      description: project.title.includes('Flight') ? 
                        'Optimizing the graph traversal algorithms to handle large-scale aviation networks with minimal latency' :
                        project.title.includes('Physics') ? 
                        'Achieving real-time physics simulation with high particle counts while maintaining 60+ FPS' :
                        project.title.includes('Aircraft') ? 
                        'Creating precise timing for system pressure fluctuations that match real aircraft behavior' :
                        'Balancing combat mechanics for fair gameplay while maintaining distinct character abilities'
                    },
                    {
                      title: 'Technical Integration',
                      description: project.title.includes('Flight') ? 
                        'Creating a seamless connection between C++ backend pathfinding and JavaScript frontend visualization' :
                        project.title.includes('Physics') ? 
                        'Implementing efficient spatial partitioning for collision detection in dynamic environments' :
                        project.title.includes('Aircraft') ? 
                        'Recreating the complex logic of aircraft systems warning states and color coding' :
                        'Developing a progressive difficulty system that scales appropriately with player level'
                    },
                    {
                      title: 'Data Management',
                      description: project.title.includes('Flight') ? 
                        'Processing and normalizing real-world aviation waypoint data for use in the routing system' :
                        project.title.includes('Physics') ? 
                        'Managing memory for thousands of interacting particles with different physical properties' :
                        project.title.includes('Aircraft') ? 
                        'Creating an accurate simulation model based on limited public data about aircraft systems' :
                        'Balancing character progression data to maintain engagement throughout the game'
                    }
                  ].map((challenge, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="p-4 card border dark:border-dark-border border-light-border"
                    >
                      <h5 className="font-medium mb-2">{challenge.title}</h5>
                      <p>{challenge.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-6 flex items-center">
                <Monitor size={20} className="mr-2 dark:text-dark-accent text-light-accent" />
                Project Gallery
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* In a real implementation, these would be actual project screenshots */}
                {[1, 2, 3, 4].map((_, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    key={index}
                    className="border dark:border-dark-border border-light-border overflow-hidden group"
                  >
                    <div className="relative h-64">
                      <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900">
                        <p className="text-gray-500 dark:text-gray-400">Gallery image {index + 1}</p>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium mb-1">
                            {project.title} - View {index + 1}
                          </p>
                          <p className="text-gray-300 text-sm">
                            {index === 0 ? 'Main interface' : 
                             index === 1 ? 'Core functionality' : 
                             index === 2 ? 'Advanced features' : 
                             'Technical details'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Video demo placeholder */}
              <div className="mt-10 border dark:border-dark-border border-light-border  overflow-hidden">
                <div className="bg-light-surface/50 dark:bg-dark-surface/50 p-4 border-b dark:border-dark-border border-light-border">
                  <h4 className="font-medium">Project Demo</h4>
                </div>
                <div className="p-6">
                  <div className="relative h-96 border dark:border-dark-border border-light-border overflow-hidden flex items-center justify-center bg-light-surface/30 dark:bg-dark-surface/30">
                    <div className="text-center">
                      <p className="text-gray-500 dark:text-gray-400">Video demo would be embedded here</p>
                      <button className="mt-4 px-4 py-2 border border-dark-accent border-t text-dark-accent rounded-sm">
                        Play Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Navigation between projects */}
        <div className="flex flex-col sm:flex-row justify-between mt-12 border-t dark:border-dark-border border-light-border pt-8">
          {prev ? (
            <Link 
              href={`/projects/${getProjectSlug(prev.title)}`}
              className="flex items-center mb-4 sm:mb-0 px-4 py-2 rounded-sm hover:bg-light-surface dark:hover:bg-dark-surface transition-all"
            >
              <ChevronLeft size={16} className="mr-2" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
                <div className="font-medium">{prev.title}</div>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          
          {next && (
            <Link 
              href={`/projects/${getProjectSlug(next.title)}`}
              className="flex items-center justify-end px-4 py-2 rounded-sm hover:bg-light-surface dark:hover:bg-dark-surface transition-all"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
                <div className="font-medium">{next.title}</div>
              </div>
              <ChevronRight size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
