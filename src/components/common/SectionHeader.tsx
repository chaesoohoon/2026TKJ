
import React from 'react';

interface SectionHeaderProps {
    title: string;
    subtitle: string;
    color?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, color = '#FF6B00' }) => (
    <div className="flex flex-col mb-12 border-l-8 pl-10" style={{ borderColor: color }}>
        <span className="text-[14px] font-bold tracking-[0.4em] uppercase opacity-40 mb-3" style={{ color }}>2026 STRATEGIC OPERATION</span>
        <h3 className="text-6xl font-black-han tracking-tighter text-white">{title} <span style={{ color }}>{subtitle}</span></h3>
    </div>
);
