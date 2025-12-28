
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface EmploymentSlideProps {
    active: boolean;
}

export const EmploymentSlide: React.FC<EmploymentSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="취업 지원" subtitle="SUCCESS EXIT" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="space-y-10">
                    <h3 className="text-7xl font-black-han leading-none tracking-tighter italic">성공적인<br /><span className="text-[#FF6B00]">사회 진출</span></h3>
                    <p className="text-5xl font-black-han text-white border-b-2 border-white/10 pb-4 inline-block">나수진 선생님 총괄</p>
                </div>
                <div className="space-y-8">
                    <div className="p-14 glass-dark rounded-[70px] flex justify-between items-center border-l-[12px] border-[#FF6B00]">
                        <p className="text-3xl font-black-han text-neutral-400">국기 과정</p>
                        <p className="text-8xl font-black-han text-white">70%</p>
                    </div>
                    <div className="p-14 glass-dark rounded-[70px] flex justify-between items-center border-l-[12px] border-white/20">
                        <p className="text-3xl font-black-han text-neutral-400">계좌제</p>
                        <p className="text-8xl font-black-han text-white">60%</p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
