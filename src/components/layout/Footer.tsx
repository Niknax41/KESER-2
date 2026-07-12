import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-cream-50 py-20 px-6 md:px-12 border-t border-earth-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="text-3xl font-serif tracking-wide text-cream-50">
            KESER
          </Link>
          <p className="text-stone-400 max-w-xs text-sm leading-relaxed">
            Pionnier d'une approche de la santé digestive et hépatique basée sur la recherche. 
            Enraciné dans la nature, validé par la science.
          </p>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-medium text-sm tracking-wider uppercase text-stone-400">Explorer</h4>
          <ul className="space-y-3">
            <li><Link to="/learn" className="text-sm hover:text-gold-400 transition-colors">Centre d'Éducation</Link></li>
            <li><Link to="/protocols" className="text-sm hover:text-gold-400 transition-colors">Protocoles</Link></li>
            <li><Link to="/ingredients" className="text-sm hover:text-gold-400 transition-colors">Ingrédients</Link></li>
            <li><Link to="/journal" className="text-sm hover:text-gold-400 transition-colors">Journal</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="font-medium text-sm tracking-wider uppercase text-stone-400">Boutique</h4>
          <ul className="space-y-3">
            <li><Link to="/products" className="text-sm hover:text-gold-400 transition-colors">Tous les Produits</Link></li>
            <li><Link to="/products/liver" className="text-sm hover:text-gold-400 transition-colors">Soutien Hépatique</Link></li>
            <li><Link to="/products/microbiome" className="text-sm hover:text-gold-400 transition-colors">Microbiome</Link></li>
            <li><Link to="/bundles" className="text-sm hover:text-gold-400 transition-colors">Packs</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-4">
          <h4 className="font-medium text-sm tracking-wider uppercase text-stone-400">Infolettre</h4>
          <p className="text-sm text-stone-400">Rejoignez notre communauté pour des perspectives scientifiques et des protocoles saisonniers.</p>
          <form className="flex mt-2">
            <input 
              type="email" 
              placeholder="Votre adresse e-mail" 
              className="bg-earth-800 border-none text-cream-50 text-sm px-4 py-3 w-full rounded-l focus:outline-none focus:ring-1 focus:ring-gold-400 placeholder:text-stone-500"
            />
            <button className="bg-gold-500 hover:bg-gold-400 text-earth-900 px-6 py-3 rounded-r text-sm font-medium transition-colors">
              S'inscrire
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-earth-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-stone-500">
          &copy; {new Date().getFullYear()} KESER Bien-être. Tous droits réservés.
        </p>
        <div className="flex space-x-6 text-xs text-stone-500">
          <Link to="/privacy" className="hover:text-cream-50 transition-colors">Politique de Confidentialité</Link>
          <Link to="/terms" className="hover:text-cream-50 transition-colors">Conditions Générales</Link>
          <Link to="/disclaimer" className="hover:text-cream-50 transition-colors">Avis Médical</Link>
        </div>
      </div>
    </footer>
  );
}
