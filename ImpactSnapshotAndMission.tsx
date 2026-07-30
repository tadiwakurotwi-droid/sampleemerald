import React from 'react';
import { ShieldCheck, Flame, Users, Sparkles, Zap, Award, ArrowRight, HeartHandshake } from 'lucide-react';

interface ImpactSnapshotAndMissionProps {
  onOpenGetInvolved?: () => void;
}

export const ImpactSnapshotAndMission: React.FC<ImpactSnapshotAndMissionProps> = ({ onOpenGetInvolved }) => {
  const verifiedStats = [
    {
      value: '14',
      title: 'Biogas units installed',
      description: '12 household units and 2 commercial digesters deployed.',
      verification: 'In-Field Verification Active',
      icon: Flame,
    },
    {
      value: '1200+',
      title: 'Total Community Impact',
      description: 'Creating sustainable grassroots impact and climate resilience.',
      verification: 'In-Field Verification Active',
      icon: Users,
    },
    {
      value: '1000',
      title: 'Demographics Engaged',
      description: 'Empowering 400 women, 100 male supporters, and 500 students.',
      verification: 'In-Field Verification Active',
      icon: Award,
    }
  ];

  const missionPillars = [
    {
      category: 'Energy transition',
      title: 'Clean Energy',
      description: 'Turning organic waste into clean-burning gas for families.',
      channel: 'Active Engagement Channel',
      icon: Zap,
    },
    {
      category: 'Empowerment',
      title: 'Youth Leadership',
      description: 'Equipping young Zimbabweans to influence climate policy and lead green businesses.',
      channel: 'Active Engagement Channel',
      icon: Sparkles,
    },
    {
      category: 'Equality focus',
      title: 'Gender Inclusion',
      description: 'Ensuring women are at the center of the clean energy transition.',
      channel: 'Active Engagement Channel',
      icon: HeartHandshake,
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. IMPACT SNAPSHOT SECTION */}
      <section className="py-16 bg-emerald-50/50 text-slate-900 relative overflow-hidden border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.18em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>IMPACT SNAPSHOT</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 tracking-tight">
              The Proof of Our Work
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              We translate climate urgency into measurable local results. Here is the tangible proof of our grassroots installations and empowerment drives.
            </p>
          </div>

          {/* 3 Verified Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Top Row: Verified Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-tag font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                        VERIFIED STATISTIC
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                    </div>

                    {/* Big Value Number */}
                    <div className="font-serif text-4xl sm:text-5xl font-bold text-emerald-950 tracking-tight">
                      {stat.value}
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-emerald-950 mb-1">
                        {stat.title}
                      </h3>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {stat.description}
                      </p>
                    </div>

                  </div>

                  {/* Footer Verification Status */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-2 text-xs text-emerald-800 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px]">{stat.verification}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. OUR MISSION & THREE PILLARS SECTION */}
      <section className="py-16 bg-white text-slate-900 relative overflow-hidden border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.18em] uppercase">
              <Zap className="w-3.5 h-3.5 text-emerald-700" />
              <span>CORE PURPOSE</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950 tracking-tight">
              Our Mission
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              We bridge the gap between climate urgency and local action. Guided by sustainable practices, policy advocacy, and community ownership, our program rests on three robust pillars of impact.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missionPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-md hover:bg-emerald-50/80 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Category Tag */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-tag font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
                        {pillar.category}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white text-emerald-800 flex items-center justify-center border border-emerald-100 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-emerald-950 mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>

                  </div>

                  {/* Active Engagement Channel Badge */}
                  <div className="mt-6 pt-4 border-t border-emerald-100/80 flex items-center justify-between">
                    <span className="text-[11px] font-tag font-bold tracking-wider text-emerald-900 uppercase flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span>{pillar.channel}</span>
                    </span>

                    {onOpenGetInvolved && (
                      <button
                        onClick={onOpenGetInvolved}
                        className="text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer p-1"
                        aria-label="Get involved"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};
