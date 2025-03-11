import { experiences } from '@/data/experience';
import ExperienceClient from '@/components/ui/ExperienceClient'

// Enable Static Site Generation
export const dynamic = 'force-static';

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Experience | My Portfolio',
    description: 'Professional experience including research, development, and design work across various industries.',
    openGraph: {
      title: 'Experience | My Portfolio',
      description: 'Professional experience including research, development, and design work across various industries.',
      images: ['/images/og-experience.jpg'],
    },
  };
}

export default function ExperiencePage() {
  return <ExperienceClient experiences={experiences} />;
}