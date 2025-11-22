import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KineticManifesto = () => {
    const containerRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 1,
                pin: true,
            }
        });

        // Text 1: "量産型のキャリア。" -> Crumble
        tl.fromTo(text1Ref.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
            .to(text1Ref.current, { opacity: 0, y: 100, rotationX: 45, filter: "blur(10px)", duration: 1 });

        // Text 2: "無意味なES。" -> Noise
        tl.fromTo(text2Ref.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            .to(text2Ref.current, { opacity: 0, x: 10, filter: "blur(5px)", duration: 0.5, repeat: 5, yoyo: true }) // Glitch-like
            .to(text2Ref.current, { opacity: 0, duration: 0.5 });

        // Text 3: "君は、規格外だ。" -> Shine & Scale
        tl.fromTo(text3Ref.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1.5, color: "#fff", textShadow: "0 0 30px rgba(255,255,255,0.8)", duration: 2 });

    }, []);

    return (
        <section ref={containerRef} className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
            <h2 ref={text1Ref} className="absolute text-4xl md:text-7xl font-bold text-gray-500 tracking-tighter">
                量産型のキャリア。
            </h2>
            <h2 ref={text2Ref} className="absolute text-4xl md:text-7xl font-bold text-gray-500 tracking-tighter">
                無意味なES。
            </h2>
            <h2 ref={text3Ref} className="absolute text-5xl md:text-8xl font-black text-white tracking-tighter mix-blend-difference">
                君は、規格外だ。
            </h2>
        </section>
    );
};

export default KineticManifesto;
