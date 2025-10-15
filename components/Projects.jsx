import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import financeAssistant from '/assets/Finance assistant.png'
import cliAgentLogo from '/assets/cliagent_logo.png'
import agribridge from '/assets/Agribridge.png'
import automatedScheduler from '/assets/Automated_scheduler.png'

gsap.registerPlugin(ScrollTrigger);

// Reusable ProjectCard Component
function ProjectCard({ title, description, image, link, technologies, cardRef }) {
  
  // Real logo URLs for technologies with reliable CDN sources
  const getTechLogo = (tech) => {
    const logoMap = {
      'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      'OpenAI API': 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
      'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.png',
      'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      'Tailwind CSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      'JWT': 'https://jwt.io/img/pic_logo.svg',
      'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      'Gmail API': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
      'SQLite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      'OpenAI': 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
      'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      'Vite': 'https://vitejs.dev/logo.svg',
      'YahooFinance': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yahoo/yahoo-original.svg',
      'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      'AI': 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png',
      'Caching': 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
      'OpenAI GPT-4o': 'https://seeklogo.com/images/O/open-ai-logo-8B9BFEDC26-seeklogo.com.png',
      'Rich': 'https://cdn-icons-png.flaticon.com/512/2620/2620939.png',
      'Typer': 'https://typer.tiangolo.com/img/logo-margin/logo-margin-vector.svg',
      'MCP': 'https://cdn-icons-png.flaticon.com/512/4712/4712027.png',
      'Cross-Platform': 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png',
      'SSH': 'https://cdn-icons-png.flaticon.com/512/2107/2107957.png',
      'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
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
          description: "Built an AI-powered financial analysis application processing 100 major companies with real-time market data integration. Features dynamic company recognition through intelligent search algorithms, comprehensive technical analysis engine calculating 6 key indicators (RSI, moving averages, Bollinger Bands), and OpenAI GPT-4o mini integration for natural language financial queries. Developed with FastAPI backend architecture across 3 modular services and React frontend, unified through single-command deployment automation.",
          image: financeAssistant,
          link: 'https://github.com/Gokulsajeev15/Finance-Assistant',
          technologies: ['Python', 'FastAPI', 'React', 'Vite', 'OpenAI API', 'Yahoo Finance API', 'Pandas', 'Git']
        },
        {
          title: 'AI-Powered Development Assistant with MCP Integration (UCD Project)',
          description: "Developed a comprehensive AI-powered development assistant featuring a FastAPI backend with MCP (Model Context Protocol) integration and an intelligent CLI frontend. The backend API leverages OpenAI GPT-4o mini for natural language processing, cross-platform tool management (macOS, Windows, Linux), automated Git workflows with SSH key management, and real-time system configuration. The CLI frontend built with Rich and Typer provides an intuitive natural language interface for developers to install tools, manage development environments, generate code, and automate workflows through conversational commands.",
          image: cliAgentLogo,
          link: 'https://github.com/yashm777/DevForge.git',
          technologies: ['Python', 'FastAPI', 'OpenAI GPT-4o', 'Rich', 'Typer', 'MCP', 'Git', 'Cross-Platform', 'SSH']
        },
        {
            title: 'Agribridge',
            description: "Developed a full-stack eCommerce application bridging farmers and sellers for agricultural waste products. Designed responsive UI components using React and Tailwind CSS for enhanced user experience. Implemented backend features including authentication with JWT, product management, and robust API endpoints.",
            image: agribridge,
            link:'https://github.com/Gokulsajeev15/Agribridge',
            technologies: ['React.js', 'Spring Boot', 'CSS', 'JWT', 'MySQL']
        },
        {
            title: 'Automated Survey Scheduler',
            description: 'Developed a system to automatically schedule and send surveys based on user availability and preferences. Incorporated machine learning algorithms and GPT for personalized and engaging survey messages. Enhanced engagement rates and provided comprehensive survey result insights.',
            image: automatedScheduler,
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