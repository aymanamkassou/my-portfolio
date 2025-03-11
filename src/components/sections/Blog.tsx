// components/sections/Blog.tsx
'use client';
import Terminal from '@/components/ui/Terminal';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blogs';

export default function Blog() {
  
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="mb-16" id="blog">
      <h2 className="section-title">
        <Terminal text="blog" typingSpeed={50} />
      </h2>
      
      <div className="grid gap-6 mb-6">
        {displayPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <div className="card hover:border-light-accent dark:hover:border-dark-accent cursor-pointer mb-2">
              <h3 className="text-lg mb-2">{post.title}</h3>
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
      
      {blogPosts.length > 3 && (
        <div className="mt-8 text-center">
        <Link 
          href="/blog" 
          className="border-b dark:border-dark-accent border-light-accent dark:text-dark-accent text-light-accent pb-1"
        >
          View All Articles →
        </Link>
      </div>
      )}
    </section>
  );
}
