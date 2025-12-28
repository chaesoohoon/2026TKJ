
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

/* Slides */
import { IntroSlide } from './src/components/slides/01_Intro';
import { RevenueVisionSlide } from './src/components/slides/02_RevenueVision';
import { MacroMetricsSlide } from './src/components/slides/03_MacroMetrics';
import { SectorGiantsSlide } from './src/components/slides/04_SectorGiants';
import { SpecialtyUnitsSlide } from './src/components/slides/05_SpecialtyUnits';
import { InfrastructureSlide } from './src/components/slides/06_Infrastructure';
import { PillarWetakSlide } from './src/components/slides/07_PillarWetak';
import { PillarDesignArchSlide } from './src/components/slides/08_PillarDesignArch';
import { PillarAICreativeSlide } from './src/components/slides/09_PillarAICreative';
import { PillarFBSlide } from './src/components/slides/10_PillarFB';
import { LogisticsAdminSlide } from './src/components/slides/11_LogisticsAdmin';
import { SpecialistsSlide } from './src/components/slides/12_Specialists';
import { SupportTeamSlide } from './src/components/slides/13_SupportTeam';
import { RecruitmentSlide } from './src/components/slides/14_Recruitment';
import { EmploymentSlide } from './src/components/slides/15_Employment';
import { ExternalBusinessSlide } from './src/components/slides/16_ExternalBusiness';
import { QualityKPISlide } from './src/components/slides/17_QualityKPI';
import { EfficiencySlide } from './src/components/slides/18_Efficiency';
import { ProductivityRadarSlide } from './src/components/slides/19_ProductivityRadar';
import { MarketStrategySlide } from './src/components/slides/20_MarketStrategy';
import { RetentionSlide } from './src/components/slides/21_Retention';
import { CampusUpgradeSlide } from './src/components/slides/22_CampusUpgrade';
import { ProfitBreakthroughSlide } from './src/components/slides/23_ProfitBreakthrough';
import { BrandIdentitySlide } from './src/components/slides/24_BrandIdentity';
import { MissionReadySlide } from './src/components/slides/25_MissionReady';

const App: React.FC = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const totalSlides = 25;

   const handleNext = useCallback(() => setCurrentSlide(p => (p < totalSlides - 1 ? p + 1 : p)), []);
   const handlePrev = useCallback(() => setCurrentSlide(p => (p > 0 ? p - 1 : p)), []);

   useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
         if (e.key === 'ArrowRight' || e.key === ' ') handleNext();
         if (e.key === 'ArrowLeft') handlePrev();
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
   }, [handleNext, handlePrev]);

   return (
      <div className="relative w-screen h-screen bg-black text-white overflow-hidden select-none">

         <div className="layout-guide" />

         <div className="w-full h-full relative">
            <IntroSlide active={currentSlide === 0} />
            <RevenueVisionSlide active={currentSlide === 1} />
            <MacroMetricsSlide active={currentSlide === 2} />
            <SectorGiantsSlide active={currentSlide === 3} />
            <SpecialtyUnitsSlide active={currentSlide === 4} />
            <InfrastructureSlide active={currentSlide === 5} />
            <PillarWetakSlide active={currentSlide === 6} />
            <PillarDesignArchSlide active={currentSlide === 7} />
            <PillarAICreativeSlide active={currentSlide === 8} />
            <PillarFBSlide active={currentSlide === 9} />
            <LogisticsAdminSlide active={currentSlide === 10} />
            <SpecialistsSlide active={currentSlide === 11} />
            <SupportTeamSlide active={currentSlide === 12} />
            <RecruitmentSlide active={currentSlide === 13} />
            <EmploymentSlide active={currentSlide === 14} />
            <ExternalBusinessSlide active={currentSlide === 15} />
            <QualityKPISlide active={currentSlide === 16} />
            <EfficiencySlide active={currentSlide === 17} />
            <ProductivityRadarSlide active={currentSlide === 18} />
            <MarketStrategySlide active={currentSlide === 19} />
            <RetentionSlide active={currentSlide === 20} />
            <CampusUpgradeSlide active={currentSlide === 21} />
            <ProfitBreakthroughSlide active={currentSlide === 22} />
            <BrandIdentitySlide active={currentSlide === 23} />
            <MissionReadySlide active={currentSlide === 24} />
         </div>

         {/* Navigation UI */}
         <div className="absolute bottom-12 right-12 flex space-x-6 z-50">
            <button
               onClick={handlePrev}
               className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-all disabled:opacity-0"
               disabled={currentSlide === 0}
            >
               <ChevronLeft className="w-10 h-10" />
            </button>
            <button
               onClick={handleNext}
               className="p-4 rounded-full bg-[#FF6B00] hover:scale-110 transition-all disabled:opacity-0"
               disabled={currentSlide === totalSlides - 1}
            >
               <ChevronRight className="w-10 h-10 text-black" />
            </button>
         </div>

         <div className="absolute bottom-12 left-12 font-black-han text-neutral-500 tracking-tighter z-50 text-2xl">
            <span className="text-[#FF6B00]">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(totalSlides).padStart(2, '0')}
         </div>

      </div>
   );
};

export default App;
