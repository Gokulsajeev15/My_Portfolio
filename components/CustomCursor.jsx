import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorFollowRef = useRef(null);

    useEffect(() => {
        // Only enable custom cursor on desktop devices
        const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        
        if (!isDesktop) return;

        const cursor = cursorRef.current;
        const cursorFollow = cursorFollowRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });

            gsap.to(cursorFollow, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 1.5,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(cursorFollow, {
                scale: 1.3,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
            gsap.to(cursorFollow, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        };

        // Add event listeners
        document.addEventListener('mousemove', moveCursor);
        
        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Only render on desktop
    const isDesktop = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (!isDesktop) return null;

    return (
        <>
            <div className="cursor" ref={cursorRef}></div>
            <div className="cursor-follow" ref={cursorFollowRef}></div>
        </>
    );
};

export default CustomCursor;
