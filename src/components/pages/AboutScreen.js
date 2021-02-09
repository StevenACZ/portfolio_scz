import React from 'react'

const AboutScreen = () => {
  return (
    <section className="about-section">
      {/* HERO - ABOUT ME */}
      <div className="hero">
        <h2>About me</h2>
        <p>
        Front-end Developer seeking Full-Time Software Engineer Job in an entry-level position, looking to apply 10 months of experience
        in front-end development work, JavaScript, React, CSS and Web Standard HTML, and a keen eye for details, to help implement user interaction following client-approved mock-ups, such as wireframes, visual design comprehensive layouts, and prototypes.
        </p>

        {/* SVG */}
        <svg className="svg">
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10
            " />
          </filter>
        </svg>
      </div>

      {/* CIRCLES */}
      <div className="container-circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
    </section>
  )
}

export default AboutScreen
