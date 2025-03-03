import Terminal from '@/components/ui/Terminal';
import { skillCategories } from '@/data/skills';

export default function Skills() {
  // Find the Languages category
  const languagesCategory = skillCategories.find(cat => cat.category === "Languages");
  // Filter out the Languages category from the rest
  const otherCategories = skillCategories.filter(cat => cat.category !== "Languages");

  return (
    <section className="mb-16">
      <Terminal text="skills" className="section-title" />
      
      {/* Languages category (full width, centered) */}
      {languagesCategory && (
        <div className="card md:col-span-2 w-full mb-6">
          <h3 className="text-lg font-medium mb-4 text-center">{languagesCategory.category}</h3>
          <div className="flex flex-wrap justify-center">
            {languagesCategory.skills.map((skill, i) => (
              <span key={i} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Other categories (grid layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherCategories.map((category, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-medium mb-4">{category.category}</h3>
            <div className="flex flex-wrap">
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
