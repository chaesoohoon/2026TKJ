
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { Star } from 'lucide-react';

interface QualityKPISlideProps {
    active: boolean;
}

export const QualityKPISlide: React.FC<QualityKPISlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active} center>
            <SectionHeader title="품질 지표" subtitle="TRUST" />
            <div className="flex gap-24 items-center justify-center">
                <div className="text-center group">
                    <p className="text-neutral-600 font-bold text-base tracking-[0.5em] uppercase mb-12">Total Completion</p>
                    <p className="text-[13vw] font-black-han text-white leading-none tracking-tighter">93%</p>
                </div>
                <div className="h-72 w-[2px] bg-white/10" />
                <div className="text-center group">
                    <p className="text-neutral-600 font-bold text-base tracking-[0.5em] uppercase mb-12">Student Satisfaction</p>
                    <div className="flex items-center gap-8">
                        <p className="text-[13vw] font-black-han text-white leading-none tracking-tighter">4.8</p>
                        <Star size={100} className="text-[#FF6B00] fill-[#FF6B00] animate-pulse" />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
