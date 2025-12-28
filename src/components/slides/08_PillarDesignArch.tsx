
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface PillarDesignArchSlideProps {
    active: boolean;
}

export const PillarDesignArchSlide: React.FC<PillarDesignArchSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="기술 혁신" subtitle="DX FUSION" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="grid grid-cols-2 gap-8">
                    <div className="p-16 glass-dark rounded-[70px] text-center border-b-8 border-[#FF6B00]">
                        <p className="text-5xl font-black-han text-white">강민기</p>
                        <p className="text-sm text-[#FF6B00] font-bold uppercase tracking-widest mt-4">Design</p>
                    </div>
                    <div className="p-16 glass-dark rounded-[70px] text-center border-b-8 border-[#FF6B00]">
                        <p className="text-5xl font-black-han text-white">강기환</p>
                        <p className="text-sm text-[#FF6B00] font-bold uppercase tracking-widest mt-4">Architecture</p>
                    </div>
                </div>
                <div className="space-y-10">
                    <p className="text-[7vw] font-black-han text-white/10 tracking-tighter italic leading-none">8.04억</p>
                    <p className="text-3xl text-neutral-500 font-light leading-relaxed">BIM 건축 설계와 멀티미디어 디자인의<br />전략적 융합 및 실무 프로세스 혁신</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
