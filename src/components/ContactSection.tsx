import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContactSection = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-24 px-6 bg-card/30"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('contact.title')}
        </h2>

        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="mailto:jumpei@ajfront.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-full
              hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Mail className="w-5 h-5" />
            <span>{t('contact.cta')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
