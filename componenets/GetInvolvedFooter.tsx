import React from 'react';
import { Heart, Mail, Phone, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import { PageId } from './Header';
import logoImg from '../assets/images/logo.png';
import { useTransparentLogo } from '../utils/useTransparentLogo';

interface GetInvolvedFooterProps {
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  onSelectPage?: (page: PageId) => void;
}

export const GetInvolvedFooter: React.FC<GetInvolvedFooterProps> = ({ onSelectPage }) => {
  const transparentLogo = useTransparentLogo(logoImg);

  return (
    <footer id="get-involved" className="bg-[#0b2118] text-emerald-50 pt-12 pb-10 relative overflow-hidden border-t border-emerald-900/40">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Footer Grid (4 Columns) - Removed membership banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-4 pb-8 border-b border-emerald-800/60">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={transparentLogo}
                alt="Emerald Climate Hub Logo"
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white italic">
                Emerald Climate Hub
              </h3>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed font-normal">
              Emerald Climate Hub is a registered youth-led non-profit empowering young people to champion inclusive climate policy and deploy innovative eco-tech prototypes worldwide.
            </p>
            <div className="pt-1 text-[10px] font-tag font-bold tracking-[0.2em] text-emerald-400 uppercase">
              ACTION • INCLUSION • EQUITY
            </div>
          </div>

          {/* Column 2: INTERACT & DISCOVER */}
          <div className="space-y-3">
            <h4 className="font-tag font-bold text-xs uppercase tracking-[0.2em] text-emerald-300">
              INTERACT & DISCOVER
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/80 font-medium">
              <li>
                <button
                  onClick={() => onSelectPage && onSelectPage('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-bold text-emerald-300"
                >
                  Contact & Join Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage && onSelectPage('initiatives')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Footprint
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage && onSelectPage('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Policy & Action
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectPage && onSelectPage('pillars')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Ecosystem
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CORE COMMITMENTS */}
          <div className="space-y-3">
            <h4 className="font-tag font-bold text-xs uppercase tracking-[0.2em] text-emerald-300">
              CORE COMMITMENTS
            </h4>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              We focus on building concrete, open-source climate prototypes, and securing binding representation for young people on national UN delegate assemblies.
            </p>
            <div className="flex items-center space-x-2 pt-1 text-emerald-300">
              <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span className="font-serif italic text-xs text-emerald-200">
                Youth-Led Action Aligned
              </span>
            </div>
          </div>

          {/* Column 4: CONTACT & SUPPORT */}
          <div className="space-y-3">
            <h4 className="font-tag font-bold text-xs uppercase tracking-[0.2em] text-emerald-300">
              CONTACT & SUPPORT
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-200/90 font-medium">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:emeraldclimatehub@gmail.com" className="hover:text-white transition-colors">
                  emeraldclimatehub@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+263789656527" className="hover:text-white transition-colors">
                  +263789656527
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="https://www.facebook.com/emeraldclimatehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122e23] border border-[#1d4233] text-emerald-200 hover:text-white hover:bg-[#1a3d2e] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/emeraldclimatehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122e23] border border-[#1d4233] text-emerald-200 hover:text-white hover:bg-[#1a3d2e] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://zw.linkedin.com/company/emerald-climate-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#122e23] border border-[#1d4233] text-emerald-200 hover:text-white hover:bg-[#1a3d2e] flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 font-medium pt-1">
          <p>© {new Date().getFullYear()} Emerald Climate Hub Zimbabwe. All rights reserved.</p>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0 font-tag tracking-[0.2em] uppercase text-[10px]">
            <span>ACTION</span>
            <span className="text-emerald-600">•</span>
            <span>INCLUSION</span>
            <span className="text-emerald-600">•</span>
            <span>EQUITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
