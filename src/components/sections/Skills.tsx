import Terminal from '@/components/ui/Terminal';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  return (
    <section className="mb-16">
      <Terminal text="skills" className="section-title" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-medium mb-4">{category.category}</h3>
            <div>
              {category.skills.map((skill, i) => (
                <span key={i} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
