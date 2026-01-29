import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, Lightbulb, MessageSquare, Code, Palette, Bot } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
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

  const skills = [
    { icon: Rocket, titleKey: 'skills.business.title', descKey: 'skills.business.desc' },
    { icon: Bot, titleKey: 'skills.ai.title', descKey: 'skills.ai.desc' },
    { icon: MessageSquare, titleKey: 'skills.consulting.title', descKey: 'skills.consulting.desc' },
    { icon: Code, titleKey: 'skills.engineering.title', descKey: 'skills.engineering.desc' },
    { icon: Palette, titleKey: 'skills.branding.title', descKey: 'skills.branding.desc' },
    { icon: Lightbulb, titleKey: 'skills.planning.title', descKey: 'skills.planning.desc' },
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {t('skills.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.titleKey}
                className={`group p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 
                  hover:bg-card hover:border-foreground/20 hover:-translate-y-1 
                  transition-all duration-500 cursor-default
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-foreground/10 rounded-lg group-hover:bg-foreground/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t(skill.titleKey)}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {t(skill.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
