import { getBlogPosts } from '../lib/blog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Blog() {
  const { t } = useTranslation();
  const blogPosts = getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">{t('blog.title')}</h1>
        <p className="text-2xl text-slate-700 font-medium max-w-2xl font-sans">
          {t('blog.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-3xl chunky-box chunky-hover overflow-hidden group flex flex-col">
            <div className="border-b-[3px] border-slate-900 overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-xs font-bold font-display uppercase tracking-wider text-slate-800 mb-6">
                <span className="bg-brand-blue border-2 border-slate-900 px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1 bg-slate-100 border-2 border-slate-900 px-3 py-1 rounded-full"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1 bg-slate-100 border-2 border-slate-900 px-3 py-1 rounded-full"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-brand-pink transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-700 font-medium mb-8 flex-grow line-clamp-3 text-lg">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.id}`} className="text-slate-900 font-bold font-display inline-flex items-center justify-center gap-2 mt-auto w-full border-2 border-slate-900 bg-brand-yellow py-3 rounded-xl hover:bg-yellow-400 transition-colors">
                {t('blog.read_full')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
