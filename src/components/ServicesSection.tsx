import React from 'react';
import { FadeIn } from './FadeIn';
import { SERVICES_LIST } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 pb-28 sm:pb-36 md:pb-44"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES_LIST.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(12, 12, 12, 0.15)',
              borderBottom:
                i === SERVICES_LIST.length - 1
                  ? '1px solid rgba(12, 12, 12, 0.15)'
                  : undefined,
            }}
          >
            <span
              className="font-black text-[#0C0C0C] leading-none shrink-0 tabular-nums"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-2 sm:gap-3 text-[#0C0C0C]">
              <h3
                className="font-medium uppercase tracking-wide"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
