import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('about.title')}
        </h2>

        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 overflow-hidden">
            <span className="text-6xl md:text-7xl font-bold text-foreground/40">JT</span>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {t('about.name')}
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              {t('about.role')}
            </p>
            <p className="text-foreground/70 leading-relaxed">
              {t('about.bio')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
