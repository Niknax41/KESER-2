import { motion } from 'motion/react';

export default function ProblemSection() {
  return (
    <section className="py-32 px-6 bg-cream-50">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-earth-900 leading-tight">
            L'environnement moderne sollicite <br className="hidden md:block"/> intensément votre biologie.
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Les toxines environnementales, les aliments ultra-transformés et le stress chronique forcent votre foie et votre système digestif à fonctionner au-delà de leur capacité naturelle. Ce fardeau continu perturbe votre harmonie métabolique, entraînant une fatigue systémique et une altération de la santé.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-12 border-t border-cream-200">
          {[
            {
              title: "Voies Surchargées",
              desc: "Le foie remplit plus de 500 fonctions vitales, mais la charge toxique moderne ralentit la détoxification de phase I et II."
            },
            {
              title: "Perturbation du Microbiome",
              desc: "Le stress et l'alimentation altèrent l'équilibre délicat de votre flore intestinale, compromettant l'absorption des nutriments."
            },
            {
              title: "Fatigue Cellulaire",
              desc: "Lorsque les voies d'élimination ralentissent, le stress oxydatif s'accumule, privant les cellules de l'énergie nécessaire pour prospérer."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="space-y-4"
            >
              <div className="h-px w-12 bg-terra-500 mb-6" />
              <h3 className="text-xl font-serif text-earth-800">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
