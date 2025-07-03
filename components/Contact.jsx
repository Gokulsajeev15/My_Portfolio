import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);
    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, formRef.current], {
                opacity: 0,
                y: 60
            });

            // Create timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Animate title
            tl.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            })
            // Animate form
            .to(formRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="contact-section" ref={contactRef}>
            <div className="contact-container">
                <h1 ref={titleRef}>Get In Touch</h1>
                <div className="contact-form" ref={formRef}>
                    <p className="contact-intro">
                        Ready to build something amazing together? Let's connect!
                    </p>
                    
                    <div className="contact-methods">
                        <a href="mailto:gokulsajeev10@gmail.com" className="contact-method">
                            <div className="contact-icon">@</div>
                            <div className="contact-info">
                                <h3>Email Me</h3>
                                <p>gokulsajeev10@gmail.com</p>
                            </div>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/gokulsajeev/" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <div className="contact-icon">in</div>
                            <div className="contact-info">
                                <h3>LinkedIn</h3>
                                <p>Connect professionally</p>
                            </div>
                        </a>
                        
                        <a href="https://github.com/Gokulsajeev15" target="_blank" rel="noopener noreferrer" className="contact-method">
                            <div className="contact-icon">&lt;/&gt;</div>
                            <div className="contact-info">
                                <h3>GitHub</h3>
                                <p>Check out my code</p>
                            </div>
                        </a>
                    </div>
                    
                    <a href="mailto:gokulsajeev10@gmail.com">
                        <button type="button">Send Me a Message ⚡</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;