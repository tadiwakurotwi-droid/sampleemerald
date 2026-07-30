import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Mail } from 'lucide-react';
import logoImg from '../assets/images/logo.png';
import { useTransparentLogo } from '../utils/useTransparentLogo';

export type PageId = 'home' | 'about' | 'pillars' | 'initiatives' | 'contact' | 'all';

interface HeaderProps {
  currentPage: PageId;
  onSelectPage: (page: PageId) => void;
  onOpenGetInvolved: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onSelectPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggleMenuOpen, setToggleMenuOpen] = useState(false);
  const transparentLogo = useTransparentLogo(logoImg);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'initiatives', label: 'Our Footprint' },
    { id: 'about', label: 'Policy & Action' },
    { id: 'pillars', label: 'Our Ecosystem' },
    { id: 'contact', label: 'Contact' },
  ];

  const handlePageChange = (id: PageId) => {
    onSelectPage(id);
    setToggleMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md text-emerald-950 py-3 shadow-sm border-b border-emerald-900/10'
            : 'bg-white text-emerald-950 py-4 border-b border-emerald-900/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <button
              onClick={() => handlePageChange('home')}
              className="flex items-center space-x-3 group text-emerald-950 hover:opacity-90 transition-opacity text-left cursor-pointer"
            >
              <img
                src={transparentLogo}
                alt="Emerald Climate Hub Logo"
                className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block leading-tight text-emerald-950">
                  Emerald Climate Hub
                </span>
                <span className="text-[10px] font-tag tracking-[0.2em] text-emerald-800 uppercase block font-bold">
                  ACTION • INCLUSION • EQUITY
                </span>
              </div>
            </button>

            {/* Circular Toggle Button on the Far Right */}
            <button
              onClick={() => setToggleMenuOpen(true)}
              className="w-11 h-11 rounded-full bg-[#0d221a] text-white hover:bg-[#16382b] flex items-center justify-center shadow-md transition-all cursor-pointer active:scale-95 border border-emerald-900/20"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5 text-emerald-200" />
            </button>

          </div>
        </div>
      </header>

      {/* Screenshot Exact Floating Overlay Panel (Covers only a small section) */}
      {toggleMenuOpen && (
        <>
          {/* Subtle backdrop blur/dim overlay to dismiss */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-xs z-[90] animate-fadeIn transition-opacity"
            onClick={() => setToggleMenuOpen(false)}
          />

          {/* Floating Section Card Popover / Drawer */}
          <div className="fixed top-16 right-3 sm:right-8 w-[calc(100vw-24px)] sm:w-96 max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 sm:p-8 z-[100] overflow-y-auto animate-fadeIn flex flex-col justify-between space-y-6 text-slate-900">
            
            {/* Top Row: Title, Subtitle & Close Button */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12281e] tracking-tight">
                    Emerald Climate Hub
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal mt-1.5 leading-relaxed">
                    Empowering grassroots networks for a sustainable, green future.
                  </p>
                </div>

                <button
                  onClick={() => setToggleMenuOpen(false)}
                  className="p-1.5 text-slate-800 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 stroke-[1.75]" />
                </button>
              </div>
            </div>

            {/* Links Stack */}
            <nav className="space-y-4 py-2 border-t border-b border-slate-100">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handlePageChange(link.id)}
                    className="group flex items-center text-left w-full cursor-pointer transition-all"
                  >
                    {isActive ? (
                      <>
                        {/* Horizontal Line before active item */}
                        <span className="w-6 h-[2px] bg-[#12281e] inline-block mr-3 shrink-0" />
                        <span className="font-serif text-2xl sm:text-3xl text-[#12281e] font-semibold tracking-tight">
                          {link.label}
                        </span>
                      </>
                    ) : (
                      <span className="font-serif text-2xl sm:text-3xl text-[#8ea096] hover:text-[#12281e] font-normal tracking-tight transition-colors pl-1">
                        {link.label}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Contact Section (replaces membership form callout) */}
            <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 text-left space-y-2.5">
              <div className="flex items-center space-x-2 text-emerald-950 font-bold text-xs uppercase tracking-wider font-tag">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Get In Touch</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Reach out to our team for partnership inquiries, speaking engagements, or to learn more about our work.
              </p>
              <button
                onClick={() => {
                  handlePageChange('contact');
                }}
                className="inline-flex items-center justify-center space-x-2 w-full bg-emerald-800 hover:bg-emerald-900 text-white font-tag font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://www.facebook.com/emeraldclimatehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#b2cfc1] text-[#12281e] flex items-center justify-center hover:bg-emerald-50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 stroke-[1.75]" />
              </a>
              <a
                href="https://www.instagram.com/emeraldclimatehub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#b2cfc1] text-[#12281e] flex items-center justify-center hover:bg-emerald-50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 stroke-[1.75]" />
              </a>
              <a
                href="https://zw.linkedin.com/company/emerald-climate-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#b2cfc1] text-[#12281e] flex items-center justify-center hover:bg-emerald-50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 stroke-[1.75]" />
              </a>
            </div>

          </div>
        </>
      )}
    </>
  );
};
