
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { INFRA_STATUS } from '../../constants';

interface InfrastructureSlideProps {
    active: boolean;
}

export const InfrastructureSlide: React.FC<InfrastructureSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="space-y-12">
                    <SectionHeader title="인프라" subtitle="TECHNICAL BASE" />
                    <h3 className="text-7xl font-black-han leading-tight tracking-tighter italic">완벽한 실습<br /><span className="text-[#FF6B00]">최강의 환경</span></h3>
                    <p className="text-3xl text-neutral-600 font-light italic">16개 전문 섹션별 정밀 환경 구축 완료</p>
                </div>
                <div className="space-y-6">
                    {INFRA_STATUS.labDetails.map((lab, i) => (
                        <div key={i} className="p-12 glass-dark rounded-[50px] flex justify-between items-center hover:bg-[#FF6B00]/10 border-l-[12px] border-[#FF6B00]">
                            <p className="text-4xl font-black-han text-white">{lab.type}</p>
                            <p className="text-7xl font-black-han text-[#FF6B00]">{lab.count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};
