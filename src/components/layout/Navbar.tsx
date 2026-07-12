import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Apprendre', path: '/learn' },
  { name: 'Protocoles', path: '/protocols' },
  { name: 'Produits', path: '/products' },
  { name: 'Ingrédients', path: '/ingredients' },
  { name: 'À propos', path: '/about' },
  { name: 'Journal', path: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif tracking-wide text-earth-900 z-50 relative">
          KESER
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-terra-600',
                location.pathname === link.path ? 'text-terra-600' : 'text-stone-800'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6 z-50 relative">
          <button className="hidden md:block text-sm font-medium hover:text-terra-600 transition-colors">
            Se connecter
          </button>
          <button className="relative group">
            <ShoppingBag className="w-5 h-5 text-stone-800 group-hover:text-terra-600 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-terra-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-stone-800" />
            ) : (
              <Menu className="w-6 h-6 text-stone-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 bg-cream-50 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="text-3xl font-serif text-earth-900 hover:text-terra-600 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
