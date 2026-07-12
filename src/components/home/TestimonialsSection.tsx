import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "Après des mois de fatigue systémique, le protocole de Réinitialisation Cellulaire du Foie a complètement transformé mon énergie de base. La différence est profonde.",
    author: "Elena R.",
    role: "Client Vérifié"
  },
  {
    quote: "Le niveau de transparence clinique ici est inégalé. Il est rare de trouver une entreprise botanique qui formule strictement selon des données évaluées par des pairs.",
    author: "Dr. James M.",
    role: "Médecin Naturopathe"
  },
  {
    quote: "Pas juste un autre complément. La Restauration du Microbiome a complètement réorganisé ma digestion. Je me sens plus léger, plus clair et plus ancré.",
    author: "Sarah T.",
    role: "Client Vérifié"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-cream-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-gold-500 font-medium tracking-widest text-sm uppercase mb-16">
          Résultats Cliniques
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <p className="text-xl md:text-2xl font-serif text-earth-900 leading-snug italic">
                "{item.quote}"
              </p>
              <div className="pt-4 border-t border-earth-900/10 w-12" />
              <div>
                <p className="text-sm font-medium text-earth-900">{item.author}</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
