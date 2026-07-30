import React from 'react';
import { ArrowRight, UserPlus, ExternalLink } from 'lucide-react';
import { keyImpactStats, MEMBERSHIP_FORM_URL } from '../data/emeraldData';
import heroBgImg from '../assets/images/DSC_0187.jpg';
import { PageId } from './Header';

interface HeroProps {
  onOpenGetInvolved: () => void;
  onSelectPage?: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGetInvolved, onSelectPage }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 text-white overflow-hidden border-b border-slate-800">
      {/* Hero Background Image with Natural Color Visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Emerald Climate Hub - Youth Climate Innovation in Zimbabwe"
          className="w-full h-full object-cover object-center transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />
        {/* Subtle neutral dark gradient overlay for text readability without green color tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/25"></div>
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-left space-y-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-emerald-200 text-[10px] font-tag font-bold tracking-[0.18em] uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5"></span>
            <span>YOUTH-LED CLIMATE INNOVATION</span>
          </div>

          {/* Main Headline - Normal Website Font Size */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-bold tracking-tight">
            Empowering Youth-Led <br />
            <span className="text-emerald-300 font-serif italic">Climate Innovation in Zimbabwe</span>
          </h1>

          {/* Subtitle - Normal Body Text Size */}
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
            We’re transforming grassroots activism into sustainable energy solutions. Join us as we build a cleaner, greener, and more resilient future—one community at a time.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href={MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-tag font-bold tracking-wider text-xs uppercase px-7 py-3.5 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 group cursor-pointer active:scale-95"
            >
              <UserPlus className="w-4 h-4 text-emerald-950" />
              <span>Become a Member</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-950/80" />
            </a>

            <button
              onClick={() => {
                if (onSelectPage) {
                  onSelectPage('initiatives');
                } else {
                  onOpenGetInvolved();
                }
              }}
              className="w-full sm:w-auto bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-400/50 text-white font-tag font-bold tracking-wider text-xs uppercase px-7 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs cursor-pointer backdrop-blur-sm group active:scale-95"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* UN Sustainable Development Goals (SDGs) Section */}
          <div className="pt-6 border-t border-emerald-800/60 space-y-2.5">
            <div className="text-[10px] font-tag font-bold tracking-[0.15em] text-emerald-300 uppercase">
              ALIGNED WITH UN SUSTAINABLE DEVELOPMENT GOALS:
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="bg-rose-950/70 border border-rose-500/40 text-rose-200 text-[11px] font-tag font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SDG 5 • Gender Equality
              </div>

              <div className="bg-amber-950/70 border border-amber-500/40 text-amber-200 text-[11px] font-tag font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SDG 7 • Affordable & Clean Energy
              </div>

              <div className="bg-orange-950/70 border border-orange-500/40 text-orange-200 text-[11px] font-tag font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SDG 9 • Industry & Innovation
              </div>

              <div className="bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-[11px] font-tag font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SDG 13 • Climate Action
              </div>

              <div className="bg-sky-950/70 border border-sky-500/40 text-sky-200 text-[11px] font-tag font-bold px-3 py-1 rounded-full backdrop-blur-md">
                SDG 17 • Partnerships
              </div>
            </div>
          </div>

        </div>

        {/* Stats Highlight Bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {keyImpactStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-emerald-950/80 backdrop-blur-md p-4.5 rounded-2xl border border-emerald-800/80 text-left shadow-md hover:bg-emerald-900/90 transition-all"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-emerald-300 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-emerald-200/80 font-normal mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

