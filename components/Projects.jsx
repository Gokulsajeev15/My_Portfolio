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
      title: 'Automated Survey Scheduler',
      description: 'The Automated Survey Scheduler automates personalized survey invitations with AI-powered email content and seamless Gmail integration. It offers flexible scheduling, participant management, and bulk CSV uploads to optimize survey engagement.',
      image: '/My_Portfolio/assets/Automated_scheduler.png',
      link:'https://github.com/Gokulsajeev15/Automated-Survey_scheduler'
      
    },
    {
      title: 'Task Manager',
      description: 'A minimalist yet powerful task management application with features like drag-and-drop organization, reminders, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=600&h=400&fit=crop',
    },

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