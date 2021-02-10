import React from 'react'
import ProjectCard from '../projects/ProjectCard'

import { projects } from '../../data/projects'

const ProjectsScreen = () => {
  return (
    <section className="projects-section">
      <div className="hero">
        <h2>Projects</h2>
      </div>

      <section className="projects-container">
        {
          projects.map( project => (
            <ProjectCard
              key={ project.id }
              { ...project }
            />
          ))
        }
      </section>
    </section>
  )
}

export default ProjectsScreen
