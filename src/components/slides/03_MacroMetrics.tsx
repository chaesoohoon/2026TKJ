
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface MacroMetricsSlideProps {
    active: boolean;
}

export const MacroMetricsSlide: React.FC<MacroMetricsSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="거시 지표" subtitle="DATA OVERVIEW" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                {[
                    { label: "일반고 위탁", val: "9.2억", growth: "▲39%" },
                    { label: "장기 과정", val: "6.1억", growth: "▲144%" },
                    { label: "단기 과정", val: "7.4억", growth: "▲32%" },
                    { label: "외부 사업", val: "1.0억", growth: "▲100%" }
                ].map((item, i) => (
                    <div key={i} className="glass-dark p-12 rounded-[50px] flex flex-col justify-between h-[320px] border-b-8 border-transparent hover:border-[#FF6B00] transition-all group">
                        <p className="text-[14px] font-bold text-neutral-500 uppercase tracking-widest group-hover:text-white">{item.label}</p>
                        <div>
                            <p className="text-6xl font-black-han text-white tracking-tighter">{item.val}</p>
                            <p className="text-2xl text-[#FF6B00] font-black-han mt-4 italic">{item.growth}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};
