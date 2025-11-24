import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Hook for Lenis Smooth Scroll
export const useSmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
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

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);
};

// Standard Reveal Animation
export const revealText = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { y: 100, opacity: 0, skewY: 5 },
        {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.2,
            ease: 'power4.out',
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
            },
        }
    );
};

// Parallax Effect
export const parallax = (element, speed = 0.5) => {
    gsap.to(element, {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0,
        },
    });
};
