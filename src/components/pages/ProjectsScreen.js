import React from 'react'
import angryBirds from '../../img/angry-birds.png'
import ProjectCard from '../projects/ProjectCard'

const ProjectsScreen = () => {
  let projects = [
    {
      id: '12a',
      name: 'Angry Birds',
      img: angryBirds,
      skills: ['HTML', 'CSS'],
      webpage: 'https://stevenacz.github.io/week2-team1/',
      github: 'https://github.com/StevenACZ/week2-team1'
    },
    {
      id: '12a',
      name: 'Angry Birds',
      img: angryBirds,
      skills: ['HTML', 'CSS'],
      webpage: 'https://stevenacz.github.io/week2-team1/',
      github: 'https://github.com/StevenACZ/week2-team1'
    },
    {
      id: '12a',
      name: 'Angry Birds',
      img: angryBirds,
      skills: ['HTML', 'CSS'],
      webpage: 'https://stevenacz.github.io/week2-team1/',
      github: 'https://github.com/StevenACZ/week2-team1'
    },
    {
      id: '12a',
      name: 'Angry Birds',
      img: angryBirds,
      skills: ['HTML', 'CSS'],
      webpage: 'https://stevenacz.github.io/week2-team1/',
      github: 'https://github.com/StevenACZ/week2-team1'
    },
  ]

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
