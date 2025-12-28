
import React from 'react';

interface SlideWrapperProps {
  children: React.ReactNode;
  active: boolean;
  center?: boolean;
}

export const SlideWrapper: React.FC<SlideWrapperProps> = ({ children, active, center = false }) => {
  return (
    <div className={`absolute inset-0 w-full h-full flex flex-col ${center ? 'justify-center items-center' : 'justify-center items-start'} slide-transition ${
      active ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-12 blur-sm scale-95'
    }`}>
      <div className={`w-full max-w-[1400px] h-full flex flex-col justify-center px-12 md:px-32 relative z-10 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
        {children}
      </div>
    </div>
  );
};
