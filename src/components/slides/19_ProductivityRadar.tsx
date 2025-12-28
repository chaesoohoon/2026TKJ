
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface ProductivityRadarSlideProps {
    active: boolean;
}

export const ProductivityRadarSlide: React.FC<ProductivityRadarSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="생산성 상향" subtitle="TOTAL EFFICIENCY" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="space-y-12">
                    <h3 className="text-7xl font-black-han leading-tight tracking-tighter italic">조직 전체의<br /><span className="text-[#FF6B00]">상향 평준화</span></h3>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {[
                        { label: "주력 직종", target: "3,000 MH" },
                        { label: "전략 직종", target: "2,500 MH" },
                        { label: "지원 직종", target: "2,000 MH" },
                        { label: "성과 혁신", target: "UP 20%" }
                    ].map((t, i) => (
                        <div key={i} className="glass-dark p-12 rounded-[50px] border-b-8 border-[#FF6B00] hover:bg-white/5 transition-all">
                            <p className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase mb-3 italic">{t.label}</p>
                            <p className="text-5xl font-black-han text-white italic">{t.target}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};
