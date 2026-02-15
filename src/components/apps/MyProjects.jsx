import React, { useState } from "react";
import { projectData } from "@/data/projectList";
import "@/styles/MyProjects.css";
import { Github, ExternalLink, Folder, Search, Cpu, Layers } from "lucide-react";

// Categories update kar le agar aur chahiye toh
const categories = ["All", "Web", "AI/ML", "Data Science", "IoT", "Personal"];

// Props me 'onProjectClick' receive karna zaroori hai Deep Dive ke liye
const MyProjects = ({ onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // --- FILTERING LOGIC (Category + Search) ---
  const filteredProjects = projectData.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="project-app-container">
      
      {/* --- SIDEBAR --- */}
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
              {cat === "All" ? <Layers size={14} /> : <Cpu size={14} />}
              {cat}
            </button>
          ))}
        </nav>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="project-grid-area">
        
        {/* Header with Search */}
        <div className="grid-header">
          <h2>
            <span style={{color:'#00f3ff'}}>{activeCategory}</span> 
            Projects ({filteredProjects.length})
          </h2>
          
          <div className="search-wrapper" style={{position: 'relative'}}>
            <Search size={16} style={{position: 'absolute', left: 10, top: 10, color: '#aaa'}}/>
            <input 
              type="text" 
              placeholder="Search protocols..." 
              className="search-bar" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{paddingLeft: 35}}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                
                {/* Image Section */}
                <div className="card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  
                  {/* OVERLAY - CLICK TO DEEP DIVE */}
                  <div className="card-overlay">
                    <button 
                        className="overlay-btn"
                        onClick={() => onProjectClick && onProjectClick(project.id)}
                    >
                        DEEP DIVE_
                    </button>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {/* Tech Stack Tags */}
                  <div className="tech-tags">
                    {project.techStack.slice(0, 3).map((tech, i) => ( // Show max 3 tags to keep card clean
                      <span key={i}>{tech}</span>
                    ))}
                    {project.techStack.length > 3 && <span>+{project.techStack.length - 3}</span>}
                  </div>

                  {/* Footer Actions */}
                  <div className="card-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // No Results Found State
            <div style={{
                gridColumn: "1 / -1", 
                textAlign: "center", 
                color: "#555", 
                marginTop: 50,
                fontFamily: "monospace"
            }}>
                [!] NO_DATA_FOUND_IN_SECTOR
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;