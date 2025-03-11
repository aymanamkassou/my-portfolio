import BlogPost from '@/components/BlogPost';
import Terminal from '@/components/ui/Terminal';
import Link from 'next/link';

export default function FlightPoemPost() {
  return (
    <BlogPost
      title="Wings of Aspiration: A Journey Through Poetic Flight"
      date="March 6, 2025"
      tags={['poetry', 'inspiration', 'aviation', 'personal-journey']}
    >
      <div className="mb-8 p-4 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <Terminal 
          text="./recite_poem --style=soaring --emotion=passionate" 
          typingSpeed={50}
          className="mb-2"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          An exploration of human aspirations through flight
        </p>
      </div>

      <div className="mb-12 p-8 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50 italic">
        <p className="mb-4">Oh, how my soul doth yearn to fly,<br />
        To sail above the clouds and sky,<br />
        With fervor strong, I vow to try,<br />
        And soar on high before I die.</p>

        <p className="mb-4">My heart is set on reaching up,<br />
        To lift my wings and fill my cup,<br />
        With dreams of flight that will not sup,<br />
        Until I've soared and reached the top.</p>

        <p className="mb-4">My passion burns like flaming fire,<br />
        A force that cannot be retired,<br />
        And I shall climb, and I shall aspire,<br />
        Until my dreams are realized, entire.</p>

        <p className="mb-4">No fear or danger shall deter,<br />
        My quest to soar and not defer,<br />
        For I am bound to conquer and prefer,<br />
        The life of flight, that is my lure.</p>

        <p>So do not go gentle into that good night,<br />
        But rage and soar with all thy might,<br />
        And let thy spirit take its flight,<br />
        To conquer all, and shine so bright.</p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">The Metaphor of Flight</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="mb-4">
            Throughout literary history, flight has served as one of our most powerful metaphors for human aspiration. 
            From Icarus and his waxen wings to our yearning for transcendence, the desire to break free 
            from earthly constraints resonates deeply within our collective consciousness.
          </p>
          
          <p className="mb-4">
            This poem captures that timeless longing—the soul's inherent desire to rise above limitations, to "sail above 
            the clouds and sky." It speaks to the universal experience of reaching for something beyond our grasp, of setting 
            our sights on the seemingly impossible.
          </p>
        </div>
        
        <div className="card p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30">
          <h3 className="terminal-prompt mb-3">Imagery of Ascension</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="inline-block w-6 text-center mr-2">↑</span>
              <span>"My soul doth yearn to <span className="italic">fly</span>"</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-center mr-2">↑</span>
              <span>"To <span className="italic">sail above</span> the clouds and sky"</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-center mr-2">↑</span>
              <span>"To <span className="italic">lift my wings</span> and fill my cup"</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-center mr-2">↑</span>
              <span>"<span className="italic">Soar</span> on high before I die"</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 text-center mr-2">↑</span>
              <span>"I shall <span className="italic">climb</span>, and I shall aspire"</span>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-10 dark:text-dark-accent text-light-accent">Echoes of Dylan Thomas</h2>
      
      <p className="mb-4">
        The final stanza draws inspiration from Dylan Thomas's famous villanelle <span className="italic">"Do not go gentle into that good night," </span> 
        transforming his rage against mortality into a call for passionate striving. 
      </p>

      <div className="card p-6 mb-10 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="terminal-prompt mb-3">Dylan Thomas (1914-1953)</h3>
            <p className="italic mb-4">"Do not go gentle into that good night,<br />Old age should burn and rave at close of day;<br />Rage, rage against the dying of the light."</p>
          </div>
            <p className="text-sm">
              Thomas's poem is a defiant call to resist death's passivity—to fight against the inevitable end with passion and fury.
            </p>
          
        </div>
      </div>

      <div className="card p-6 mb-10 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <h3 className="terminal-prompt mb-3">A Reflection for the Reader</h3>
        <p className="mb-4">
          What is the flight you long to take? What heights do you aspire to reach? Do you feel 
          that burning passion—that force "that cannot be retired"? 
        </p>
              </div>

           <div className="mt-12 pt-8 border-t dark:border-dark-border border-light-border">
        <Link href="/blog" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </BlogPost>
  );
}

