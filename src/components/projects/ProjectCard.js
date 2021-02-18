import React from 'react'

const ProjectCard = ({
  img,
  skills,
  webpage,
  github
}) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={ img } />
      </div>

      <div className="project-information">
        <div className="project-skills">
          {
            skills.map( skill => (
              <span>{ skill }</span>  
            ))
          }
        </div>

        <div className="project-links">
          {
            webpage
              &&
                <a href={ webpage } target="_blank">Web page</a>
          }
          {
            github
              &&
                <a href={ github } target="_blank">GitHub</a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
