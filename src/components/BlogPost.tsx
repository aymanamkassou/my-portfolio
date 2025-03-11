import Terminal from '@/components/ui/Terminal';

interface BlogPostProps {
  title: string;
  date: string;
  tags: string[];
  children: React.ReactNode;
}

export default function BlogPost({ title, date, tags, children }: BlogPostProps) {
  return (
    <article className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-2xl mb-2 font-normal">{title}</h1>
      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">{date}</div>
      
      <div className="mb-8">
        {tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="prose dark:prose-invert prose-pre:bg-light-surface dark:prose-pre:bg-dark-surface prose-pre:border prose-pre:border-light-border dark:prose-pre:border-dark-border max-w-none">
        {children}
      </div>
    </article>
  );
}
