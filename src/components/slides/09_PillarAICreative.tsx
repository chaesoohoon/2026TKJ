
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface PillarAICreativeSlideProps {
    active: boolean;
}

export const PillarAICreativeSlide: React.FC<PillarAICreativeSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active} center>
            <SectionHeader title="AI 전략" subtitle="NEXT GEN" />
            <h3 className="text-[9vw] font-black-han leading-none tracking-tighter text-white uppercase italic">BEYOND<br /><span className="text-[#FF6B00]">INTELLIGENCE</span></h3>
            <p className="text-3xl text-neutral-400 italic max-w-4xl mt-16 font-light leading-relaxed">채수훈 강사 전담: 생성형 AI 특강 시범 가동 및<br />전 과정 유료 AI 툴 활용 교육 시스템 구축</p>
        </SlideWrapper>
    );
};
