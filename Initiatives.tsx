import React, { useState } from 'react';
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  FileText,
  Award,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  X,
  Flame,
  Sprout,
  Users,
  Globe2,
  BookOpen
} from 'lucide-react';

import heroImg from '../assets/images/hero_emerald_climate_1785143341796.jpg';
import fieldworkImg from '../assets/images/youth_fieldwork_1785143355613.jpg';
import workshopImg from '../assets/images/solar_workshop_1785143368926.jpg';
import heroBgImg from '../assets/images/hero_bg_image_1785146908784.jpg';

// Imported Flashcards from /src/components/CARDS
import cardImg1 from './CARDS/470012879_18030216356437141_5521261420736910608_n.jpg';
import cardImg2 from './CARDS/656372654_18076937393437141_3629798175914344514_n.jpg';
import cardImg3 from './CARDS/DSC_4946.jpg';
import cardImg4 from './CARDS/DSC_5035.jpg';
import cardImg5 from './CARDS/DSC_5052.jpg';
import cardImg6 from './CARDS/IMG_0049.JPG';
import cardImg7 from './CARDS/IMG_0133.JPG';
import cardImg8 from './CARDS/IMG_0151.JPG';
import cardImg9 from './CARDS/IMG_0155.JPG';
import cardImg10 from './CARDS/IMG_0159.JPG';
import cardImg11 from './CARDS/_DSC0157.jpg';
import cardImg12 from './CARDS/_DSC0197.jpg';


interface InitiativesProps {
  onOpenGetInvolved?: () => void;
}

// 12 Flashcards for the Footprint Section (Moments from the Green Frontier) using CARDS folder images
const greenFrontierCards = [
  {
    id: 'gf-1',
    title: 'Hwedza Biogas Installation Commissioning',
    location: 'Wedza District, Mashonaland East',
    date: 'Field Phase 2025-2026',
    category: 'Clean Energy',
    image: cardImg1,
    caption: 'Youth climate engineers assembling bio-digester valves and testing pressure flow for rural household energy transition.'
  },
  {
    id: 'gf-2',
    title: 'Community Bio-Slurry & Fieldwork Action',
    location: 'Wedza Ward 4',
    date: 'Agricultural Season',
    category: 'Circular Economy',
    image: cardImg2,
    caption: 'Demonstrating organic fertilizer application derived from biogas residue to boost crop yields naturally.'
  },
  {
    id: 'gf-3',
    title: 'Bio-Digester Masonry & Construction',
    location: 'Wedza Field Site',
    date: 'Field Construction',
    category: 'Infrastructure',
    image: cardImg3,
    caption: 'Local youth artisans laying reinforced brick masonry for fixed-dome household biogas digesters.'
  },
  {
    id: 'gf-4',
    title: 'On-Site Energy System Commissioning',
    location: 'Mashonaland East Community',
    date: 'Technical Phase',
    category: 'Eco-Technology',
    image: cardImg4,
    caption: 'Installing hydraulic mixing chambers and gas output lines for domestic clean energy access.'
  },
  {
    id: 'gf-5',
    title: 'Rural Household Clean Cooking Transition',
    location: 'Wedza Village Community',
    date: 'Field Deployment',
    category: 'Health & Climate',
    image: cardImg5,
    caption: 'Replacing wood-burning open fires with direct piped bio-gas stoves, eliminating harmful indoor air pollution.'
  },
  {
    id: 'gf-6',
    title: 'Youth Climate Fellowship Training Session',
    location: 'Wedza Technical Hub',
    date: 'Mid 2025',
    category: 'Youth Leadership',
    image: cardImg6,
    caption: 'Capacity building workshop empowering young technicians with practical bio-energy and maintenance skills.'
  },
  {
    id: 'gf-7',
    title: 'Bio-Slurry Organic Fertilizer Demonstration',
    location: 'Wedza Demonstration Plots',
    date: 'Agronomy Fieldwork',
    category: 'Sustainable Agriculture',
    image: cardImg7,
    caption: 'Utilizing nitrogen-rich effluent from biogas digesters as organic fertilizer to restore degraded soil.'
  },
  {
    id: 'gf-8',
    title: 'Environmental Stewardship Assembly',
    location: 'Mashonaland East Catchment',
    date: 'Ecosystem Care',
    category: 'Ecosystem Care',
    image: cardImg8,
    caption: 'Community gathering reinforcing youth-led forest conservation and sustainable energy adoption.'
  },
  {
    id: 'gf-9',
    title: 'Clean Energy Plumbing & Pressure Inspection',
    location: 'Wedza Ward 2',
    date: 'Quality Control',
    category: 'Quality Control',
    image: cardImg9,
    caption: 'Safety testing and pressure calibration on piped biogas delivery systems before household handover.'
  },
  {
    id: 'gf-10',
    title: 'Local Community Waste-to-Energy Project',
    location: 'Hwedza Centre',
    date: 'Community Action',
    category: 'Community Action',
    image: cardImg10,
    caption: 'Converting livestock manure and household organic waste into renewable methane and bio-fertilizer.'
  },
  {
    id: 'gf-11',
    title: 'Grassroots Field Verification Log',
    location: 'Wedza Ward 5',
    date: 'Field Audit',
    category: 'Field Audit',
    image: cardImg11,
    caption: 'Documenting on-the-ground progress and structural integrity of installed biogas digester domes.'
  },
  {
    id: 'gf-12',
    title: 'Youth-Led Climate Policy & Action Assembly',
    location: 'Marondera Provincial Hub',
    date: 'Policy Dialogue',
    category: 'Climate Governance',
    image: cardImg12,
    caption: 'Presenting grassroots field data to local stakeholders to integrate youth-led energy solutions into policy.'
  }
];


export const Initiatives: React.FC<InitiativesProps> = () => {
  const [frontierIndex, setFrontierIndex] = useState(0);

  // Citation Modals State
  const [activeModal, setActiveModal] = useState<'stichting' | 'hbcu' | null>(null);

  const handleNextFrontier = () => {
    setFrontierIndex((prev) => (prev + 1) % greenFrontierCards.length);
  };

  const handlePrevFrontier = () => {
    setFrontierIndex((prev) => (prev - 1 + greenFrontierCards.length) % greenFrontierCards.length);
  };


  const activeFrontierCard = greenFrontierCards[frontierIndex];

  return (
    <section id="initiatives" className="py-20 bg-[#fbfdfb] text-emerald-950 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300/70 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.2em] uppercase">
            <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>OUR FOOTPRINT</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-emerald-950">
            Mapping the Bridge
          </h2>

          <p className="text-base sm:text-lg text-emerald-900/80 font-normal leading-relaxed">
            Mapping the bridge between rural action and global climate governance.
          </p>
        </div>

        {/* ================= INTERACTIVE FIELD RECORDS: MOMENTS FROM THE GREEN FRONTIER ================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-sm space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-100 pb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-tag font-bold text-emerald-700 tracking-widest uppercase mb-1">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>INTERACTIVE FIELD RECORDS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
                Moments from the Green Frontier.
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              These flashcards capture the real-world moments of the Emerald Climate Hub. Click directly on the active card to slide it away and reveal the next moment, or use the navigation controls below.
            </p>
          </div>

          {/* Flashcard Container */}
          <div className="relative max-w-2xl mx-auto">
            {/* Top Indicator */}
            <div className="flex items-center justify-between mb-3 text-xs font-tag font-bold tracking-widest uppercase text-emerald-800">
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
                Card {frontierIndex + 1} of {greenFrontierCards.length}
              </span>
              <span className="text-emerald-700">Click card to advance</span>
            </div>

            {/* Interactive Card */}
            <div
              onClick={handleNextFrontier}
              className="group relative cursor-pointer bg-emerald-950 rounded-2xl overflow-hidden shadow-xl border border-emerald-800/60 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="relative h-[320px] sm:h-[400px] overflow-hidden">
                <img
                  src={activeFrontierCard.image}
                  alt={activeFrontierCard.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-5">
              <button
                onClick={handlePrevFrontier}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-tag font-bold text-xs uppercase transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Card</span>
              </button>

              <div className="flex space-x-1.5">
                {greenFrontierCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFrontierIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === frontierIndex ? 'bg-emerald-700 w-6' : 'bg-emerald-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextFrontier}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white font-tag font-bold text-xs uppercase transition-colors cursor-pointer"
              >
                <span>Next Card</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* ================= MASHONALAND EAST PROVINCE: THE LOCAL ANCHOR ================= */}
        <div className="space-y-8 bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-800/60 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-800/80 border border-emerald-500/40 text-emerald-200 text-[10px] font-tag font-bold tracking-[0.2em] uppercase">
              <span className="font-serif italic font-bold text-emerald-300 mr-1">I</span>
              <span>Mashonaland East Province</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              The Local Anchor (Community Transformation)
            </h3>

            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              This is the core of our footprint—the tangible, daily change in the Mashonaland East province.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-2">
            
            {/* Card A: Renewable Energy Deployment */}
            <div className="bg-emerald-900/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/50 space-y-4 hover:border-emerald-500/60 transition-colors">
              <div className="flex items-center space-x-3 text-emerald-300">
                <div className="p-2.5 rounded-xl bg-emerald-800/80 border border-emerald-600/40">
                  <Flame className="w-5 h-5 text-amber-300" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Renewable Energy Deployment
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                We have established a critical baseline of biogas infrastructure in the Wedza District, shifting households from firewood-reliant cooking to sustainable, clean energy.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-emerald-950/80 text-emerald-200 text-[10px] font-tag font-bold px-3 py-1 rounded-full border border-emerald-700/40">
                  HBCU Green Fund - Hwedza Biogas Project
                </span>
                <span className="bg-emerald-950/80 text-emerald-200 text-[10px] font-tag font-bold px-3 py-1 rounded-full border border-emerald-700/40">
                  Stichting de Boomgaard Project Registry
                </span>
                <span className="bg-emerald-950/80 text-emerald-200 text-[10px] font-tag font-bold px-3 py-1 rounded-full border border-emerald-700/40">
                  Wedza District Baseline Infrastructure
                </span>
              </div>
            </div>

            {/* Card B: The Circular Economy Loop */}
            <div className="bg-emerald-900/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/50 space-y-4 hover:border-emerald-500/60 transition-colors">
              <div className="flex items-center space-x-3 text-emerald-300">
                <div className="p-2.5 rounded-xl bg-emerald-800/80 border border-emerald-600/40">
                  <Sprout className="w-5 h-5 text-emerald-300" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  The Circular Economy Loop
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Beyond energy, we have created a self-sustaining ecosystem where household waste is transformed into clean gas and nutrient-rich fertilizer, directly boosting local crop yields and food security.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-emerald-950/80 text-emerald-200 text-[10px] font-tag font-bold px-3 py-1 rounded-full border border-emerald-700/40">
                  Waste-to-Fertilizer System
                </span>
                <span className="bg-emerald-950/80 text-emerald-200 text-[10px] font-tag font-bold px-3 py-1 rounded-full border border-emerald-700/40">
                  Food Security
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= VERIFICATION & AUTHORITY ================= */}
        <div className="space-y-8 bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200/80 shadow-xs">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.2em] uppercase border border-emerald-300/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Verification & Authority</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-emerald-950">
              Institutional References & Citations
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              We operate with complete strategic alignment and absolute field accountability. Our initiatives, diplomacy, and leadership milestones are verified by international networks, donor registries, and policy organizations.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-tag font-bold tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200">
                The Wedza Biogas Initiative (Core Evidence)
              </span>
            </div>
          </div>


          {/* ================= CITATION CARDS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-emerald-100">
            
            {/* Citation 1: Stichting de Boomgaard */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-800 text-white text-[10px] font-tag font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Primary Citation
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-tag font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-300/70">
                    Project Registry
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-emerald-950">
                  Stichting de Boomgaard Project Registry
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  This is our primary citation. It confirms the scope of our biogas implementation in Mashonaland East and demonstrates that we are a vetted, grant-receiving organization.
                </p>
              </div>

              <div>
                <a
                  href="https://www.stichtingdeboomgaard.nl/grants/funding-overview/2024/emerald-climate-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-emerald-900 hover:bg-emerald-800 text-white font-tag font-bold text-[10px] uppercase tracking-wide px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Verify Biogas Implementation Scope</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

            {/* Citation 2: HBCU Green Fund */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200/80 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-800 text-white text-[10px] font-tag font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Mission Summary
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] font-tag font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-emerald-300/70">
                    HBCU Green Fund
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-emerald-950">
                  HBCU Green Fund - Hwedza Biogas Project
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Provides a clear, professional summary of the project’s mission, making it a perfect resource for visitors who want to see a formalized, ecological project breakdown.
                </p>
              </div>

              <div>
                <a
                  href="https://hbcugreenfund.org/project/hwedza-biogas-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-emerald-900 hover:bg-emerald-800 text-white font-tag font-bold text-[10px] uppercase tracking-wide px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Read Formal Project Breakdown</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= MODAL DIALOGS ================= */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-emerald-200 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'stichting' ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-emerald-700 text-xs font-tag font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Project Registry Citation</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-emerald-950">
                  Stichting de Boomgaard Project Registry
                </h3>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 space-y-2 text-xs text-emerald-950">
                  <div className="flex justify-between font-bold">
                    <span>Registry Record ID:</span>
                    <span className="font-mono text-emerald-800">SDB-ZW-2025-WEDZA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Geographic Target:</span>
                    <span>Wedza District, Mashonaland East, Zimbabwe</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementation Status:</span>
                    <span className="text-emerald-700 font-bold">Verified Vetted Grantee</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  This official citation confirms that Emerald Climate Hub’s biogas implementation in Hwedza is registered and audited under international partner criteria. The scope includes fixed-dome organic digesters, bio-slurry agricultural integration, and youth capacity building.
                </p>

                <div className="pt-4 flex flex-wrap gap-3 justify-end items-center">
                  <a
                    href="https://www.stichtingdeboomgaard.nl/grants/funding-overview/2024/emerald-climate-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-900 text-white font-tag font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>Visit Stichting de Boomgaard Registry</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="bg-slate-100 text-slate-700 font-tag font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-emerald-700 text-xs font-tag font-bold uppercase tracking-widest">
                  <BookOpen className="w-4 h-4" />
                  <span>Formal Mission Breakdown</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-emerald-950">
                  HBCU Green Fund - Hwedza Biogas Project
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>
                    <strong>Mission Objective:</strong> Shift rural households in Hwedza from wood-fuel dependencies to clean biogas systems while empowering young women as certified energy technicians.
                  </p>

                  <ul className="space-y-2 pl-4 list-disc text-emerald-950 font-medium">
                    <li>100% elimination of indoor toxic smoke exposure for participating families.</li>
                    <li>Direct redirection of organic waste into renewable methane gas.</li>
                    <li>Distribution of bio-slurry fertilizer to restore soil organic carbon in local farms.</li>
                    <li>Integration of youth climate fellowship graduates into long-term system maintenance.</li>
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-3 justify-end items-center">
                  <a
                    href="https://hbcugreenfund.org/project/hwedza-biogas-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-900 text-white font-tag font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>Visit HBCU Green Fund Project Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setActiveModal(null)}
                    className="bg-slate-100 text-slate-700 font-tag font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
