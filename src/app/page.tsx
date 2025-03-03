import Terminal from '@/components/ui/Terminal';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';

export default function Home() {
  return (
    <link rel="icon" href="/favicon.ico">
    <div className="container mx-auto px-4">
      <section className="mb-16 py-16">
        <h1 className="text-3xl mb-4 font-normal">Ayman Amkassou</h1>
        <Terminal 
          text='Research Assistant & Software Engineering Student' 
          className="text-xl mb-6"
        />
        <p className="max-w-2xl text-lg">
        {`Software engineering student with algorithm development and research experience at Oracle Labs.
          Passionate about low-level programming, C/C++, and building systems from the ground up.`}
        </p>
      </section>
      
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}
