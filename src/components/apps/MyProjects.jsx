import React, { useState } from "react";
import { projectData } from "@/data/projectList";
import "@/styles/MyProjects.css";
import { Github, ExternalLink, Folder } from "lucide-react"; // Icons (Install lucide-react if needed, or use img tags)

const categories = ["All", "Web", "AI/ML", "Data Science", "IoT"];

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectData 
    : projectData.filter(p => p.category === activeCategory);

  return (
    <div className="project-app-container">
      
      {/* SIDEBAR */}
      <div className="project-sidebar">
        <div className="sidebar-header">
          <Folder size={24} color="#00f3ff" />
          <span>My Projects</span>
        </div>
        
        <nav className="category-nav">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="project-grid-area">
        <div className="grid-header">
          <h2>{activeCategory} Projects ({filteredProjects.length})</h2>
          <input type="text" placeholder="Search..." className="search-bar" />
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <a href={project.link} target="_blank" className="overlay-btn">View Live</a>
                </div>
              </div>
              
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="card-actions">
                  <a href={project.github} target="_blank" title="GitHub Repo">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.link} target="_blank" title="Live Demo">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;