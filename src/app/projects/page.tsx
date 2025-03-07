import Terminal from '@/components/ui/Terminal';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        <Terminal text="projects" className="section-title" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-lg font-medium mb-3">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              
              <div className="mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <div className="mt-4">
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                  >
                    View Project's Repository →
                  </Link>
                {project.link_deployed && (
                <Link 
                  href={project.link_deployed} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-5 text-sm border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
                >
                  View Project →
                </Link>

              )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
