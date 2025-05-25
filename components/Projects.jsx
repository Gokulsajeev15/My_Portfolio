import React from 'react';

// Reusable ProjectCard Component
function ProjectCard({ title, description, image,link }) {
  return (
    <a className='project-card' href={link}>
      <div>
        <img src={image} alt={title} className="project-image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

// Main Projects Component
function Projects() {

  const projectData = [
    
    {
      title: 'Agribridge',
      description: "Agribridge is a platform that bridges the gap between farmers and sellers by enabling the seamless sale of agricultural waste products through a modern, user-friendly web interface",
      image: '/My_Portfolio/assets/Agribridge.png',
      link:'https://github.com/Gokulsajeev15/Agribridge'
      
    },
    {
      title: 'Automated Survey Scheduler',
      description: 'The Automated Survey Scheduler automates personalized survey invitations with AI-powered email content and seamless Gmail integration. It offers flexible scheduling, participant management, and bulk CSV uploads to optimize survey engagement.',
      image: '/My_Portfolio/assets/Automated_scheduler.png',
      link:'https://github.com/Gokulsajeev15/Automated-Survey_scheduler'
      
    },
        {
      title: 'Finance Assistant',
      description: "SmartInvest is a domain-specific assistant that empowers users with real-time financial insights about Fortune 500 companies by combining natural language understanding with live stock data, intelligent metric analysis, and seamless PDF-based ticker lookup",
      image: '/My_Portfolio/assets/Finance assistant.png',
      link:'https://github.com/Gokulsajeev15/Finance-Assistant'
      
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects