import React from 'react';
import { Mail, Phone, UserPlus, ExternalLink, Heart, Users, Award, ArrowRight } from 'lucide-react';
import { PageId } from './Header';

interface ContactProps {
  onSelectPage?: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSelectPage }) => {
  const VOLUNTEER_FORM_URL = 'https://forms.gle/2RG9bJnPDrWjR6uS7';

  return (
    <div className="bg-white text-slate-900 pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-[10px] font-tag font-bold tracking-[0.18em] uppercase">
            <UserPlus className="w-3.5 h-3.5 text-emerald-700" />
            <span>GET INVOLVED</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-950 tracking-tight">
            Join Emerald Circles
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
            Become an Active Member. Ready to drive tangible action, promote gender inclusion, and participate in high-tech solutions? Sign up below to join our local workshop chapters and gain access to regional assemblies.
          </p>
        </div>

        {/* ================= TWO-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* LEFT COLUMN: Membership Registration */}
          <div className="space-y-6">
            <div className="bg-emerald-50/60 rounded-3xl p-8 sm:p-10 border border-emerald-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300/60">
                  <Users className="w-6 h-6 text-emerald-800" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-emerald-950">
                  Emerald Membership Registration
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Free to join. Tailored training, toolkits, and COP delegate preparations provided.
                </p>

                <div className="bg-white rounded-2xl p-5 border border-emerald-100/90 space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Join our active network of climate advocates, policy makers, and community leaders. Fill out the volunteer registration form to gain access to our youth Slack networks, training curriculums, and local group timetables.
                  </p>
                </div>

                <a
                  href={VOLUNTEER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-tag font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-full shadow-md transition-all cursor-pointer group"
                >
                  <span>Open Volunteer Form</span>
                  <ExternalLink className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Benefits badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-emerald-200/70 pt-5">
                <span className="bg-emerald-100/80 text-emerald-900 text-[10px] font-tag font-bold px-3 py-1.5 rounded-full border border-emerald-300/50 flex items-center space-x-1.5">
                  <Award className="w-3 h-3 text-emerald-700" />
                  <span>Training Curriculums</span>
                </span>
                <span className="bg-emerald-100/80 text-emerald-900 text-[10px] font-tag font-bold px-3 py-1.5 rounded-full border border-emerald-300/50 flex items-center space-x-1.5">
                  <Users className="w-3 h-3 text-emerald-700" />
                  <span>Slack Network</span>
                </span>
                <span className="bg-emerald-100/80 text-emerald-900 text-[10px] font-tag font-bold px-3 py-1.5 rounded-full border border-emerald-300/50 flex items-center space-x-1.5">
                  <Heart className="w-3 h-3 text-emerald-700" />
                  <span>Local Group Timetables</span>
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Support & Donate */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200/80 shadow-sm space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300/60">
                  <Heart className="w-6 h-6 text-emerald-800" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-emerald-950">
                  Support Our Mission
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Your contributions help us expand clean energy access, train youth climate leaders, and restore ecosystems across Zimbabwe.
              </p>

              <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200/80 space-y-4">
                <div className="text-xs font-tag font-bold tracking-[0.15em] text-emerald-800 uppercase">
                  Contact us to donate or partner
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                    <a href="mailto:emeraldclimatehub@gmail.com" className="hover:text-emerald-800 transition-colors font-medium">
                      emeraldclimatehub@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3 text-slate-700">
                    <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                    <a href="tel:+263789656527" className="hover:text-emerald-800 transition-colors font-medium">
                      +263789656527
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 leading-relaxed border-t border-emerald-200/70 pt-4">
                  We welcome donations, corporate sponsorships, and in-kind contributions. Reach out to discuss how you can support our youth-led climate initiatives.
                </div>
              </div>

              {/* Quick links back to ecosystem */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onSelectPage && onSelectPage('pillars')}
                  className="inline-flex items-center space-x-1.5 text-xs font-tag font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer border border-emerald-200/80 rounded-full px-4 py-2 bg-emerald-50/50 hover:bg-emerald-100"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <button
                  onClick={() => onSelectPage && onSelectPage('initiatives')}
                  className="inline-flex items-center space-x-1.5 text-xs font-tag font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer border border-emerald-200/80 rounded-full px-4 py-2 bg-emerald-50/50 hover:bg-emerald-100"
                >
                  <span>See Our Impact</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM DIVIDER WITH TAGLINE ================= */}
        <div className="pt-8 border-t border-emerald-200/60 text-center">
          <p className="text-xs text-slate-500 font-tag tracking-[0.2em] uppercase">
            ACTION • INCLUSION • EQUITY — <span className="text-emerald-700 font-bold">Youth-Led Climate Innovation in Zimbabwe</span>
          </p>
        </div>

      </div>
    </div>
  );
};
