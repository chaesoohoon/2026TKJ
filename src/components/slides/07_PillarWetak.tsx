
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface PillarWetakSlideProps {
    active: boolean;
}

export const PillarWetakSlide: React.FC<PillarWetakSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="주력 사업" subtitle="일반고 위탁" />
            <div className="flex flex-col md:flex-row gap-24 items-end w-full">
                <div className="flex-1 space-y-12">
                    <h3 className="text-[8vw] font-black-han leading-none tracking-tighter italic">압도적<br /><span className="text-[#FF6B00]">시장 점유</span></h3>
                    <p className="text-5xl font-black-han text-white border-b-4 border-[#FF6B00] pb-6 inline-block">신혜정 선임 총괄</p>
                </div>
                <div className="flex-1 p-24 glass-dark rounded-[120px] text-center border-t-[16px] border-[#FF6B00]">
                    <p className="text-[10vw] font-black-han text-white italic tracking-tighter">9.2억</p>
                    <p className="text-sm font-bold text-[#FF6B00] tracking-[0.6em] uppercase mt-10 italic">Core Growth Engine</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
