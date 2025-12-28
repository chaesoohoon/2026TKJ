
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { ChevronRight } from 'lucide-react';

interface EfficiencySlideProps {
    active: boolean;
}

export const EfficiencySlide: React.FC<EfficiencySlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="운영 효율" subtitle="OPTIMIZED" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                <div className="p-20 glass-dark rounded-[100px] border-l-[30px] border-[#FF6B00] text-center">
                    <p className="text-3xl font-bold text-neutral-500 uppercase tracking-widest mb-12 italic">손실률 감축</p>
                    <div className="flex justify-center items-center gap-12">
                        <p className="text-7xl font-black-han text-neutral-800 line-through opacity-30">10%</p>
                        <ChevronRight size={80} className="text-[#FF6B00]" />
                        <p className="text-[10vw] font-black-han text-white italic tracking-tighter">6%</p>
                    </div>
                </div>
                <div className="p-20 glass-dark rounded-[100px] border-l-[30px] border-white/10 text-center">
                    <p className="text-3xl font-bold text-neutral-500 uppercase tracking-widest mb-12 italic">MH 목표</p>
                    <p className="text-[10vw] font-black-han text-white italic tracking-tighter">3,000+</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
