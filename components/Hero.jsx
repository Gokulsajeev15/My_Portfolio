import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Hero() {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const decorationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, subtitleRef.current], {
                opacity: 0,
                y: 100
            });

            // Create timeline
            const tl = gsap.timeline();

            // Animate title
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out"
            })
            // Animate subtitle
            .to(subtitleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8")
            // Animate decoration
            .to(decorationRef.current, {
                opacity: 0.3,
                scale: 1.1,
                duration: 2,
                ease: "power2.out"
            }, "-=1");

            // Floating animation for decoration
            gsap.to(decorationRef.current, {
                rotation: 360,
                duration: 20,
                ease: "none",
                repeat: -1
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home" className="hero" ref={heroRef}>
            <div className="hero-decoration" ref={decorationRef}></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <h1 ref={titleRef}>Gokul Sajeev</h1>
            <h2 ref={subtitleRef}>Software Developer</h2>
        </section>
    );
}

export default Hero;

