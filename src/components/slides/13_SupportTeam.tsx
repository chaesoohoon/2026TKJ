
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';

interface SupportTeamSlideProps {
    active: boolean;
}

export const SupportTeamSlide: React.FC<SupportTeamSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="운영 지원" subtitle="STRATEGIC BACKBONE" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <h3 className="text-7xl font-black-han leading-tight tracking-tighter italic">지속 가능한<br /><span className="text-[#FF6B00]">운영 고도화</span></h3>
                <div className="space-y-6">
                    {[
                        "NCS 확인강사 쿼터제 리딩 및 상시 유지",
                        "교강사 수업 투입 프로세스 조기 안정화",
                        "시설 및 교육 컨텐츠 정밀 모니터링 시스템",
                        "신규 우수 인력 채용 및 온보딩 고도화"
                    ].map((text, i) => (
                        <div key={i} className="p-10 glass-dark rounded-[40px] flex items-center gap-8 border-l-8 border-[#FF6B00]">
                            <p className="text-2xl text-neutral-300 font-bold leading-tight">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SlideWrapper>
    );
};
