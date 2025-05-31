import React from 'react';

// Reusable ProjectCard Component
function ProjectCard({ title, description, image, link, technologies }) {
  
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
    return logoMap[tech];
  };

  return (
    <a className='project-card' href={link}>
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
                    width: '18px',
                    height: '18px',
                    filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
                  }}
                  onError={(e) => {
                    // Fallback to a simple colored circle if image fails to load
                    e.target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.style.width = '18px';
                    fallback.style.height = '18px';
                    fallback.style.borderRadius = '50%';
                    fallback.style.background = 'linear-gradient(45deg, #4299e1, #63b3ed)';
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
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects