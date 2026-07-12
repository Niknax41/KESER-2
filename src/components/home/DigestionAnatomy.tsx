import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';

const anatomyData = [
  {
    id: 'liver',
    name: 'Le Foie',
    shortDesc: 'Le filtre principal et moteur métabolique.',
    fullDesc: 'Votre foie est responsable de la neutralisation des toxines, du métabolisme des nutriments et de la production de bile. Il agit comme un gardien, s\'assurant que seul un sang pur et riche en nutriments circule dans votre système.',
    position: { top: '35%', left: '45%' }
  },
  {
    id: 'stomach',
    name: 'L\'Estomac',
    shortDesc: 'Dégradation primaire et défense acide.',
    fullDesc: 'À l\'aide d\'acides et d\'enzymes puissants, l\'estomac décompose les protéines complexes et neutralise les agents pathogènes ingérés, préparant les aliments pour l\'absorption intestinale.',
    position: { top: '42%', left: '55%' }
  },
  {
    id: 'intestines',
    name: 'Le Microbiome',
    shortDesc: 'Le centre de l\'immunité et de l\'absorption.',
    fullDesc: 'Abritant des milliers de milliards de bactéries, les intestins sont le lieu où les nutriments passent dans votre circulation sanguine et où réside 70 % de votre système immunitaire.',
    position: { top: '60%', left: '50%' }
  }
];

export default function DigestionAnatomy() {
  const [activeItem, setActiveItem] = useState(anatomyData[0]);

  return (
    <section className="py-32 px-6 bg-earth-900 text-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">L'Architecture de la Santé</h2>
          <p className="max-w-2xl mx-auto text-cream-200/80 leading-relaxed">
            Le véritable bien-être commence par la compréhension des systèmes interconnectés de votre corps. 
            Sélectionnez un organe pour explorer sa fonction clinique et son rôle dans la vitalité globale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Illustration Area */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-earth-800 rounded-full flex items-center justify-center p-8">
            <div className="absolute inset-0 opacity-20">
              {/* Abstract Body Shape Placeholder - A subtle svg shape */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cream-50 fill-current">
                <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.4,-46.3C91,-33.5,97.3,-18,97.1,-2.5C96.9,13,90.2,28.2,80.6,41.2C71,54.2,58.5,65,44.5,72.7C30.5,80.4,15.3,85,-0.6,86C-16.4,87,-32.8,84.4,-47.5,77.3C-62.2,70.2,-75.2,58.6,-83.4,44.2C-91.6,29.8,-95.1,12.5,-93.6,-4.1C-92.1,-20.7,-85.7,-36.7,-75.5,-49.4C-65.3,-62.1,-51.2,-71.5,-36.8,-78.3C-22.4,-85.1,-7.8,-89.3,6.3,-88C20.4,-86.7,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            {/* Markers */}
            {anatomyData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={cn(
                  "absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center transition-all duration-300 z-10 group",
                  activeItem.id === item.id ? "bg-gold-500 scale-110 shadow-lg" : "bg-cream-50/20 hover:bg-cream-50/40 backdrop-blur-sm"
                )}
                style={{ top: item.position.top, left: item.position.left }}
                aria-label={`Select ${item.name}`}
              >
                <div className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeItem.id === item.id ? "bg-earth-900" : "bg-cream-50"
                )} />
                {/* Ping animation for inactive ones to draw attention */}
                {activeItem.id !== item.id && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cream-50 opacity-20 group-hover:animate-ping" />
                )}
              </button>
            ))}
          </div>

          {/* Details Panel */}
          <div className="lg:pl-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 bg-earth-800/50 p-10 rounded-[2rem] border border-earth-800 backdrop-blur-sm"
              >
                <span className="text-gold-400 font-medium tracking-widest text-sm uppercase">Focus Clinique</span>
                <h3 className="text-3xl md:text-4xl font-serif">{activeItem.name}</h3>
                <p className="text-xl text-cream-100 font-light italic">
                  {activeItem.shortDesc}
                </p>
                <p className="text-cream-200/80 leading-relaxed pb-6">
                  {activeItem.fullDesc}
                </p>
                
                <button className="text-sm font-medium border-b border-gold-400 text-gold-400 pb-1 hover:text-gold-300 transition-colors">
                  Explorer les voies complètes
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
