import Terminal from '@/components/ui/Terminal';
import { projects } from '@/data/projects';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function Projects() {
  return (
    <section className="mb-16">
      <Terminal text="projects" className="section-title" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card flex flex-col mb-2">
            <h3 className="text-lg font-medium mb-3">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            
            <div className="mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
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
                  className="mr-5 text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                >
                  View Project's Repository →
                </Link>
              )}
              {project.link_deployed && (
                <Link 
                  href={project.link_deployed} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                >
                  View Project →
                </Link>

              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/projects" 
          className="border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
