import Terminal from '@/components/ui/Terminal';

export default function About() {
  return (
    <section className="mb-16">
      <Terminal text="about me" className="section-title" />
      <div className="card">
        <p className="mb-4">
          Hello there! I'm Ayman, born in southern Morocco between the coastal charm of Agadir and the snow-capped mountains near Ouarzazate and Marrakesh. My fascination with computers began in childhood and evolved into a deep ardour for Computer Science.
        </p>
        <p className="mb-4">
          I thrive in the world of low-level programming, particularly with C. There's something magical about that direct conversation with the machine—breaking things down to their essence and building them back up again.
        </p>
        <p className="mb-4">
          I was bitten by the aviation bug early in life, gazing skyward whenever planes passed overhead. What started as a childhood fascination with flying machines has grown into a lifelong love affair with everything that takes to the skies. The physics of flight, the engineering marvels, the freedom of soaring above the clouds—aviation captures my imagination like nothing else.
        </p>
        <p className="mb-4">
          Beyond code and planes, I'm an explorer at heart—wandering new cities, discovering diverse cultures, and picking up hobbies along the way. After a transformative trip a year ago, I began playing guitar, adding music to my collection of interests that spans poetry, literature, history, linguistics, aerodynamics, philosophy, genealogy, anthropology, and astronomy. I'm drawn to anything that sparks curiosity and expands my understanding of our fascinating world.
        </p>
        <p className="mb-4">
          <span className="dark:text-yellow-400 text-yellow-700 font-mono rounded">
            // ALERT: "Currently seeking internship opportunities starting April 2025!"
          </span>
        </p>
      </div>
    </section>
  );
}
