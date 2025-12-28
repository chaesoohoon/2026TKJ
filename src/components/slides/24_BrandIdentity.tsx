
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface BrandIdentitySlideProps {
    active: boolean;
}

export const BrandIdentitySlide: React.FC<BrandIdentitySlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active} center>
            <SectionHeader title="브랜드 가치" subtitle="BENCHMARK" />
            <div className="space-y-20">
                <h3 className="text-[12vw] font-black-han leading-[0.85] tracking-tighter uppercase italic text-[#FF6B00]">THE STANDARD</h3>
                <p className="text-6xl font-black-han text-white leading-tight italic max-w-6xl mx-auto break-keep border-y-2 border-white/5 py-16">
                    "첨단 지역 <span className="text-[#FF6B00]">물류와 건축</span>.<br />우리가 정답이고 기준입니다."
                </p>
            </div>
        </SlideWrapper>
    );
};
