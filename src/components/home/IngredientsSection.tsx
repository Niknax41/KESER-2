import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ingredients = [
  {
    name: 'Silybum marianum',
    common: 'Chardon-Marie',
    focus: 'Hépatoprotection',
    image: 'https://images.unsplash.com/photo-1623862664971-d64eaf35c02c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Cynara scolymus',
    common: 'Feuille d\'Artichaut',
    focus: 'Production de Bile',
    image: 'https://images.unsplash.com/photo-1596485888285-05d6c827ea80?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Taraxacum officinale',
    common: 'Racine de Pissenlit',
    focus: 'Détoxification',
    image: 'https://images.unsplash.com/photo-1555562719-756774b9dcb9?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function IngredientsSection() {
  return (
    <section className="py-32 px-6 bg-earth-900 text-cream-50 overflow-hidden relative">
      <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-earth-800 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4 space-y-8">
            <span className="text-gold-400 font-medium tracking-widest text-sm uppercase">
              Bibliothèque Botanique
            </span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Transparence radicale <br/> sur les origines.
            </h2>
            <p className="text-cream-200/80 leading-relaxed text-lg">
              Nous retraçons chaque ingrédient jusqu'à la terre. Explorez notre vaste bibliothèque de plantes pour comprendre la recherche clinique, le contexte historique et l'origine de ce qui entre dans votre corps.
            </p>
            <div className="pt-8">
              <Link 
                to="/ingredients"
                className="inline-flex items-center text-sm font-medium tracking-wide uppercase hover:text-gold-400 transition-colors border-b border-cream-50 pb-1"
              >
                Accéder à la Bibliothèque
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ingredients.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative bg-earth-800">
                  <img 
                    src={item.image} 
                    alt={item.common}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-gold-400 text-xs tracking-widest uppercase mb-1">{item.focus}</p>
                    <h3 className="text-xl font-serif text-cream-50">{item.common}</h3>
                    <p className="text-cream-200/60 text-sm italic">{item.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
