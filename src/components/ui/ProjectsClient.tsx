'use client';

import { useState, useEffect } from 'react';
import Terminal from '@/components/ui/Terminal';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Lock } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  link_deployed?: string;
  slug: string;
}


interface ProjectsClientProps {
  initialProjects: Project[];
  allTechnologies: string[];
}
export default function ProjectsClient({ initialProjects, allTechnologies }: ProjectsClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTech, setFilterTech] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  // Update filtered projects when search or filter changes
  useEffect(() => {
    const filtered = initialProjects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTech = filterTech ? project.technologies.includes(filterTech) : true;
      
      return matchesSearch && matchesTech;
    });
    
    setFilteredProjects(filtered);
  }, [searchTerm, filterTech, initialProjects]);

  // Get project thumbnail
  const getProjectImage = (title: string) => {
    // Mapping project titles to image paths
    const imageMap: { [key: string]: string } = {
      'Flight Route Visualizer': '/images/projects/flight-route.png',
      'Verlet Integration Particle Physics Simulation': '/images/projects/physics-sim.png',
      'Hydraulic Electronic Centralized Aircraft Monitor Simulation': '/images/projects/hydraulic-ecam.jpg',
      'Gladiator Video Game': '/images/projects/gladiator-game.jpeg',
      'Casablanca Twin Center - Flight Simulator Scenery': '/images/projects/casablanca-twin-center.webp',
      'Hassan II Grand Mosque - Flight Simulator Scenery': '/images/projects/hassan-ii-mosque.webp'
    };
  
    return imageMap[title] || '/images/projects/default-project.jpg';
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl mb-4 font-normal">Projects</h1>
      <Terminal 
        text="./list_projects --sort-by=recent" 
        typingSpeed={40}
        className="text-xl mb-8"
      />
      <p className="max-w-2xl text-lg mb-8">
        A collection of software engineering projects showcasing my interests in low-level programming,
        visualization systems, and research applications.
      </p>

      {/* Search and filter */}
      <div className="mb-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-3 border dark:border-dark-border border-light-border bg-transparent rounded-sm focus:outline-none focus:ring-1 focus:ring-light-accent dark:focus:ring-dark-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full p-3 border dark:border-dark-border border-light-border bg-transparent dark:bg-dark-surface dark:text-white text-black rounded-sm focus:outline-none focus:ring-1 focus:ring-light-accent dark:focus:ring-dark-accent"
              value={filterTech || ''}
              onChange={(e) => setFilterTech(e.target.value || null)}
            >
              <option value="">All technologies</option>
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
          {(searchTerm || filterTech) && (
            <div>
              <button
                onClick={() => { 
                  setSearchTerm(''); 
                  setFilterTech(null); 
                }}
                className="w-full h-full p-3 border dark:border-dark-border border-light-border hover:bg-light-surface dark:hover:bg-dark-surface transition-colors rounded-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Projects grid - completely redesigned */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            key={index}
            className="group relative flex flex-col h-full border dark:border-dark-border/50 border-light-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-300"
          >
            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
              {/* Project Image with fixed height */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={getProjectImage(project.title)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              {/* Project content */}
              <div className="flex flex-col flex-grow p-6 dark:bg-dark-surface/30 bg-light-surface/30">
                <h2 className="text-xl font-medium mb-3 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{project.title}</h2>
                
                <p className="text-sm opacity-90 mb-5 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto mb-5">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2.5 py-1 border dark:border-dark-border/70 border-light-border/70 rounded-sm cursor-pointer hover:bg-light-surface/50 dark:hover:bg-dark-surface/50 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterTech(tech);
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-xs px-2 py-1 opacity-70">+{project.technologies.length - 5} more</span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t dark:border-dark-border/30 border-light-border/30">
                  {project.link === 'private repository' ? (
                    <div className="inline-flex items-center text-sm opacity-80">
                      <Lock size={14} className="mr-1.5" />
                      <span>Private Repository</span>
                    </div>
                  ) : project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm dark:text-dark-accent text-light-accent hover:underline flex items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code →
                    </Link>
                  )}
                  {project.link_deployed && (
                    <Link
                      href={project.link_deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm dark:text-dark-accent text-light-accent hover:underline ml-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo →
                    </Link>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="border dark:border-dark-border border-light-border p-8 text-center mt-8">
          <Terminal 
            text="find: no matches found" 
            typingSpeed={30}
            className="text-lg mb-4"
          />
          <p className="mb-4">No projects match your current search criteria.</p>
          <button 
            onClick={() => { 
              setSearchTerm(''); 
              setFilterTech(null); 
            }}
            className="border dark:border-dark-border border-light-border px-6 py-2 hover:dark:bg-dark-surface hover:bg-light-surface transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
      
      {/* Back to home link */}
      <div className="mt-12 pt-4">
        <Link href="/" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}