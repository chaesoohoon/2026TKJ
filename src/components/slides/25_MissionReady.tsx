
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';

interface MissionReadySlideProps {
    active: boolean;
}

export const MissionReadySlide: React.FC<MissionReadySlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active} center>
            <div className="space-y-16 font-black-han italic">
                <div className="inline-block px-20 py-8 bg-[#FF6B00] text-black font-black text-5xl mb-16 shadow-[0_0_60px_rgba(255,107,0,0.6)]">
                    2026 MISSION READY
                </div>
                <h3 className="text-[11vw] font-black-han text-white leading-[0.85] tracking-tighter uppercase">LEAD THE<br /><span className="text-[#FF6B00]">FUTURE</span></h3>
                <p className="text-4xl font-bold text-neutral-600 uppercase tracking-[0.6em] mt-20">첨단 국제직업전문학교</p>
            </div>
        </SlideWrapper>
    );
};
