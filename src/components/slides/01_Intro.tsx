
import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../common/SlideWrapper';

interface IntroSlideProps {
    active: boolean;
}

export const IntroSlide: React.FC<IntroSlideProps> = ({ active }) => {
    const [introStep, setIntroStep] = useState(0);

    useEffect(() => {
        if (active) {
            setIntroStep(0);
            const timers = [200, 500, 800, 1100].map((time, i) => setTimeout(() => setIntroStep(i + 1), time));
            return () => timers.forEach(clearTimeout);
        } else {
            setIntroStep(0);
        }
    }, [active]);

    return (
        <SlideWrapper active={active} center>
            <div className="flex flex-col items-center justify-center space-y-[-0.5vw] w-full max-w-6xl">
                <div className="overflow-hidden h-[12vw]">
                    {introStep >= 1 && <h1 className="main-title-text drama-text-pop">광주 첨단에</h1>}
                </div>
                <div className="overflow-hidden h-[12vw]">
                    {introStep >= 2 && <h1 className="main-title-text drama-text-pop">더국제 다니는</h1>}
                </div>
                <div className="overflow-hidden h-[12vw]">
                    {introStep >= 3 && <h1 className="main-title-text drama-text-pop">김팀장 이야기</h1>}
                </div>

                <div className="pt-16 overflow-hidden">
                    {introStep >= 4 && (
                        <p className="text-white font-black-han text-3xl tracking-widest drama-text-pop">
                            2026 더국제 첨단점 전략보고서
                        </p>
                    )}
                </div>
            </div>
        </SlideWrapper>
    );
};
