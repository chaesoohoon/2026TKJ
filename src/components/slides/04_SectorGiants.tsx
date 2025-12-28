
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface SectorGiantsSlideProps {
    active: boolean;
}

export const SectorGiantsSlide: React.FC<SectorGiantsSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="직종 목표" subtitle="PILLAR ENGINES" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full font-black-han">
                {[
                    { name: "건축 설계", target: "7.9억", leader: "최규남" },
                    { name: "바리스타", target: "4.8억", leader: "박신희" },
                    { name: "물류 회계", target: "2.6억", leader: "염숙" }
                ].map((s, i) => (
                    <div key={i} className="glass-dark p-14 rounded-[80px] flex flex-col justify-between h-[420px] border-b-[12px] border-[#FF6B00]">
                        <div className="space-y-4">
                            <p className="text-neutral-600 font-bold text-xs tracking-widest uppercase italic">Lead: {s.leader}</p>
                            <h4 className="text-5xl font-black-han text-white leading-tight">{s.name}</h4>
                        </div>
                        <p className="text-8xl font-black-han text-white italic tracking-tighter">{s.target}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};
