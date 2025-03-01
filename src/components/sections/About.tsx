import Terminal from '@/components/ui/Terminal';

export default function About() {
  return (
    <section className="mb-16">
      <Terminal text="about me" className="section-title" />
      <div className="card">
        <p className="mb-4">
        Top of the morrow to you! I&apos;m Ayman, born in the charming landscapes of southern Morocco, with roots anchored between 
          the coastal beauty of Agadir and the snowy peaks nestled between the quiet of Ouarzazate and the vibrant wildness of Marrakesh. 
          My journey with technology began as a child, when computers became my playground, and what started as curiosity soon blossomed 
          into a deep ardor for Computer Science.
        </p>
        <p className="mb-4">
        Low-level programming is where my passion truly lies. I&apos;m fascinated by the process of breaking things down to their very essence. 
          C is my language of choice—a language that brings you close to the metal, where every line of code feels like a heart-to-heart dialogue 
          with the machine. There&pos;s something profound in that raw, unfiltered connection, and it&pos;s where I feel most at home.
        </p>
        <p className="mb-4">
        Beyond Computer Science, I live for exploration, both literal and intellectual. I find joy in getting lost in the streets of a new city 
          just as much as I do in immersing myself in a new field of study or hobby. To me, traveling is about far more than just the places—it&pos;s 
          about the people, the stories, and the kaleidoscope of perspectives that make up our world. Each journey leaves me more curious and more 
          eager to understand the intricate tapestry of cultures around us.
        </p>
        <p>
        Music is a steady rhythm in my life. A year ago, after a life-changing travel experience, I picked up the guitar, and what started as a whim 
          turned into a form of self-expression. It has become another voice, a way to channel emotions that words can&pos;t quite capture. My interests extend 
          far beyond music—I find beauty in poetry, classical literature, history, linguistics, genetic genealogy, anthropology, and the boundless mysteries 
          of the cosmos. I&pos;m drawn to anything that sparks my curiosity, whether it&pos;s a groundbreaking paper on Computer Science, the allure of a distant nebula, 
          or the story behind an ancient relic.
        </p>
      </div>
    </section>
  );
}
