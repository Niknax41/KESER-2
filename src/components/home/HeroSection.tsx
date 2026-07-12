import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-earth-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2727&auto=format&fit=crop"
          alt="Botanical nature landscape"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/40 via-earth-900/20 to-earth-900/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <span className="inline-block text-gold-400 text-sm font-medium tracking-widest uppercase mb-4">
            Bien-être fondé sur la recherche
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream-50 leading-tight">
            Le fondement de <br className="hidden md:block" />
            <span className="italic text-cream-200">la vitalité totale.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-cream-200/90 font-light leading-relaxed">
            À la croisée de la sagesse botanique traditionnelle et de la recherche clinique moderne pour soutenir votre foie, votre microbiome et votre santé cellulaire globale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link 
              to="/learn" 
              className="w-full sm:w-auto px-8 py-4 border border-cream-50/30 text-cream-50 rounded-full hover:bg-cream-50 hover:text-earth-900 transition-all duration-300 flex items-center justify-center group"
            >
              Explorer la Science
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/products" 
              className="w-full sm:w-auto px-8 py-4 bg-terra-500 text-cream-50 rounded-full hover:bg-terra-600 transition-all duration-300 font-medium"
            >
              Découvrir les Protocoles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
