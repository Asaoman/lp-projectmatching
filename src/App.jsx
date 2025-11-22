import React, { useState, useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Loading from './components/Loading';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import KineticManifesto from './components/KineticManifesto';
import BentoGrid from './components/BentoGrid';
import InterfaceDemo from './components/InterfaceDemo';
import Pricing from './components/Pricing';
import TargetProfile from './components/TargetProfile';
import Missions from './components/Missions';
import Flow from './components/Flow';
import Footer from './components/Footer';
import EntryForm from './components/EntryForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEntryOpen, setIsEntryOpen] = useState(false);

  const handleOpenEntry = () => {
    setIsEntryOpen(true);
  };

  const handleCloseEntry = () => {
    setIsEntryOpen(false);
  };

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}

      <SmoothScroll>
        <div className="relative min-h-screen text-white overflow-hidden bg-[var(--color-canvas)]">
          {!isLoading && <Background />}

          <div className={`transition-opacity duration-1000 ${isEntryOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <Header onOpenEntry={handleOpenEntry} />
            <main>
              <Hero onOpenEntry={handleOpenEntry} />
              <SocialProof />
              <KineticManifesto />
              <BentoGrid />
              <InterfaceDemo />
              <TargetProfile />
              <Missions />
              <Pricing />
              <Flow />
            </main>
            <Footer onOpenEntry={handleOpenEntry} />
          </div>

          {isEntryOpen && <EntryForm onClose={handleCloseEntry} />}
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
