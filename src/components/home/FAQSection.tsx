import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

const faqs = [
  {
    question: "Combien de temps faut-il pour ressentir les bienfaits du soutien hépatique ?",
    answer: "Les études cliniques sur nos extraits botaniques de base (tels que Silybum marianum) suggèrent des changements métaboliques initiaux dans les 2 à 4 semaines. Cependant, la véritable régénération cellulaire et la régulation à la baisse des voies du stress oxydatif nécessitent généralement un protocole soutenu de 3 à 6 mois."
  },
  {
    question: "Les protocoles KESER peuvent-ils être associés en toute sécurité à des médicaments sur ordonnance ?",
    answer: "Parce que des plantes comme le Chardon-Marie et la feuille d'Artichaut influencent directement les enzymes du cytochrome P450 du foie (qui métabolisent les médicaments), elles peuvent modifier le taux d'élimination de certains médicaments. Nous conseillons fortement de consulter votre médecin traitant ou un naturopathe qualifié avant de commencer tout protocole."
  },
  {
    question: "Pourquoi utilisez-vous des probiotiques à base de spores dans la Restauration du Microbiome ?",
    answer: "Les probiotiques végétatifs traditionnels survivent rarement à l'environnement acide et hostile de l'estomac. Les souches à base de spores (espèces de Bacillus) possèdent une enveloppe protectrice naturelle, leur permettant d'arriver 100 % intactes dans l'intestin inférieur où il est cliniquement prouvé qu'elles colonisent et modulent le système immunitaire."
  },
  {
    question: "L'approvisionnement de vos ingrédients est-il strictement biologique ?",
    answer: "Oui. Chaque plante provient d'environnements certifiés biologiques ou de cueillette sauvage. Nous effectuons des tests de spectrométrie de masse par des tiers pour garantir l'absence absolue de pesticides, de métaux lourds et de mycotoxines, préservant ainsi la pureté des composés actifs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-cream-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-earth-900 mb-6">Questions Fréquentes</h2>
          <p className="text-stone-600 text-lg">
            Des réponses ancrées dans les preuves cliniques et la science botanique.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-earth-900/10 pb-4"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left py-4 focus:outline-none group"
                >
                  <span className="text-lg font-medium text-earth-900 pr-8 group-hover:text-terra-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-stone-400 transition-transform duration-300",
                      isOpen ? "rotate-180 text-terra-600" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-stone-600 leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
