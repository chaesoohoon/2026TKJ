
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface RevenueVisionSlideProps {
    active: boolean;
}

export const RevenueVisionSlide: React.FC<RevenueVisionSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="매출 로드맵" subtitle="23.8억 선언" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="space-y-8">
                    <h2 className="text-[11vw] font-black-han leading-none tracking-tighter text-[#FF6B00]">23.8억</h2>
                    <p className="text-4xl text-neutral-500 font-light leading-relaxed max-w-xl">
                        단순한 숫자를 넘어선 압도적 시장 지배력.<br />우리는 결과를 통해 가치를 증명합니다.
                    </p>
                </div>
                <div className="glass-dark p-16 rounded-[80px] border-l-[20px] border-[#FF6B00]">
                    <p className="text-sm font-bold text-neutral-600 uppercase tracking-widest mb-6">Estimated Net Profit</p>
                    <p className="text-9xl font-black-han text-white italic tracking-tighter">7.0억</p>
                    <div className="mt-12 h-2 w-full bg-white/5 rounded-full">
                        <div className="h-full bg-[#FF6B00] w-[75%] shadow-[0_0_30px_#FF6B00]" />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
