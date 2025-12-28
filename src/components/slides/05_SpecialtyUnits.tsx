
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface SpecialtyUnitsSlideProps {
    active: boolean;
}

export const SpecialtyUnitsSlide: React.FC<SpecialtyUnitsSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="직종 목표" subtitle="GROWTH SECTORS" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {[
                    { name: "디자인/영상", target: "2.5억" },
                    { name: "이미용/뷰티", target: "1.7억" },
                    { name: "일반 사무", target: "1.6억" },
                    { name: "제과제빵", target: "1.4억" }
                ].map((s, i) => (
                    <div key={i} className="glass-dark p-12 rounded-[60px] flex flex-col justify-between h-[300px] hover:border-[#FF6B00] transition-all group">
                        <h4 className="text-3xl font-black-han text-neutral-400 group-hover:text-white">{s.name}</h4>
                        <p className="text-6xl font-black-han text-[#FF6B00] italic tracking-tighter">{s.target}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};
