import React from 'react';

const SkillsScreen = () => {
	return (
		<section className="skills-section">
			{/* HERO - SKILLS */}
			<div className="hero">
				<h2>Skills & Experience</h2>
				<p>
					The main area of my expertise is front end development
					<br />
					<br />
					HTML, CSS, JS, building small and medium web apps with React
					<br />
					features, animations, and coding interactive layouts.
					<br />
					<br />
					Visit my{' '}
					<a href="https://www.linkedin.com/in/stevenacz/" target="_blank">
						Linkeding
					</a>{' '}
					profile for more details.
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
					<div className="experience-bar html"></div>
				</div>

				<div className="skill">
					<p>CSS / SASS</p>
					<div className="experience-bar css"></div>
				</div>

				<div className="skill">
					<p>JavaScript</p>
					<div className="experience-bar js"></div>
				</div>

				<div className="skill">
					<p>TypeScript</p>
					<div className="experience-bar ts"></div>
				</div>

				<div className="skill">
					<p>React</p>
					<div className="experience-bar react"></div>
				</div>

				<div className="skill">
					<p>Node.js</p>
					<div className="experience-bar nodejs"></div>
				</div>

				<div className="skill">
					<p>GraphQL</p>
					<div className="experience-bar graphql"></div>
				</div>

				<div className="skill">
					<p>PostgreSQL</p>
					<div className="experience-bar postgresql"></div>
				</div>
			</div>
		</section>
	);
};

export default SkillsScreen;
