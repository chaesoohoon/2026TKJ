
import React from 'react';
import { SlideWrapper } from '../common/SlideWrapper';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldAlert, Zap } from 'lucide-react';
import { COMPETITORS } from '../../constants';

interface MarketStrategySlideProps {
    active: boolean;
}

export const MarketStrategySlide: React.FC<MarketStrategySlideProps> = ({ active }) => {
    return (
        <SlideWrapper active={active}>
            <SectionHeader title="시장 상황" subtitle="INTELLIGENCE" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
                <div className="space-y-8">
                    {COMPETITORS.map((c, i) => (
                        <div key={i} className="p-12 glass-dark rounded-[60px] border-l-8 border-white/20 hover:border-[#FF6B00] transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <ShieldAlert size={28} className="text-[#FF6B00]" />
                                <h4 className="text-3xl font-black-han text-white uppercase italic">{c.name}</h4>
                            </div>
                            <p className="text-xl text-neutral-500 italic leading-snug break-keep">약점: {c.weakness}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-8 bg-[#FF6B00]/5 p-12 rounded-[80px] border-2 border-[#FF6B00]/20">
                    <div className="flex items-center gap-6 mb-8">
                        <Zap size={48} className="text-[#FF6B00]" />
                        <h4 className="text-5xl font-black-han text-white italic">STRATEGIC RESPONSE</h4>
                    </div>
                    <div className="space-y-10">
                        {COMPETITORS.map((c, i) => (
                            <div key={i} className="space-y-3">
                                <p className="text-xs font-bold text-[#FF6B00] tracking-widest uppercase">Targeting {c.name}</p>
                                <p className="text-2xl font-bold text-white leading-snug break-keep">대응 전략: {c.improvement}</p>
                                <div className="h-[1px] w-full bg-white/10 mt-4" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
