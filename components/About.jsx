import { useState, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const [showResume, setShowResume] = useState(false);
    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphsRef = useRef([]);
    const socialLinksRef = useRef([]);
    const buttonsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, ...paragraphsRef.current, ...socialLinksRef.current, ...buttonsRef.current], {
                opacity: 0,
                y: 50
            });

            // Create timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutRef.current,
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
            // Animate paragraphs with stagger
            .to(paragraphsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.5")
            // Animate social links
            .to(socialLinksRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.3")
            // Animate buttons
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4");

        }, aboutRef);

        return () => ctx.revert();
    }, []);

    const addToParagraphsRefs = (el) => {
        if (el && !paragraphsRef.current.includes(el)) {
            paragraphsRef.current.push(el);
        }
    };

    const addToSocialLinksRefs = (el) => {
        if (el && !socialLinksRef.current.includes(el)) {
            socialLinksRef.current.push(el);
        }
    };

    const addToButtonsRefs = (el) => {
        if (el && !buttonsRef.current.includes(el)) {
            buttonsRef.current.push(el);
        }
    };

    return (
        <section id="about" className="about" ref={aboutRef}>
            <h1 ref={titleRef}>About Me</h1>
            
            <div className="about-content">
                <div className="about-text">
                    <div className="about-card">
                        <p ref={addToParagraphsRefs}>I'm a Student Doing My MSc Computer Science in UCD</p>
                        <p ref={addToParagraphsRefs}>◊ Hi, I'm Gokul Sajeev, a passionate software developer with a keen interest in building innovative solutions. Currently pursuing my MSc in Computer Science at University College Dublin.</p>
                        <p ref={addToParagraphsRefs}>⟨/⟩ I have hands-on experience in developing full-stack applications, with a focus on creating efficient and scalable solutions.</p>
                        <p ref={addToParagraphsRefs}>∞ I am continuously learning and exploring new technologies, with a particular interest in cloud computing and AI.</p>
                    </div>
                </div>

                <div className="about-visual">
                    <div className="tech-flow-container">
                        <h3 className="tech-title" ref={addToParagraphsRefs}>Technologies I Work With</h3>
                        <div className="tech-flow" ref={addToParagraphsRefs}>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <span>Python</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
                                <span>Next.js</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Boot" />
                                <span>Spring Boot</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <span>React</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png" alt="OpenAI" />
                                <span>OpenAI</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" />
                                <span>Tailwind CSS</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                                <span>MySQL</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" />
                                <span>JWT</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" alt="Streamlit" />
                                <span>Streamlit</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite" />
                                <span>SQLite</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail API" />
                                <span>Gmail API</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <span>JavaScript</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                <span>Node.js</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                                <span>CSS</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                                <span>HTML</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                                <span>Git</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="Machine Learning" />
                                <span>Machine Learning</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" />
                                <span>FastAPI</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://vitejs.dev/logo.svg" alt="Vite" />
                                <span>Vite</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
                                <span>Pandas</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/8637/8637099.png" alt="AI" />
                                <span>AI</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/2620/2620939.png" alt="Rich" />
                                <span>Rich</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://typer.tiangolo.com/img/logo-margin/logo-margin-vector.svg" alt="Typer" />
                                <span>Typer</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png" alt="MCP" />
                                <span>MCP</span>
                            </div>
                            <div className="tech-item">
                                <img src="https://cdn-icons-png.flaticon.com/512/3659/3659898.png" alt="Cross-Platform" />
                                <span>Cross-Platform</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="about-links">
                <a href="https://github.com/Gokulsajeev15" target="_blank" rel="noopener noreferrer" ref={addToSocialLinksRefs}>
                    <img src="/My_Portfolio/assets/github-mark.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/gokulsajeev/" target="_blank" rel="noopener noreferrer" ref={addToSocialLinksRefs}>
                    <img src="/My_Portfolio/assets/InBug-Black.png" alt="LinkedIn" className="social-icon-l" />
                </a>
            </div>
            
            <button className="resume-button" onClick={() => { setShowResume(!showResume) }} ref={addToButtonsRefs}>
                <p>{showResume ? 'Hide Resume' : 'View My Resume'}</p>
            </button>
            
            {showResume && (
                <div className="resume-display">
                    <iframe src="/My_Portfolio/assets/GokulSajeev-Resume.pdf" width="100%" height="500px" title="Resume" className="resume-iframe"></iframe>
                </div>
            )}
            
            <h3 ref={addToButtonsRefs}>Or</h3>
            <a href="/My_Portfolio/assets/GokulSajeev-Resume.pdf" download ref={addToButtonsRefs}>
                <button className="download-button">Download</button>
            </a>
        </section>
    );
}

export default About; 