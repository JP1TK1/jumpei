import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground animate-fade-in-up opacity-0">
          {t('hero.title')}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 animate-fade-in-up opacity-0 stagger-2">
          {t('hero.subtitle')}
        </p>
      </div>

      <button 
        onClick={scrollToSkills}
        className="absolute bottom-12 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8 text-foreground/60" />
      </button>
    </section>
  );
};

export default HeroSection;
