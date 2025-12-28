
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface ExternalBusinessSlideProps {
    active: boolean;
}

export const ExternalBusinessSlide: React.FC<ExternalBusinessSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="외부 사업" subtitle="REVENUE DIVERSITY" />
            <div className="space-y-20 w-full">
                <p className="text-7xl font-black-han text-white italic">이영규 선생님 총괄</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="p-16 glass-dark rounded-[80px] border-b-[12px] border-[#FF6B00] space-y-6">
                        <p className="text-4xl font-black-han text-white uppercase italic">8개 유관기관</p>
                        <p className="text-2xl text-neutral-500 font-light">지자체 및 대학 연계 사업 전략적 파트너십 구축</p>
                    </div>
                    <div className="p-16 glass-dark rounded-[80px] border-b-[12px] border-[#FF6B00] space-y-6">
                        <p className="text-4xl font-black-han text-white uppercase italic">매출 1.0억</p>
                        <p className="text-2xl text-neutral-500 font-light">수익 다변화를 통한 안정적 재정 자립 모델 확보</p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
