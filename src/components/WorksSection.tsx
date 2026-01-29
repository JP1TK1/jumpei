import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const WorksSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const works = [
    { 
      titleKey: 'works.blackthunder.title', 
      descKey: 'works.blackthunder.desc',
      color: 'bg-amber-400/20'
    },
    { 
      titleKey: 'works.park24.title', 
      descKey: 'works.park24.desc',
      color: 'bg-blue-400/20'
    },
    { 
      titleKey: 'works.immersive.title', 
      descKey: 'works.immersive.desc',
      color: 'bg-purple-400/20'
    },
    { 
      titleKey: 'works.3darvi.title', 
      descKey: 'works.3darvi.desc',
      color: 'bg-cyan-400/20'
    },
    { 
      titleKey: 'works.ip.title', 
      descKey: 'works.ip.desc',
      color: 'bg-pink-400/20'
    },
    { 
      titleKey: 'works.scm.title', 
      descKey: 'works.scm.desc',
      color: 'bg-green-400/20'
    },
  ];

  return (
    <section 
      id="works" 
      ref={sectionRef}
      className="py-24 px-6 bg-card/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('works.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <div
              key={work.titleKey}
              className={`group relative overflow-hidden rounded-lg cursor-pointer
                transition-all duration-500 hover:scale-[1.02]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className={`aspect-[4/3] ${work.color} flex items-center justify-center p-6`}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:scale-105 transition-transform">
                    {t(work.titleKey)}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {t(work.descKey)}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
