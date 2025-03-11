import BlogPost from '@/components/BlogPost';
import Terminal from '@/components/ui/Terminal';
import Link from 'next/link';

export default function TamazightInfluencePost() {
  return (
    <BlogPost
      title="The Linguistic Legacy: Tamazight's Influence on Moroccan Darija"
      date="March 15, 2025"
      tags={['linguistics', 'morocco', 'tamazight', 'darija', 'culture']}
    >
      <div className="mb-8 p-4 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <Terminal 
          text="./analyze_language --region=maghreb --focus=vocabulary" 
          typingSpeed={50}
          className="mb-2"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Tracing the Amazigh roots in Morocco's everyday speech patterns
        </p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">The Linguistic Landscape of Morocco</h2>
      
      <p className="mb-4">
        Morocco's linguistic tapestry is rich and complex, woven from multiple threads of historical 
        influence. While Modern Standard Arabic (فصحى) serves as the official language alongside 
        Amazigh (Tamazight), the everyday speech of Moroccans is Darija (الدارجة)—a language that 
        defies simple categorization.
      </p>

      <p className="mb-4">
        Though often classified as a language of Arabic, Moroccan Darija carries a substantial 
        substratum of Tamazight vocabulary, phonology, and grammatical structures. This influence 
        is not merely incidental but foundational to the language's distinctiveness.
      </p>

      <div className="card mb-8">
        <h3 className="terminal-prompt mb-3">Linguistic Composition of Moroccan Darija</h3>
        <div className="relative h-32 mb-3">
          <div className="absolute bottom-0 left-0 w-full bg-blue-100 dark:bg-blue-900 h-16" style={{width: '60%'}}>
            <span className="absolute bottom-1 left-2 text-sm">Arabic</span>
            <span className="absolute bottom-8 left-2 text-sm">~60%</span>
          </div>
          <div className="absolute bottom-0 left-0 bg-green-100 dark:bg-green-900 h-12" style={{width: '30%', marginLeft: '60%'}}>
            <span className="absolute bottom-1 left-2 text-sm">Tamazight</span>
            <span className="absolute bottom-6 left-2 text-sm">~30%</span>
          </div>
          <div className="absolute bottom-0 left-0 bg-purple-100 dark:bg-purple-900 h-8" style={{width: '10%', marginLeft: '90%'}}>
            <span className="absolute bottom-1 left-2 text-sm">Other</span>
            <span className="absolute bottom-4 left-2 text-sm">~10%</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Note: Percentages are approximate and vary by region, with higher Tamazight influence in rural areas and the Rif region.
        </p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Lexical Treasures: Tamazight Words in Everyday Darija</h2>
      
      <p className="mb-4">
        The most obvious manifestation of Tamazight influence lies in the vocabulary. Hundreds of 
        common words used daily by all Moroccans—regardless of their ethnic background—are Amazigh 
        in origin:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Household Terms</h3>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b dark:border-dark-border border-light-border">
                <th className="text-left py-2 pr-4">Darija</th>
                <th className="text-left py-2 pr-4">Tamazight Root</th>
                <th className="text-left py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-dark-border border-light-border">
                <td className="py-2 pr-4">السردوك /sərduq/</td>
                <td className="py-2 pr-4">ⴰⵙⵔⴷⵓⵏ /asrdun/</td>
                <td className="py-2">Rooster</td>
              </tr>
              <tr className="border-b dark:border-dark-border border-light-border">
                <td className="py-2 pr-4">أفتاس /ftas/</td>
                <td className="py-2 pr-4">ⴰⴼⵜⵜⴰⵙ /afttas/</td>
                <td className="py-2">Bald</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">زعطوط /zaʕṭuṭ/</td>
                <td className="py-2 pr-4">ⴰⵣⵄⴹⵓⴹ /azɛḍuḍ/</td>
                <td className="py-2">Young boy</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Nature & Environment</h3>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b dark:border-dark-border border-light-border">
                <th className="text-left py-2 pr-4">Darija</th>
                <th className="text-left py-2 pr-4">Tamazight Root</th>
                <th className="text-left py-2">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-dark-border border-light-border">
                <td className="py-2 pr-4">تافوكت /tafukt/</td>
                <td className="py-2 pr-4">ⵜⴰⴼⵓⴽⵜ /tafukt/</td>
                <td className="py-2">Sun</td>
              </tr>
              <tr className="border-b dark:border-dark-border border-light-border">
                <td className="py-2 pr-4">إزم /izem/</td>
                <td className="py-2 pr-4">ⵉⵣⵎ /izm/</td>
                <td className="py-2">Lion</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">تدرارت /tadrart/</td>
                <td className="py-2 pr-4">ⵜⴰⴷⵔⴰⵔⵜ /tadrart/</td>
                <td className="py-2">Hill</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-6">
        <h3 className="terminal-prompt mb-2">Daily Expressions & Actions</h3>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b dark:border-dark-border border-light-border">
              <th className="text-left py-2 pr-4">Darija</th>
              <th className="text-left py-2 pr-4">Tamazight Root</th>
              <th className="text-left py-2 pr-4">Meaning</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">سيفط /sifṭ/</td>
              <td className="py-2 pr-4">ⵙⵉⴼⴹ /sifḍ/</td>
              <td className="py-2 pr-4">To send</td>
              <td className="py-2">Widely used instead of Arabic أرسل</td>
            </tr>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">شيّخ /šǝyyǝx/</td>
              <td className="py-2 pr-4">ⵛⵢⵅ /šyǝx/</td>
              <td className="py-2 pr-4">To praise</td>
              <td className="py-2">Common in celebrations</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">خربق /xǝrbǝq/</td>
              <td className="py-2 pr-4">ⵅⵔⴱⵇ /xǝrbq/</td>
              <td className="py-2 pr-4">To mix up</td>
              <td className="py-2">Often used for confusion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Phonological Fingerprints: The Sound of Tamazight in Darija</h2>
      
      <p className="mb-4">
        Beyond vocabulary, Tamazight has left its mark on the sound system of Moroccan Darija. Several 
        phonological features distinguish it from other Arabic languages:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Distinctive Consonants</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>The /ẓ/ (emphatic z) sound in words like "ẓǝṛẓǝṛ" (to drag)</li>
            <li>The /ž/ sound as in "žabǝt" (she brought)</li>
            <li>The /g/ sound replacing Arabic /q/ in many contexts</li>
            <li>The frequent use of /č/ (as in "chair") not found in Standard Arabic</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Syllable Structure</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Tolerance for consonant clusters not permitted in Classical Arabic</li>
            <li>A tendency to reduce vowels between consonants</li>
            <li>Frequent word-initial consonant clusters (e.g., "ktǝb" for "he wrote")</li>
            <li>Reduction of diphthongs into monophthongs</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Grammatical Echoes: Tamazight Structures in Darija</h2>
      
      <p className="mb-4">
        Perhaps the most profound influence lies in grammar, where several Tamazight patterns have 
        restructured the Arabic foundation:
      </p>

      <div className="card mb-8">
        <h3 className="terminal-prompt mb-3">Grammatical Features</h3>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b dark:border-dark-border border-light-border">
              <th className="text-left py-2 pr-4">Feature</th>
              <th className="text-left py-2 pr-4">Example in Darija</th>
              <th className="text-left py-2">Amazigh Origin</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">Causative prefix "s-"</td>
              <td className="py-2 pr-4">"sǝktǝb" (to make write)</td>
              <td className="py-2">From Tamazight causative marker "s-"</td>
            </tr>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">Possessive construction</td>
              <td className="py-2 pr-4">"ǝd-dar dyali" (my house)</td>
              <td className="py-2">Mirrors Tamazight pattern</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Negative circumfix "ma-...š"</td>
              <td className="py-2 pr-4">"ma mšitš" (I didn't go)</td>
              <td className="py-2">Parallels Tamazight negative marking</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Regional Variations: The Geography of Influence</h2>
      
      <p className="mb-4">
        The degree of Tamazight influence varies across Morocco's geographical landscape:
      </p>

      <div className="card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="terminal-prompt mb-2">Northern Region (Rif)</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Heavy Tarifit Berber influence</li>
              <li>Distinct phonological features</li>
              <li>Many unique Amazigh lexical items</li>
            </ul>
          </div>
          <div>
            <h3 className="terminal-prompt mb-2">Central Atlas</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Influence from Central Atlas Tamazight</li>
              <li>Preserved case-marking in some contexts</li>
              <li>Rich agricultural terminology</li>
            </ul>
          </div>
          <div>
            <h3 className="terminal-prompt mb-2">Southern Regions</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Tachelhit (Shilha) Berber substrate</li>
              <li>Distinctive prosodic patterns</li>
              <li>Preserved ancient Amazigh expressions</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Cultural Context: Beyond Words</h2>
      
      <p className="mb-4">
        Language never exists in isolation from culture. Many linguistically Amazigh expressions in 
        Darija reflect deeper cultural concepts and worldviews:
      </p>

      <div className="card mb-8">
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-light-accent dark:text-dark-accent">Community Bonds:</span> Terms like "tagmat" (brotherhood) reflect Amazigh social structures</li>
          <li><span className="text-light-accent dark:text-dark-accent">Relationship to Land:</span> Detailed vocabulary for terrain features shows the Amazigh connection to geography</li>
          <li><span className="text-light-accent dark:text-dark-accent">Oral Traditions:</span> Expressions from Amazigh storytelling traditions persist in modern Darija</li>
          <li><span className="text-light-accent dark:text-dark-accent">Agricultural Heritage:</span> Farming terms preserve ancient Amazigh agricultural knowledge</li>
        </ul>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Contemporary Dynamics: A Living Relationship</h2>
      
      <p className="mb-4">
        The relationship between Tamazight and Darija continues to evolve. Recent constitutional 
        recognition of Amazigh as an official language has enhanced its prestige, leading to:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Media & Education</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Increased Tamazight presence in broadcasting</li>
            <li>Introduction of Tifinagh script in schools</li>
            <li>Growing bilingual publications</li>
            <li>Tamazight music influencing mainstream culture</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">Identity & Politics</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Resurgent interest in Amazigh heritage</li>
            <li>Code-switching as identity expression</li>
            <li>Debates about standardization</li>
            <li>Digital preservation initiatives</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Conclusion: A Shared Linguistic Heritage</h2>
      
      <p className="mb-4">
        Moroccan Darija stands as a testament to cultural synthesis—a linguistic bridge between 
        Amazigh and Arab traditions that has forged something genuinely unique. Its hybrid nature 
        reflects Morocco's complex history and multicultural identity.
      </p>

      <p className="mb-4">
        Far from being a "corrupted" form of Arabic, Darija represents a vibrant, living language 
        that carries within it the echoes of thousands of years of North African civilization. The 
        Tamazight elements woven throughout Darija aren't foreign intrusions but essential components 
        of Morocco's linguistic DNA.
      </p>

      <p className="mb-4">
        As Morocco navigates the complex currents of globalization and modernization, this rich 
        linguistic heritage offers both challenges and opportunities. Understanding the Amazigh 
        foundations of Darija provides crucial insights not just into language, but into the very 
        nature of Moroccan identity itself.
      </p>

      <div className="card mt-12 mb-8 p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
          Related topics for further exploration:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>The standardization debate: Should Darija be formally codified?</li>
          <li>Language policy in education: The role of Tamazight and Darija in schools</li>
          <li>Code-switching phenomena between Darija, Tamazight, French, and Spanish</li>
          <li>Digital technologies and the future of Morocco's linguistic landscape</li>
        </ul>
      </div>

      <div className="mt-12 pt-8 border-t dark:border-dark-border border-light-border">
        <Link href="/blog" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </BlogPost>
  );
}
