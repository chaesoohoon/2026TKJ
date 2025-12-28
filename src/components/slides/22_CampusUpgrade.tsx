
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { HardDrive, Settings } from 'lucide-react';

interface CampusUpgradeSlideProps {
    active: boolean;
}

export const CampusUpgradeSlide: React.FC<CampusUpgradeSlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="공간 진화" subtitle="HARDWARE" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full items-center">
                <div className="space-y-10">
                    <div className="flex items-center gap-12 p-12 glass-dark rounded-[60px] border-l-[16px] border-[#FF6B00]">
                        <HardDrive size={72} className="text-[#FF6B00]" />
                        <div>
                            <p className="text-4xl font-black-han text-white uppercase italic">PC 40대 전면 교체 완료</p>
                            <p className="text-2xl text-neutral-500 font-light mt-2 italic">최고 사양 기반 훈련 효율 극대화</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-12 p-12 glass-dark rounded-[60px] border-l-[16px] border-white/10 opacity-60">
                        <Settings size={72} className="text-white/30" />
                        <div>
                            <p className="text-4xl font-black-han text-white uppercase italic">리모델링 완공 예정</p>
                            <p className="text-2xl text-neutral-500 font-light mt-2 italic">인포데스크 및 교무실 리뉴얼</p>
                        </div>
                    </div>
                </div>
                <p className="text-[15vw] font-black-han text-white/5 uppercase tracking-tighter">BASE<br />UPGRADE</p>
            </div>
        </SlideWrapper>
    );
};
