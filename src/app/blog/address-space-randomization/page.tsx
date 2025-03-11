import BlogPost from '@/components/BlogPost';
import Terminal from '@/components/ui/Terminal';
import Link from 'next/link';

export default function ASLRPost() {
  return (
    <BlogPost
      title="Understanding Address Space Randomization"
      date="March 6, 2025"
      tags={['security', 'low-level', 'C/C++', 'memory']}
    >
      <div className="mb-8 p-4 border dark:border-dark-border border-light-border dark:bg-dark-surface/50 bg-light-surface/50">
        <Terminal 
          text="./explore_aslr --verbose" 
          typingSpeed={50}
          className="mb-2"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          Randomizing memory layouts: a deep dive into how modern systems protect against memory exploitation attacks
        </p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">The Problem: Predictable Memory</h2>
      
      <p className="mb-4">
        Before Address Space Layout Randomization (ASLR) became standard in operating systems, 
        memory layouts were highly predictable. In a non-ASLR world, when you run a program, 
        its components—the executable code, libraries, stack, and heap—would consistently 
        load at the same memory addresses each time.
      </p>

      <div className="card mb-8 overflow-x-auto">
        <pre className="font-mono text-sm"><code>
{`$ cat stack_demo.c
#include <stdio.h>

void vulnerable_function(char* input) {
    char buffer[16];
    strcpy(buffer, input);  // Classic buffer overflow vulnerability
    printf("Buffer content: %s\\n", buffer);
}

int main(int argc, char** argv) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    }
    return 0;
}`}
        </code></pre>
      </div>

      <p className="mb-4">
        This predictability was a gift to attackers. If you knew where a particular function or 
        buffer resided in memory, you could craft exploits with surgical precision. Buffer overflows, 
        return-to-libc attacks, and other memory corruption vulnerabilities relied on this predictability.
      </p>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Enter ASLR: Entropy as Defense</h2>
      
      <p className="mb-4">
        ASLR introduces randomness into the equation. Every time a program launches, the OS shuffles 
        the deck—randomizing the base addresses of key memory regions:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Without ASLR</h3>
          <div className="text-sm">
            <div className="mb-1">Executable: <span className="text-red-600 dark:text-red-400">0x08048000</span></div>
            <div className="mb-1">Libraries: <span className="text-red-600 dark:text-red-400">0xb7e21000</span></div>
            <div className="mb-1">Stack: <span className="text-red-600 dark:text-red-400">0xbffdf000</span></div>
            <div>Heap: <span className="text-red-600 dark:text-red-400">0x08072000</span></div>
          </div>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">With ASLR</h3>
          <div className="text-sm">
            <div className="mb-1">Executable: <span className="text-green-600 dark:text-green-400">0x55e839742000</span></div>
            <div className="mb-1">Libraries: <span className="text-green-600 dark:text-green-400">0x7f6e21f81000</span></div>
            <div className="mb-1">Stack: <span className="text-green-600 dark:text-green-400">0x7ffd83e41000</span></div>
            <div>Heap: <span className="text-green-600 dark:text-green-400">0x5633a2172000</span></div>
          </div>
        </div>
      </div>

      <p className="mb-4">
        The result? An attacker can no longer hardcode memory addresses in exploits. Each execution 
        presents a completely new memory landscape, turning what was once a deterministic attack into 
        a probabilistic one.
      </p>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">How ASLR Works: Behind the Scenes</h2>

      <p className="mb-4">
        At a technical level, ASLR works during the program loading process:
      </p>

      <div className="card mb-6">
        <ol className="list-decimal pl-5 space-y-2">
          <li>The OS's loader identifies relocatable components of the program</li>
          <li>It generates random offsets for each memory region (within architectural constraints)</li>
          <li>The loader applies these offsets when mapping the program into virtual memory</li>
          <li>Page tables are configured to reflect these randomized addresses</li>
        </ol>
      </div>

      <p className="mb-4">
        Let's observe ASLR in action on Linux using a simple command:
      </p>

      <div className="card mb-8 overflow-x-auto">
        <pre className="font-mono text-sm terminal-prompt"><code>
{`for i in {1..3}; do 
  ldd /bin/ls | grep libc
  echo "---" 
done

# Output:
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x7f46b6841000)
# ---
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x7f2b4e9a1000)
# ---
# libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x7f85e2c41000)
# ---`}
        </code></pre>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Implementation Details: Bits of Entropy</h2>

      <p className="mb-4">
        The effectiveness of ASLR depends on how many bits of entropy are used for randomization:
      </p>

      <div className="card mb-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b dark:border-dark-border border-light-border">
              <th className="text-left py-2 pr-4">Platform</th>
              <th className="text-left py-2 pr-4">Stack</th>
              <th className="text-left py-2 pr-4">Heap</th>
              <th className="text-left py-2">Libraries/PIE</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">Linux (x86_64)</td>
              <td className="py-2 pr-4">~28 bits</td>
              <td className="py-2 pr-4">~23 bits</td>
              <td className="py-2">~28 bits</td>
            </tr>
            <tr className="border-b dark:border-dark-border border-light-border">
              <td className="py-2 pr-4">Windows 10 (x86_64)</td>
              <td className="py-2 pr-4">~17 bits</td>
              <td className="py-2 pr-4">~16 bits</td>
              <td className="py-2">~8 bits</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">macOS (ARM64)</td>
              <td className="py-2 pr-4">~33 bits</td>
              <td className="py-2 pr-4">~33 bits</td>
              <td className="py-2">~33 bits</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        More bits of entropy mean more possible address combinations, making attacks exponentially 
        harder. With 28 bits of entropy, there are over 268 million possible address combinations!
      </p>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">ASLR Bypass Techniques: Nothing Is Perfect</h2>

      <p className="mb-4">
        While ASLR raises the bar significantly, it's not impenetrable. Several techniques have emerged 
        to bypass or weaken ASLR:
      </p>

      <div className="card mb-6">
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="text-light-accent dark:text-dark-accent">Memory disclosure vulnerabilities:</span> If an attacker can leak memory addresses, the randomization becomes known</li>
          <li><span className="text-light-accent dark:text-dark-accent">Brute force:</span> For systems with low entropy, repeated attempts may eventually succeed</li>
          <li><span className="text-light-accent dark:text-dark-accent">Side-channel attacks:</span> Timing and cache-based attacks can sometimes reveal memory layout information</li>
          <li><span className="text-light-accent dark:text-dark-accent">Return-Oriented Programming (ROP):</span> A sophisticated technique that chains together existing code fragments</li>
        </ul>
      </div>

      <div className="card mb-8 p-4 border-red-300 dark:border-red-800">
        <h3 className="text-lg mb-2 font-normal text-red-600 dark:text-red-400">Memory Disclosure Example</h3>
        <pre className="font-mono text-sm"><code>
{`// This vulnerability leaks a pointer, potentially defeating ASLR
void format_string_vulnerability(char* input) {
    printf(input);  // Classic format string vulnerability
    // Should be printf("%s", input);
}`}
        </code></pre>
        <p className="mt-2 text-sm">
          If an attacker can supply "%p %p %p" as input, the function will print pointers from the stack, 
          potentially revealing randomized addresses and breaking ASLR.
        </p>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">ASLR's Evolution: Modern Enhancements</h2>

      <p className="mb-4">
        Modern systems have evolved ASLR with additional protections:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card">
          <h3 className="terminal-prompt mb-2">Position Independent Executables (PIE)</h3>
          <p className="text-sm">
            Extends ASLR protection to the main executable code section, randomizing even more of the address space.
          </p>
        </div>
        <div className="card">
          <h3 className="terminal-prompt mb-2">High-entropy ASLR</h3>
          <p className="text-sm">
            Uses more bits for randomization, exponentially increasing the number of possible memory layouts.
          </p>
        </div>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Implementing ASLR-aware Code</h2>

      <p className="mb-4">
        As a low-level programmer, there are key principles to follow when writing code in an ASLR world:
      </p>

      <div className="card mb-8">
        <ul className="list-disc pl-5 space-y-2">
          <li>Never rely on fixed memory addresses in your code</li>
          <li>Use relative addressing rather than absolute addressing</li>
          <li>Compile with PIE and stack protection flags</li>
          <li>Be cautious when working with function pointers or callbacks</li>
          <li>Always validate pointer arithmetic to prevent out-of-bounds access</li>
        </ul>
      </div>

      <div className="card mb-8 bg-light-surface/50 dark:bg-dark-surface/50">
        <h3 className="terminal-prompt mb-2">Compiling with ASLR-friendly flags in GCC</h3>
        <pre className="font-mono text-sm"><code>
{`# Full protection with PIE and stack protector
gcc -o secure_binary source.c -fstack-protector-all -fpie -pie

# Check if binary is PIE-enabled
readelf -h secure_binary | grep Type
# Output should show: Type: DYN (Shared object file)`}
        </code></pre>
      </div>

      <h2 className="text-xl mb-4 mt-8 dark:text-dark-accent text-light-accent">Conclusion: Security Through Unpredictability</h2>

      <p className="mb-4">
        ASLR represents a fundamental shift in system security philosophy: introducing controlled randomness 
        as a defense mechanism. While not perfect, it has significantly raised the bar for memory-based 
        attacks, forcing attackers to develop more sophisticated techniques.
      </p>

      <p className="mb-4">
        As a low-level programmer, understanding ASLR isn't just academic—it's essential knowledge for 
        building resilient systems. The cat-and-mouse game between security engineers and attackers continues, 
        with ASLR playing a central role in modern defense strategies.
      </p>

      <div className="card mt-12 mb-8 p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
          Want to learn more? Check out these resources:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>USENIX Security Symposium papers on ASLR implementations</li>
          <li>The PaX Team's original ASLR documentation</li>
          <li>Linux kernel source code for memory randomization</li>
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
