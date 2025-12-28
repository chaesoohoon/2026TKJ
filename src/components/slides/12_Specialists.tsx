
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { Scissors, Layout, Globe } from 'lucide-react';

interface SpecialistsSlideProps {
    active: boolean;
}

export const SpecialistsSlide: React.FC<SpecialistsSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="전문 분야" subtitle="ELITE FORCES" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
                {[
                    { name: "강연우", dept: "이미용/뷰티", icon: <Scissors size={48} /> },
                    { name: "최규남", dept: "실내 건축", icon: <Layout size={48} /> },
                    { name: "김종수", dept: "XR/METAVERSE", icon: <Globe size={48} /> }
                ].map((s, i) => (
                    <div key={i} className="glass-dark p-16 rounded-[70px] text-center space-y-10 hover:bg-[#FF6B00]/5 border-t-8 border-transparent hover:border-[#FF6B00]">
                        <div className="text-[#FF6B00] flex justify-center">{s.icon}</div>
                        <div>
                            <p className="text-5xl font-black-han text-white italic">{s.name}</p>
                            <p className="text-[#FF6B00] text-sm font-bold tracking-widest uppercase mt-4 italic">{s.dept}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};
