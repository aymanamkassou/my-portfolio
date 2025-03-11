import { projects } from '@/data/projects';
import ProjectsClient from '@/components/ui/ProjectsClient';

// This enables Static Site Generation
export const dynamic = 'force-static';

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Projects | My Portfolio',
    description: 'Explore my software engineering projects including low-level programming, visualization systems, and research applications.',
    openGraph: {
      title: 'Projects | My Portfolio',
      description: 'Explore my software engineering projects including low-level programming, visualization systems, and research applications.',
      images: ['/images/og-projects.jpg'],
    },
  };
}

// This is the main page component - Server Component
export default function ProjectsPage() {
  // Extract all unique technologies for filtering (done on server)
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return <ProjectsClient initialProjects={projects} allTechnologies={allTechnologies} />;
}