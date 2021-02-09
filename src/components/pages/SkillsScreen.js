import React from 'react'

const SkillsScreen = () => {
  return (
    <section className="skills-section">
      {/* HERO - SKILLS */}
      <div className="hero">
        <h2>Skills & Experience</h2>
        <p>
          The main area of my expertise is front end development<br /><br />
          HTML, CSS, JS, building small and medium web apps with React<br />
          features, animations, and coding interactive layouts.<br /><br />
          I have also a little full-stack developer experience<br/>
          with (Ruby and Ruby on Rails)<br /><br />

          Visit my <a href="https://www.linkedin.com/in/stevenacz/" target="_blank">Linkeding</a> profile for more details.
        </p>
      </div>

      <div className="skills">
        <div className="skill-range beginner">
          <div>beginner</div>
        </div>
        <div className="skill-range elementary">
          <div>elementary</div>
        </div>
        <div className="skill-range intermediate">
          <div>intermediate</div>
        </div>
        <div className="skill-range advanced">
          <div>advanced</div>
        </div>

        <div className="skill">
          <p>HTML</p>
          <div className="experience-bar html">
          </div>
        </div>

        <div className="skill">
          <p>CSS</p>
          <div className="experience-bar css">
          </div>
        </div>

        <div className="skill">
          <p>JavaScript</p>
          <div className="experience-bar js">
          </div>
        </div>

        <div className="skill">
          <p>React</p>
          <div className="experience-bar react">
          </div>
        </div>

        <div className="skill">
          <p>Ruby</p>
          <div className="experience-bar ruby">
          </div>
        </div>

        <div className="skill">
          <p>Ruby on Rails</p>
          <div className="experience-bar rubyonrails">
          </div>
        </div>
      </div>      
    </section>
  )
}

export default SkillsScreen
