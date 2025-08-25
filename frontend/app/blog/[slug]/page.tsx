import { notFound } from 'next/navigation';
import { blogPosts } from '../../../lib/mock';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return notFound();
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-6 leading-7 text-gray-700 dark:text-gray-200">{post.body}</p>
      <div className="mt-10 text-xs text-gray-500">Brisbane, QLD • Freight Fleet</div>
    </div>
  );
}
