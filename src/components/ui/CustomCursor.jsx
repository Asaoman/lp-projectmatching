import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power3.out"
            });
        };

        const onHover = () => {
            gsap.to(cursor, { scale: 0.5 });
            gsap.to(follower, { scale: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'transparent' });
        };

        const onLeave = () => {
            gsap.to(cursor, { scale: 1 });
            gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: '#D4AF37' });
        };

        window.addEventListener('mousemove', moveCursor);

        const links = document.querySelectorAll('a, button, .cursor-pointer');
        links.forEach(link => {
            link.addEventListener('mouseenter', onHover);
            link.addEventListener('mouseleave', onLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onHover);
                link.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-signal-amber rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
            <div ref={followerRef} className="fixed top-0 left-0 w-8 h-8 border border-signal-amber rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 mix-blend-difference" />
        </>
    );
};

export default CustomCursor;
