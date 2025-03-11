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
      'Gladiator Video Game': '/images/projects/gladiator-game.jpeg'
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
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-3 border dark:border-dark-border border-light-border bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full p-3 border dark:border-dark-border border-light-border bg-transparent dark:bg-dark-surface dark:text-white text-black"
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
                className="w-full h-full p-3 border dark:border-dark-border border-light-border hover:bg-light-surface dark:hover:bg-dark-surface transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            key={index}
            className="card p-0 overflow-hidden hover:border-light-accent dark:hover:border-dark-accent transition-all duration-300 flex flex-col mb-2"
          >
            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
              {/* Project Image - Taking up 40% of the card height */}
              <div className="relative w-full pt-[56.25%] overflow-hidden">
                <Image 
                  src={getProjectImage(project.title)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="absolute inset-0 object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              {/* Project content */}
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-medium mb-2">{project.title}</h2>
                <p className="mb-4 text-sm opacity-90">{project.description}</p>
                
                {/* Technologies */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="badge cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilterTech(tech);
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links - push to bottom with mt-auto */}
                <div className="flex gap-3 mt-auto pt-2">
              
                    {project.link === 'private repository' ? (
                      <div className="inline-flex items-center px-3 py-2 text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent">
                        <Lock size={16} className="mr-2 dark:border-dark-accent  dark:text-dark-accent text-light-accent pb-1 " />
                        <span className="font-medium">Private Repository</span>
                      </div>
                    ) : project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project's Repository →
                      </Link>
                    )}
                    {project.link_deployed && (
                      <Link
                        href={project.link_deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-5 text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project →
                      </Link>

                    )}
                  
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="card p-8 text-center mt-8">
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