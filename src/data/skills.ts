export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Algorithm & Research',
    skills: [
      'Algorithm Design',
      'Algorithm Development',
      'Research',
      'Machine Learning',
      'Vector Databases'
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      'C',
      'C++',
      'Java/JEE',
      'Python',
      'Bash',
      'Prolog',
      'SQL',
      'HTML/CSS',
      'JavaScript',
      'PHP',
      'XML'
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      'ReactJS',
      'jQuery',
      'Bootstrap',
      'TailwindCSS',
      'GTK',
      'OpenGL'
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      'OracleDB',
      'OCI',
      'Oracle Apex',
      'Vim',
      'Maplesoft Maple',
      'Matlab',
      'Git/Version Control',
      'IoT',
      'LaTeX',
      'Business Intelligence',
      'Microsoft Office',
      'Adobe Suite',
      'CINEMA 4D',
      'Blender'
    ]
  }
];
