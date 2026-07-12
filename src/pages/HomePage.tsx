import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import DigestionAnatomy from '../components/home/DigestionAnatomy';
import ProductsSection from '../components/home/ProductsSection';
import IngredientsSection from '../components/home/IngredientsSection';
import ArticlesSection from '../components/home/ArticlesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import DisclaimerSection from '../components/home/DisclaimerSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <DigestionAnatomy />
      <ProductsSection />
      <IngredientsSection />
      <ArticlesSection />
      <TestimonialsSection />
      <FAQSection />
      <DisclaimerSection />
    </div>
  );
}
