import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  const projects = [
    
    {
      title: "Social Media App",
      description: "A full-stack social media project with login and logout page.",
      tech: "Node.js, Express, MongoDB, React",
      link: "https://social-media-9jg8.onrender.com",
    },
    {
      title: "Electricity Board",
      description: "A full-stack bookstore app with authentication and payments.",
      tech: "Node.js, Express, MongoDB,,Django, React",
      link: "https://elect-frontend.onrender.com.com",
    },
      {
      title: "E-commerce Website",
      description: "A React + Django web app to search Products using an external API.",
      tech: "React, Node.js, API Integration",
      link: "https://ecommerce2-4y1i.onrender.com",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>  
            <p>{p.description}</p>
            <p><strong>Tech Stack:</strong> {p.tech}</p>
            <a href={p.link} target="_blank" rel="noreferrer">click  to  redirect</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
