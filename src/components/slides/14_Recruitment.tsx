
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface RecruitmentSlideProps {
    active: boolean;
}

export const RecruitmentSlide: React.FC<RecruitmentSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="입학 상담" subtitle="CONVERSION" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full items-center">
                <div className="p-24 glass-dark rounded-[120px] border-l-[40px] border-[#FF6B00] text-center">
                    <p className="text-[12vw] font-black-han text-white leading-none">60%</p>
                    <p className="text-base font-bold text-[#FF6B00] tracking-[0.6em] uppercase mt-10 italic">Target Rate</p>
                </div>
                <div className="space-y-10">
                    <p className="text-6xl font-black-han text-white">이세아 선생님 총괄</p>
                    <p className="text-3xl text-neutral-500 font-light italic leading-relaxed">"상담은 확신을 파는 예술입니다.<br />데이터에 기반한 정밀한 입학 설계 가동"</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
