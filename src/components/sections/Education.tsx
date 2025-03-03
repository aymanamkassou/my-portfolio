import Terminal from '@/components/ui/Terminal';

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  graduation?: string;
  grade?: string;
  details?: string[];
}

export const educationData: Education[] = [
  {
    degree: 'M.Eng Engineering Program: Software Engineering and Integration of Computer Systems',
    institution: 'Faculty of Sciences and Techniques, Mohammedia',
    period: 'Ongoing',
    graduation: '2026'
  },
  {
    degree: 'Diploma in Scientific and Technical University Studies: Mathematics, Computer Science, and Physics',
    institution: 'Faculty of Sciences and Techniques, Mohammedia',
    period: 'June 2023',
    grade: 'A'
  }
];

export default function Education() {
  return (
    <section className="mb-16">
      <Terminal text="education" className="section-title" />
      
      {educationData.map((edu, index) => (
        <div key={index} className="card">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
            <h3 className="text-lg font-medium mb-1 md:mb-0">
              {edu.degree}
            </h3>
            <div className="text-sm dark:text-gray-400 text-gray-600 flex flex-col items-end">
              <span>{edu.period}</span>
              {edu.graduation && <span>Expected graduation: {edu.graduation}</span>}
              {edu.grade && <span>Grade: {edu.grade}</span>}
            </div>
          </div>
          
          <p className="text-sm mb-3 dark:text-gray-400 text-gray-600">
            {edu.institution}
          </p>
          
          {edu.details && edu.details.length > 0 && (
            <ul className="list-disc pl-5 space-y-1">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
