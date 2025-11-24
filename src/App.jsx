import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Missions from './components/Missions';
import Terminal from './components/Terminal';
import Footer from './components/Footer';
import Lenis from 'lenis';
import CustomCursor from './components/ui/CustomCursor';
import GlobalBackground from './components/ui/GlobalBackground';

function App() {
  // Initialize Lenis for "Luxury" Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Slower, heavier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-void min-h-screen text-platinum font-sans selection:bg-signal-amber selection:text-void-black cursor-none">
      <CustomCursor />
      <GlobalBackground />

      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference flex justify-between items-center pointer-events-none">
          <div className="text-xl font-display font-bold tracking-tight text-platinum pointer-events-auto">
            VIZOR Agent
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 border border-platinum/20 rounded-full text-sm font-mono text-platinum hover:bg-platinum hover:text-void-black transition-all duration-300 pointer-events-auto backdrop-blur-sm"
          >
            お問い合わせ
          </button>
        </nav>

        <main>
          <Hero />
          <Vision />
          <Missions />

          <div id="contact">
            <Terminal />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
