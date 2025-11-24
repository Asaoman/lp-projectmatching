import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Problem from './components/Problem';
import Authority from './components/Trust';
import Compensation from './components/Compensation';
import Impact from './components/Market';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';

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
    <div className="bg-white min-h-screen text-gray-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Global Header (Sticky & Glass) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-display font-bold tracking-tight text-black cursor-pointer">
          THE AXIS
        </div>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
        >
          Contact
        </button>
      </header>

      <main className="pt-20">
        <Hero />
        <Benefits />
        <Problem />
        <Authority />
        <Compensation />
        <Impact />
        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
