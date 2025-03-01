import Terminal from '@/components/ui/Terminal';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
        <Terminal text="experience" className="section-title" />
        
        {experiences.map((exp, index) => (
          <div key={index} className="card">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="text-lg font-medium mb-1 md:mb-0">
                {exp.title} @ {exp.company}
              </h3>
              <span className="text-sm dark:text-gray-400 text-gray-600">
                {exp.period}
              </span>
            </div>
            <p className="text-sm mb-4 dark:text-gray-400 text-gray-600">
              {exp.location}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
