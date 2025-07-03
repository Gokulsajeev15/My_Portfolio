import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const loadingRef = useRef(null);
    const logoRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(progressRef.current, { scaleX: 0 });
            
            // Create loading animation
            const tl = gsap.timeline({
                onComplete: () => {
                    // Fade out loading screen
                    gsap.to(loadingRef.current, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: onComplete
                    });
                }
            });

            // Animate logo
            tl.from(logoRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "power2.out"
            })
            // Animate progress bar
            .to(progressRef.current, {
                scaleX: 1,
                duration: 2,
                ease: "power2.out"
            }, "-=0.5")
            // Add some loading text animation
            .from('.loading-text', {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.out"
            }, "-=1.5");

        }, loadingRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div 
            ref={loadingRef}
            className="loading-screen"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
                color: '#fff'
            }}
        >
            <div 
                ref={logoRef}
                style={{
                    fontSize: '3rem',
                    fontWeight: '600',
                    marginBottom: '2rem',
                    background: 'linear-gradient(135deg, #fff 0%, #ccc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: '"Space Grotesk", "JetBrains Mono", monospace',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                }}
            >
                GS
            </div>
            <div 
                className="loading-text"
                style={{
                    fontSize: '1.2rem',
                    marginBottom: '2rem',
                    color: '#999',
                    fontFamily: '"DM Mono", "JetBrains Mono", monospace',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                }}
            >
                Loading Experience...
            </div>
            <div 
                style={{
                    width: '200px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '1px',
                    overflow: 'hidden'
                }}
            >
                <div 
                    ref={progressRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #fff, #ccc)',
                        transformOrigin: 'left',
                        borderRadius: '1px'
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
