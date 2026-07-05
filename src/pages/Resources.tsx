import { resourcesList } from '../data/content';
import { Download, FileText, Shield, Gamepad2, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons: Record<string, React.ElementType> = {
  FileText,
  Shield,
  Gamepad2,
};

export default function Resources() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header Profile */}
      <div className="bg-brand-blue rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden chunky-box">
        <div className="absolute top-0 right-0 p-12 opacity-20">
          <Download className="w-64 h-64 text-slate-900 rotate-12" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-6">{t('resources.title')}</h1>
          <p className="text-xl text-slate-900 font-medium mb-10">
            {t('resources.description')}
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-6 h-6" />
            <input 
              type="text" 
              placeholder={t('resources.search_placeholder')} 
              className="w-full bg-white border-3 border-slate-900 text-slate-900 rounded-2xl py-4 pl-14 pr-4 focus:outline-none focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/20 transition-all font-medium text-lg"
            />
          </div>
        </div>
      </div>

      {/* Resources List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourcesList.map((resource) => {
          const IconComponent = icons[resource.icon] || FileText;
          return (
            <div key={resource.id} className="bg-white rounded-3xl chunky-box chunky-hover p-8 flex flex-col group cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-brand-yellow p-4 rounded-2xl border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">
                  <IconComponent className="w-8 h-8 text-slate-900" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-brand-pink/20 border-2 border-slate-900 px-3 py-1 rounded-full font-display">
                  {resource.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{resource.title}</h3>
              <p className="text-slate-700 font-medium mb-8 flex-grow text-lg">{resource.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t-[3px] border-slate-100">
                <div className="flex items-center gap-2">
                  {resource.tags?.map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-600 uppercase tracking-wider font-display">#{tag}</span>
                  ))}
                </div>
                <button className="flex items-center justify-center p-3 rounded-xl border-2 border-slate-900 bg-brand-blue text-slate-900 group-hover:bg-brand-pink transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
