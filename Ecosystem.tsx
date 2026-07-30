import React from 'react';
import { Users, User, ArrowRight, ShieldCheck, Heart, Linkedin, Twitter, Mail, UserPlus, ExternalLink } from 'lucide-react';
import { MEMBERSHIP_FORM_URL } from '../data/emeraldData';

import tafadzwaImg from './team/tafadzwa.png';
import absolomImg from './team/absolom.png';
import nermeenImg from './team/nermeen.png';
import brinoImg from './team/brino.png';
import rumbidzoImg from './team/rumbidzo.png';
import veronicaImg from './team/veronica.png';
import kudzanaiImg from './team/kudzanai.png';

interface EcosystemProps {
  onOpenGetInvolved?: () => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ onOpenGetInvolved }) => {
  const teamMembers = [
    {
      name: 'Tafadzwa Kurotwi',
      role: 'Team Leader',
      isLeader: true,
      image: tafadzwaImg,
    },
    {
      name: 'Absolom Jim',
      role: 'Team Member',
      isLeader: false,
      image: absolomImg,
    },
    {
      name: 'Nermeen Yhia',
      role: 'Team Member',
      isLeader: false,
      image: nermeenImg,
    },
    {
      name: 'Brino Prayer Wafarwarowa',
      role: 'Team Member',
      isLeader: false,
      image: brinoImg,
    },
    {
      name: 'Rumbidzo Andrea Mudangepfupfu',
      role: 'Team Member',
      isLeader: false,
      image: rumbidzoImg,
    },
    {
      name: 'Veronica Mulenga',
      role: 'Team Member',
      isLeader: false,
      image: veronicaImg,
    },
    {
      name: 'Kudzanai Matilda',
      role: 'Team Member',
      isLeader: false,
      image: kudzanaiImg,
    }
  ];

  const leader = teamMembers[0];
  const topMembers = teamMembers.slice(1, 4);
  const bottomMembers = teamMembers.slice(4, 7);

  // Helper function to generate initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  const renderMemberCard = (member: typeof teamMembers[0]) => (
    <div
      key={member.name}
      className={`p-8 rounded-3xl border transition-all flex flex-col items-center text-center group ${
        member.isLeader
          ? 'bg-emerald-50/50 border-emerald-200/90 shadow-sm hover:shadow-md'
          : 'bg-white border-emerald-100/90 shadow-xs hover:shadow-md hover:border-emerald-200/80'
      }`}
    >
      {/* Centered Circular Profile Avatar */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm mb-6 flex items-center justify-center bg-emerald-50/60 shrink-0 group-hover:scale-102 transition-transform duration-300">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="font-serif font-bold text-2xl text-emerald-800">
            {getInitials(member.name)}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight mb-2 max-w-[260px]">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-xs font-tag font-bold text-emerald-800 tracking-widest uppercase mb-4">
        {member.role}
      </p>

      {/* Divider */}
      <div className="w-full border-t border-emerald-100/80 my-2" />

      {/* Social Icons Row */}
      <div className="flex items-center justify-center space-x-3 pt-3">
        <a
          href="#linkedin"
          onClick={(e) => e.preventDefault()}
          className="w-9 h-9 rounded-full bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/80 hover:border-emerald-200 text-emerald-800 flex items-center justify-center transition-all duration-200"
          title="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="#twitter"
          onClick={(e) => e.preventDefault()}
          className="w-9 h-9 rounded-full bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/80 hover:border-emerald-200 text-emerald-800 flex items-center justify-center transition-all duration-200"
          title="Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
        <a
          href="#email"
          onClick={(e) => e.preventDefault()}
          className="w-9 h-9 rounded-full bg-emerald-50/70 border border-emerald-100 hover:bg-emerald-100/80 hover:border-emerald-200 text-emerald-800 flex items-center justify-center transition-all duration-200"
          title="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-slate-900 py-16 sm:py-20 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.18em] uppercase">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>COMMUNITY VOICE • OUR ECOSYSTEM</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-emerald-950 tracking-tight">
            Our Ecosystem
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Climate action requires a massive network. Discover the collective power behind the Hub, from passionate youth leaders to strategic global alliances.
          </p>
        </div>

        {/* Leadership / Our Core Team Section */}
        <div className="space-y-8 pt-2">
          <div className="border-b border-emerald-100 pb-4 space-y-1">
            <div className="text-xs font-tag font-bold tracking-[0.2em] text-emerald-800 uppercase">
              LEADERSHIP
            </div>
            <h2 className="font-serif text-2xl font-bold text-emerald-950">
              Our Core Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Meet the innovators, strategists, and advocates driving our ecosystem forward.
            </p>
          </div>

          {/* Core Team 1 - 3 - 3 Structure */}
          <div className="space-y-6">
            {/* Top Row: Team Leader (1 Member Centered) */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {renderMemberCard(leader)}
              </div>
            </div>

            {/* Middle Row: 3 Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topMembers.map((member) => renderMemberCard(member))}
            </div>

            {/* Bottom Row: 3 Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bottomMembers.map((member) => renderMemberCard(member))}
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif text-2xl font-bold">
              Want to join or collaborate with our ecosystem?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              We welcome youth activists, volunteers, researchers, and global climate partners to build a cleaner future together in Zimbabwe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300 font-tag font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer flex items-center space-x-2"
            >
              <UserPlus className="w-4 h-4 text-emerald-950" />
              <span>Become a Member</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-950/80" />
            </a>

            {onOpenGetInvolved && (
              <button
                onClick={onOpenGetInvolved}
                className="bg-emerald-950/80 border border-emerald-400/40 text-white hover:bg-emerald-950 font-tag font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-xs transition-all cursor-pointer flex items-center space-x-2"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
