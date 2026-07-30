import React from 'react';
import { Landmark, Flame, ShieldCheck, TreePine, Sparkles, Award, Globe2, ArrowRight } from 'lucide-react';

interface PolicyAndActionProps {
  onOpenGetInvolved?: () => void;
}

export const PolicyAndAction: React.FC<PolicyAndActionProps> = ({ onOpenGetInvolved }) => {
  const strategyItems = [
    {
      title: 'Localizing the NDCs',
      subtitle: 'Nationally Determined Contributions',
      description: 'Our rural renewable energy deployments actively help Zimbabwe meet its national climate obligations under the Paris Agreement by lowering emissions from traditional biomass and creating standardized offsets.',
      badge: 'Paris Agreement Alignment',
      icon: Globe2
    },
    {
      title: 'Gender-Responsive Climate Policy',
      subtitle: 'Inclusive Leadership',
      description: 'We advocate for inserting women and youth directly into climate decision-making spaces. We don\'t just view women as victims of climate change, but as executive leaders and key engineers of the green transition.',
      badge: 'Decision-making Inclusion',
      icon: ShieldCheck
    },
    {
      title: 'Indigenous Knowledge Integration',
      subtitle: 'Intergenerational stewardship',
      description: 'We actively push for environmental frameworks that blend modern conservation science with traditional, intergenerational African land and wetland stewardship, leveraging our landmark contributions at RAMSAR COP15.',
      badge: 'RAMSAR COP15 Contribution',
      icon: Sparkles
    }
  ];

  const executionItems = [
    {
      title: 'Decarbonizing Rural Kitchens',
      subtitle: 'Biogas & Clean Energy',
      description: 'We are tracking the field deployment of household and commercial biogas digesters across communities like Wedza to replace firewood dependency, reducing domestic carbon footprints and respiratory ailments.',
      badge: 'Active Community Rollout • Wedza Pilot',
      icon: Flame
    },
    {
      title: 'Green Skills & Circular Economy',
      subtitle: 'Professional Certification',
      description: 'Through capacity-building workshops, we certify young people and women in circular economy models, biogas maintenance, and climate-tech literacy, preparing them for the rural green economy.',
      badge: 'Youth & Women Capacity • Certified',
      icon: Award
    },
    {
      title: 'Reforestation & Restoration',
      subtitle: 'Watershed Stewardship',
      description: 'We mobilize community-led initiatives designed to halt tree-cover depletion and protect vital local watersheds, leveraging indigenous stewardship practices to restore key African ecosystems.',
      badge: 'Ecosystem Restoration • Active',
      icon: TreePine
    }
  ];

  return (
    <div className="bg-white text-slate-900 py-16 sm:py-20 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.18em] uppercase">
            <Landmark className="w-3.5 h-3.5 text-emerald-700" />
            <span>POLICY ADVOCACY & DIRECT ACTION</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 tracking-tight">
            Systemic Shift & Local Impact
          </h1>

          <blockquote className="p-6 rounded-2xl bg-emerald-50/60 border-l-4 border-emerald-700 text-sm sm:text-base text-emerald-950 font-serif italic leading-relaxed">
            "We don't just adapt to the changing climate; we author the frameworks that survive it. By blending grassroots technology with international climate diplomacy, Emerald Climate Hub is transforming policy into measurable community action."
          </blockquote>
        </div>

        {/* 01 THE STRATEGY */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-emerald-100 pb-4 gap-2">
            <div>
              <div className="text-xs font-tag font-bold tracking-[0.2em] text-emerald-800 uppercase">
                01 THE STRATEGY
              </div>
              <h2 className="font-serif text-2xl font-bold text-emerald-950 mt-1">
                Policy & Climate Diplomacy
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
              How we bridge grassroots reality with high-level governmental and international frameworks to drive institutional changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategyItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-md hover:bg-emerald-50/80 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-tag font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                        {item.subtitle}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white text-emerald-800 flex items-center justify-center border border-emerald-100">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-emerald-950 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-emerald-100/80 flex items-center justify-between">
                    <span className="text-[10px] font-tag font-bold tracking-wider text-emerald-900 uppercase">
                      {item.badge}
                    </span>
                    {onOpenGetInvolved && (
                      <button
                        onClick={onOpenGetInvolved}
                        className="text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                        aria-label="Learn more"
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

        {/* 02 THE EXECUTION */}
        <div className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-emerald-100 pb-4 gap-2">
            <div>
              <div className="text-xs font-tag font-bold tracking-[0.2em] text-emerald-800 uppercase">
                02 THE EXECUTION
              </div>
              <h2 className="font-serif text-2xl font-bold text-emerald-950 mt-1">
                Direct Action & Field Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
              Deploying localized technology, training local leaders, and using measurable data to track community-led transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executionItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-emerald-100/90 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-tag font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900">
                        {item.subtitle}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center border border-emerald-100">
                        <Icon className="w-4 h-4 text-emerald-700" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold text-emerald-950 mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-tag font-bold tracking-wider text-emerald-900 uppercase">
                      {item.badge}
                    </span>
                    {onOpenGetInvolved && (
                      <button
                        onClick={onOpenGetInvolved}
                        className="text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                        aria-label="Learn more"
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

      </div>
    </div>
  );
};
