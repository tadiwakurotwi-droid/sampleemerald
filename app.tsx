/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header, PageId } from './components/Header';
import { Hero } from './components/Hero';
import { PolicyAndAction } from './components/PolicyAndAction';
import { Ecosystem } from './components/Ecosystem';
import { Initiatives } from './components/Initiatives';
import { GetInvolvedFooter } from './components/GetInvolvedFooter';
import { ImpactSnapshotAndMission } from './components/ImpactSnapshotAndMission';
import { Contact } from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const handleSelectPage = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGetInvolved = () => {
    const footerEl = document.getElementById('get-involved');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a221d] flex flex-col font-sans">
      {/* Header / Navigation */}
      <Header
        currentPage={currentPage}
        onSelectPage={handleSelectPage}
        onOpenGetInvolved={handleOpenGetInvolved}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            <Hero onOpenGetInvolved={handleOpenGetInvolved} onSelectPage={handleSelectPage} />
            <ImpactSnapshotAndMission onOpenGetInvolved={handleOpenGetInvolved} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            <PolicyAndAction onOpenGetInvolved={handleOpenGetInvolved} />
          </div>
        )}

        {currentPage === 'pillars' && (
          <div className="animate-fadeIn">
            <Ecosystem onOpenGetInvolved={handleOpenGetInvolved} />
          </div>
        )}

        {currentPage === 'initiatives' && (
          <div className="animate-fadeIn">
            <Initiatives onOpenGetInvolved={handleOpenGetInvolved} />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fadeIn">
            <Contact onSelectPage={handleSelectPage} />
          </div>
        )}

        {currentPage === 'all' && (
          <div className="animate-fadeIn">
            <Hero onOpenGetInvolved={handleOpenGetInvolved} onSelectPage={handleSelectPage} />
            <ImpactSnapshotAndMission onOpenGetInvolved={handleOpenGetInvolved} />
            <PolicyAndAction onOpenGetInvolved={handleOpenGetInvolved} />
            <Ecosystem onOpenGetInvolved={handleOpenGetInvolved} />
            <Initiatives onOpenGetInvolved={handleOpenGetInvolved} />
          </div>
        )}
      </main>

      {/* Footer */}
      <GetInvolvedFooter
        onSelectPage={handleSelectPage}
      />
    </div>
  );
}
