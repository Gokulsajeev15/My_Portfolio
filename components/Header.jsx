import React, { useEffect, useRef } from "react";
import { gsap } from 'gsap';

function Header() {
    const headerRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(headerRef.current, {
                y: -100,
                opacity: 0
            });

            gsap.set(linksRef.current, {
                opacity: 0,
                y: -20
            });

            // Animate header
            gsap.to(headerRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: 0.5
            });

            // Animate links with stagger
            gsap.to(linksRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                delay: 1
            });

        }, headerRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    return (
        <header className="header" ref={headerRef}>
            <a href="#home" className="sub-header" ref={addToRefs}>Home</a>
            <a href="#about" className="sub-header" ref={addToRefs}>About</a>
            <a href="#projects" className="sub-header" ref={addToRefs}>Projects</a>
            <a href="#contact" className="sub-header" ref={addToRefs}>Contact</a>
        </header>
    );
}

export default Header; 