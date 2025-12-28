
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface LogisticsAdminSlideProps {
    active: boolean;
}

export const LogisticsAdminSlide: React.FC<LogisticsAdminSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="운영 센터" subtitle="ADMIN POWER" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <div className="glass-dark p-20 rounded-[100px] space-y-12 border-b-[12px] border-[#FF6B00]">
                    <h4 className="text-6xl font-black-han text-white">염숙 / 물류 회계</h4>
                    <p className="text-7xl font-black-han text-white/20 italic tracking-tighter">2.6억</p>
                </div>
                <div className="glass-dark p-20 rounded-[100px] space-y-12 border-b-[12px] border-white/10">
                    <h4 className="text-6xl font-black-han text-white">박한별 / 사무 ERP</h4>
                    <p className="text-7xl font-black-han text-white/20 italic tracking-tighter">1.6억</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
