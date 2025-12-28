
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface ProfitBreakthroughSlideProps {
    active: boolean;
}

export const ProfitBreakthroughSlide: React.FC<ProfitBreakthroughSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active} center>
            <SectionHeader title="수익 돌파" subtitle="DOMINION" />
            <div className="p-24 glass-dark rounded-[140px] border-l-[50px] border-[#FF6B00] w-full max-w-6xl">
                <h3 className="text-[9vw] font-black-han leading-none tracking-tighter text-white italic text-left uppercase">TARGET<br /><span className="text-[#FF6B00]">UNLIMITED</span></h3>
                <div className="flex items-end justify-between mt-20">
                    <div className="text-left">
                        <p className="text-2xl font-bold text-neutral-600 uppercase tracking-widest italic">2025 Current</p>
                        <p className="text-7xl font-black-han text-neutral-800 line-through opacity-40">1.82억</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-neutral-600 uppercase tracking-widest italic">2026 Strategic Goal</p>
                        <p className="text-[12vw] font-black-han text-white italic tracking-tighter text-[#FF6B00] leading-none">7.0억</p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
