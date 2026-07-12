import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'L\'Axe Intestin-Foie : Une Relation Bidirectionnelle',
    category: 'Recherche Clinique',
    readTime: '6 min de lecture',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Naviguer dans la Détoxification de Phase II',
    category: 'Biologie',
    readTime: '8 min de lecture',
    image: 'https://images.unsplash.com/photo-1615486511484-92e172054c04?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Alimentation Saisonnière pour l\'Harmonie Métabolique',
    category: 'Mode de vie',
    readTime: '5 min de lecture',
    image: 'https://images.unsplash.com/photo-1490818387583-1b5f222234e6?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function ArticlesSection() {
  return (
    <section className="py-32 px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-earth-900 leading-tight mb-4">
              Le Journal
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Des analyses évaluées par des pairs, la science de la nutrition et des protocoles pratiques pour guider votre parcours de bien-être.
            </p>
          </div>
          <Link 
            to="/journal"
            className="group flex items-center text-sm font-medium text-earth-900 hover:text-terra-600 transition-colors border-b border-earth-900 pb-1 whitespace-nowrap"
          >
            Lire tous les articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium tracking-widest uppercase text-stone-500 mb-3">
                <span className="text-terra-600">{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-xl font-serif text-earth-900 group-hover:text-terra-600 transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
