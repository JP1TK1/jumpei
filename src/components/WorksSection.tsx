import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Import all work images
import BlackThunderImg from '@/assets/works/Black_thunder.png';
import XlargeImg from '@/assets/works/XLARGE.jpg';
import OneImg from '@/assets/works/ONEsite.png';
import PortlandImg from '@/assets/works/Portland_StartUp.jpeg';
import Park24Img from '@/assets/works/Park24.jpg';
import ImmersiveImg from '@/assets/works/dome_immersive.jpg';
import ArviImg from '@/assets/works/3DARVI.png';
import MangaIpImg from '@/assets/works/MANGA_IPpg.jpg';
import PlasticImg from '@/assets/works/Platic_smart.png';
import PlantechImg from '@/assets/works/Plantec.png';
import Undr12Img from '@/assets/works/UNDR12.jpg';
import IetsunaImg from '@/assets/works/Ietsuna.png';
import PlanImg from '@/assets/works/Plan_international.png';
import ShochikuImg from '@/assets/works/Shochiku.png';
import HanamoriImg from '@/assets/works/Hanaemori.jpg';
import JrImg from '@/assets/works/JR_Central_Shinkansen.jpg';

const WorksSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedWork, setSelectedWork] = useState<{
    titleKey: string;
    descKey: string;
    image: string | null;
  } | null>(null);
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
    { titleKey: 'works.blackthunder.title', descKey: 'works.blackthunder.desc', color: 'bg-amber-400/20', image: BlackThunderImg },
    { titleKey: 'works.xlarge.title', descKey: 'works.xlarge.desc', color: 'bg-lime-400/20', image: XlargeImg },
    { titleKey: 'works.one.title', descKey: 'works.one.desc', color: 'bg-emerald-400/20', image: OneImg },
    { titleKey: 'works.portland.title', descKey: 'works.portland.desc', color: 'bg-yellow-400/20', image: PortlandImg },
    { titleKey: 'works.park24.title', descKey: 'works.park24.desc', color: 'bg-blue-400/20', image: Park24Img },
    { titleKey: 'works.immersive.title', descKey: 'works.immersive.desc', color: 'bg-purple-400/20', image: ImmersiveImg },
    { titleKey: 'works.3darvi.title', descKey: 'works.3darvi.desc', color: 'bg-cyan-400/20', image: ArviImg },
    { titleKey: 'works.ip.title', descKey: 'works.ip.desc', color: 'bg-pink-400/20', image: MangaIpImg },
    { titleKey: 'works.scm.title', descKey: 'works.scm.desc', color: 'bg-green-400/20', image: null },
    { titleKey: 'works.plastic.title', descKey: 'works.plastic.desc', color: 'bg-teal-400/20', image: PlasticImg },
    { titleKey: 'works.plantech.title', descKey: 'works.plantech.desc', color: 'bg-orange-400/20', image: PlantechImg },
    { titleKey: 'works.undr12.title', descKey: 'works.undr12.desc', color: 'bg-red-400/20', image: Undr12Img },
    { titleKey: 'works.ietsuna.title', descKey: 'works.ietsuna.desc', color: 'bg-indigo-400/20', image: IetsunaImg },
    { titleKey: 'works.plan.title', descKey: 'works.plan.desc', color: 'bg-rose-400/20', image: PlanImg },
    { titleKey: 'works.shochiku.title', descKey: 'works.shochiku.desc', color: 'bg-violet-400/20', image: ShochikuImg },
    { titleKey: 'works.hanamori.title', descKey: 'works.hanamori.desc', color: 'bg-fuchsia-400/20', image: HanamoriImg },
    { titleKey: 'works.jr.title', descKey: 'works.jr.desc', color: 'bg-sky-400/20', image: JrImg },
  ];

  const displayedWorks = isExpanded ? works : works.slice(0, 6);

  const handleCardClick = (work: typeof works[0]) => {
    setSelectedWork({
      titleKey: work.titleKey,
      descKey: work.descKey,
      image: work.image,
    });
  };

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
          {displayedWorks.map((work, index) => (
            <div
              key={work.titleKey}
              onClick={() => handleCardClick(work)}
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
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors flex items-center justify-center">
                <span className="text-xs text-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>

        {works.length > 6 && (
          <div className={`flex justify-center mt-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gap-2"
            >
              {isExpanded ? (
                <>
                  {t('works.less')}
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  {t('works.more')}
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent 
          className="max-w-4xl w-[95vw] p-0 overflow-hidden duration-300 ease-out"
          aria-describedby="work-dialog-description"
        >
          <DialogHeader className="p-4 pb-2">
            <DialogTitle className="text-lg font-semibold">
              {selectedWork && t(selectedWork.titleKey)}
            </DialogTitle>
            <p id="work-dialog-description" className="text-sm text-muted-foreground">
              {selectedWork && t(selectedWork.descKey)}
            </p>
          </DialogHeader>
          <div className="relative w-full bg-muted flex items-center justify-center min-h-[300px]">
            {selectedWork?.image ? (
              <img
                src={selectedWork.image}
                alt={selectedWork ? t(selectedWork.titleKey) : ''}
                className="w-full h-auto max-h-[70vh] object-contain animate-fade-in"
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <X className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-lg">No Image</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorksSection;
