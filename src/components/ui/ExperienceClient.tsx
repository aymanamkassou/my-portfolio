'use client';

import { useState } from 'react';
import Terminal from '@/components/ui/Terminal';
import { Briefcase, Code2, Rocket, Star, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface ExperienceClientProps {
  experiences: Experience[];
}

export default function ExperienceClient({ experiences }: ExperienceClientProps) {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  const getIcon = (title: string) => {
    if (title.includes('Research')) return <Code2 className="w-6 h-6" />;
    if (title.includes('Graphic')) return <Rocket className="w-6 h-6" />;
    return <Briefcase className="w-6 h-6" />;
  };

  const toggleExpand = (index: number) => {
    if (expandedExp === index) {
      setExpandedExp(null);
    } else {
      setExpandedExp(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl mb-4 font-normal">Experience</h1>
      <Terminal 
        text="./show_professional_journey.sh" 
        typingSpeed={40}
        className="text-xl mb-8"
      />
      <p className="max-w-2xl text-lg mb-12">
        My professional journey showcasing a blend of research work and creative design
        across various organizations and domains.
      </p>
      
      <div className="space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`card overflow-hidden transition-all duration-300 hover:border-light-accent dark:hover:border-dark-accent ${
              expandedExp === index ? 'border-light-accent dark:border-dark-accent' : ''
            }`}
            onClick={() => toggleExpand(index)}
          >
            <div className="p-6">
              {/* Header with company and position */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-light-accent/10 dark:bg-dark-accent/20 flex items-center justify-center text-light-accent dark:text-dark-accent mr-4 shrink-0">
                    {getIcon(exp.title)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {exp.title}
                      <span className="text-light-accent dark:text-dark-accent ml-2">@{exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm dark:text-gray-400 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex">
                  {index === 0 && (
                    <span className="flex items-center px-3 py-1 bg-light-accent/10 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent rounded-full text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Latest Position
                    </span>
                  )}
                </div>
              </div>
              
              {/* Description */}
              <div className="pl-4  border-light-accent dark:border-dark-accent">
                {exp.description.map((item, i) => (
                  <div 
                    key={i}
                    className="relative pl-6 py-2 dark:text-gray-300 text-gray-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-light-accent before:dark:bg-dark-accent before:rounded-full"
                  >
                    <p>
                      {item}
                      {i === 0 && exp.title.includes('Research') && (
                        <span className="ml-2 inline-block px-2 py-1 bg-light-accent/10 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent rounded-full text-xs">
                          Cutting-edge Research
                        </span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Timeline visualization */}
      <div className="card p-6 mb-12">
        <h2 className="text-xl mb-6">Timeline</h2>
        <div className="relative pl-8 before:absolute before:left-0 before:h-full before:w-1 before:bg-gray-200 dark:before:bg-gray-700/50 before:rounded-full">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-light-accent dark:bg-dark-accent"></div>
              <div className="ml-6">
                <div className="font-semibold">{exp.title} @ {exp.company}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Back to home link */}
      <div className="mt-12 pt-4">
        <Link href="/" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}