// app/blogs/page.tsx
import Terminal from '@/components/ui/Terminal';
import Link from 'next/link';
import { blogPosts } from '@/data/blogs';

export default function BlogsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl mb-6 font-normal">Blog</h1>
      <Terminal 
        text='./list_articles --sort-by=date' 
        className="text-xl mb-8"
      />
      
      <div className="grid gap-6 mb-8">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="card hover:border-light-accent dark:hover:border-dark-accent cursor-pointer">
              <h2 className="text-lg mb-2">{post.title}</h2>
              <div className="text-sm mb-3 text-gray-600 dark:text-gray-400">{post.date}</div>
              <p className="mb-3">{post.excerpt}</p>
              <div>
                {post.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="card p-8 text-center">
        <Terminal 
          text='Subscribe to future articles? (y/n)' 
          typingSpeed={40}
          className="text-lg mb-4"
        />
        <p className="mb-4">I write about low-level programming, system architecture, and security.</p>
        <div className="inline-flex items-center space-x-4">
          <a href="mailto:subscribe@example.com" className="border dark:border-dark-border border-light-border px-6 py-2 hover:dark:bg-dark-surface hover:bg-light-surface transition-colors">
            Yes, please
          </a>
          <button className="border dark:border-dark-border border-light-border px-6 py-2 hover:dark:bg-dark-surface hover:bg-light-surface transition-colors">
            Maybe later
          </button>
        </div>
      </div>
      
      <div className="mt-12 pt-4">
        <Link href="/" className="text-light-accent dark:text-dark-accent hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
