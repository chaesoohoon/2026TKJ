
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { RETENTION_TARGETS } from '../../constants';

interface RetentionSlideProps {
    active: boolean;
}

export const RetentionSlide: React.FC<RetentionSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="이월률 강화" subtitle="SUSTAINABLE" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="p-24 glass-dark rounded-[120px] text-center border-t-[16px] border-[#FF6B00]">
                    <div className="flex justify-center items-center gap-12">
                        <p className="text-7xl font-black-han text-neutral-800 opacity-30 italic">16%</p>
                        <ArrowUpRight size={100} className="text-[#FF6B00]" />
                        <p className="text-[12vw] font-black-han text-white leading-none">20%</p>
                    </div>
                </div>
                <div className="space-y-6">
                    {RETENTION_TARGETS.map((t, i) => (
                        <div key={i} className="p-10 glass-dark rounded-[40px] flex justify-between items-center border-l-8 border-white/5 hover:border-[#FF6B00]">
                            <p className="text-3xl font-black-han text-neutral-400 italic">{t.sector}</p>
                            <p className="text-6xl font-black-han text-[#FF6B00] italic">{t.rate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};
