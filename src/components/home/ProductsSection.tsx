import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'liver-reset',
    name: 'Réinitialisation Cellulaire du Foie',
    category: 'Protocole Fondamental',
    desc: 'Formulé cliniquement pour soutenir les voies de détoxification de phase I et II. Comprend du Chardon-Marie standardisé, de la NAC et de la feuille d\'Artichaut.',
    price: '58,00 €',
    image: 'https://images.unsplash.com/photo-1611078508753-4876b66d8b37?q=80&w=2000&auto=format&fit=crop' // Minimal aesthetic bottle placeholder
  },
  {
    id: 'microbiome-restore',
    name: 'Restauration du Microbiome',
    category: 'Santé Intestinale',
    desc: 'Un symbiotique robuste combinant des probiotiques ciblés à base de spores avec des fibres prébiotiques pour réensemencer et nourrir la muqueuse intestinale.',
    price: '64,00 €',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2000&auto=format&fit=crop'
  }
];

export default function ProductsSection() {
  return (
    <section className="py-32 px-6 bg-cream-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-terra-600 font-medium tracking-widest text-sm uppercase mb-4 block">
              Formulé pour l'efficacité
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-earth-900 leading-tight">
              Des protocoles de grade clinique <br/>
              issus de la nature.
            </h2>
          </div>
          <Link 
            to="/products"
            className="group flex items-center text-sm font-medium text-earth-900 hover:text-terra-600 transition-colors border-b border-earth-900 pb-1"
          >
            Voir toutes les formules
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-cream-200 rounded-3xl overflow-hidden mb-8 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-cream-50/90 backdrop-blur-sm text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full text-earth-900">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-serif text-earth-900">{product.name}</h3>
                  <span className="text-lg font-medium text-earth-800">{product.price}</span>
                </div>
                <p className="text-stone-600 leading-relaxed max-w-md">
                  {product.desc}
                </p>
                <button className="text-terra-600 font-medium text-sm tracking-wide uppercase hover:text-terra-500 transition-colors pt-4">
                  Explorer la formulation →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
