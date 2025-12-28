
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface PillarFBSlideProps {
    active: boolean;
}

export const PillarFBSlide: React.FC<PillarFBSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="식음료" subtitle="CULINARY CLUSTER" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full items-center">
                <div className="flex flex-col gap-6">
                    <div className="px-12 py-8 glass-dark rounded-full text-5xl font-black-han italic text-white">박신희</div>
                    <div className="px-12 py-8 glass-dark rounded-full text-5xl font-black-han italic text-white">김단미</div>
                </div>
                <div className="p-24 glass-dark rounded-[120px] text-center border-l-[30px] border-[#FF6B00]">
                    <p className="text-[9vw] font-black-han text-white italic tracking-tighter">6.2억</p>
                    <p className="text-sm font-bold text-[#FF6B00] tracking-[0.6em] uppercase mt-10">Market Dominance</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
