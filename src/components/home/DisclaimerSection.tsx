export default function DisclaimerSection() {
  return (
    <section className="py-12 px-6 bg-earth-800 text-cream-200 border-t border-earth-900">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h4 className="text-xs font-bold tracking-widest uppercase text-gold-400">Avis Médical</h4>
        <p className="text-xs leading-relaxed max-w-4xl mx-auto opacity-80">
          Les informations et protocoles présentés sur cette plateforme le sont uniquement à des fins éducatives et informatives. Ils ne sont pas destinés à remplacer l'avis médical, le diagnostic ou le traitement d'un professionnel. Demandez toujours l'avis de votre médecin ou d'un autre professionnel de la santé qualifié pour toute question concernant un problème médical. Ne négligez jamais un avis médical professionnel et ne tardez pas à le consulter en raison de ce que vous avez lu sur ce site web. Les produits mentionnés ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.
        </p>
      </div>
    </section>
  );
}
