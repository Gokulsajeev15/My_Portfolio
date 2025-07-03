import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reusable ProjectCard Component
function ProjectCard({ title, description, image, link, technologies, cardRef }) {
  
  // Real logo URLs for technologies with reliable CDN sources
  const getTechLogo = (tech) => {
    const logoMap = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'OpenAI API': 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
      'Polygon.io': 'https://cdn.brandfetch.io/idfGjoDDfo/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B',
      'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.png',
      'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      'JWT': 'https://jwt.io/img/pic_logo.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Gmail API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      'OpenAI': 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png'
    };
    return logoMap[tech] ;
  };

  return (
    <a className='project-card' href={link} ref={cardRef}>
      <div>
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        {technologies && (
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="tech-badge"
              >
                <img 
                  src={getTechLogo(tech)} 
                  alt={tech}
                  style={{
                    width: '16px',
                    height: '16px',
                    filter: 'invert(1)'
                  }}
                  onError={(e) => {
                    // Fallback to a simple colored circle if image fails to load
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.style.width = '16px';
                    fallback.style.height = '16px';
                    fallback.style.borderRadius = '50%';
                    fallback.style.background = 'rgba(255, 255, 255, 0.3)';
                    fallback.style.flexShrink = '0';
                    e.target.parentNode.insertBefore(fallback, e.target);
                  }}
                />
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

// Main Projects Component
function Projects() {
    const projectsRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Set initial states
            gsap.set([titleRef.current, ...cardsRef.current], {
                opacity: 0,
                y: 80
            });

            // Create timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectsRef.current,
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
            // Animate cards with stagger
            .to(cardsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.5");

        }, projectsRef);

        return () => ctx.revert();
    }, []);

    const addToCardsRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const projectData = [
        {
            title: 'Finance Assistant',
            description: "Built an intelligent financial assistant integrating OpenAI's GPT with Polygon.io to provide real-time financial insights. Implemented generalized functions for handling diverse finance-related queries and visualizations. Integrated advanced features like PDF-based ticker extraction, financial metric calculations, and data-driven investment recommendations.",
            image: '/My_Portfolio/assets/Finance assistant.png',
            link:'https://github.com/Gokulsajeev15/Finance-Assistant',
            technologies: ['Python', 'OpenAI', 'Polygon.io']
        },
        
        {
            title: 'Agribridge',
            description: "Developed a full-stack eCommerce application bridging farmers and sellers for agricultural waste products. Designed responsive UI components using React and Tailwind CSS for enhanced user experience. Implemented backend features including authentication with JWT, product management, and robust API endpoints.",
            image: '/My_Portfolio/assets/Agribridge.png',
            link:'https://github.com/Gokulsajeev15/Agribridge',
            technologies: ['Next.js', 'Spring Boot', 'Tailwind CSS', 'JWT', 'MySQL']
        },
        {
            title: 'Automated Survey Scheduler',
            description: 'Developed a system to automatically schedule and send surveys based on user availability and preferences. Incorporated machine learning algorithms and GPT for personalized and engaging survey messages. Enhanced engagement rates and provided comprehensive survey result insights.',
            image: '/My_Portfolio/assets/Automated_scheduler.png',
            link:'https://github.com/Gokulsajeev15/Automated-Survey_scheduler',
            technologies: ['Python', 'Streamlit', 'Gmail API', 'OpenAI', 'SQLite']
        }
    ];

    return (
        <section id="projects" className="projects" ref={projectsRef}>
            <div className="container">
                <h2 ref={titleRef}>My Projects</h2>
                <div className="projects-grid">
                    {/* Dynamically render ProjectCard components */}
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                            technologies={project.technologies}
                            cardRef={addToCardsRefs}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;