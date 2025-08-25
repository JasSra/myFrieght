import Link from 'next/link';
import { blogPosts } from '../../lib/mock';

export default function BlogIndex() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold">Insights</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
  {blogPosts.map(p => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="border rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-gray-900">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
