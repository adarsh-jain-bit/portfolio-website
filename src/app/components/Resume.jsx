import React from 'react'
import Icon from './Icon'

const Resume = () => {
  return (
<article className="resume">
  <header>
    <h2 className="h2 article-title">Resume</h2>
  </header>
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <Icon name="book-outline" />
      </div>
      <h3 className="h3">Education</h3>
    </div>
    <ol className="timeline-list">
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          Chameli Devi College of Engineering
        </h4>
        <span>2024 — 2026</span>
        <p className="timeline-text">
          I am currently pursuing a Master of Computer Applications (MCA),
          further enhancing my technical expertise and deepening my knowledge in
          computer science and software development.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">
          Shri Atal Bihari Vajpayee Arts and Commerce College{" "}
        </h4>
        <span>2021 - 2024</span>
        <p className="timeline-text">
          I hold a Bachelor of Commerce (B.Com) degree, which has provided me
          with a strong foundation in business principles. This educational
          background complements my technical skills, enabling me to approach
          software development with a well-rounded perspective
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">High school Studies</h4>
        <span>2019 - 2021 </span>
        <p className="timeline-text">
          During my school years, I consistently excelled academically, often
          achieving top ranks in my class. This strong academic foundation has
          played a crucial role in shaping my dedication and drive in the field
          of technology.
        </p>
      </li>
    </ol>
  </section>
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <Icon name="book-outline" />
      </div>
      <h3 className="h3">Experience</h3>
    </div>
    <ol className="timeline-list">
       <li className="timeline-item">
        <h4 className="h4 timeline-item-title">ScaleUs Technologies</h4>
        <span> May 2025 — Present</span>
        <p className="timeline-text">
I am currently working as a Frontend Developer at ScaleUs Technologies, where I focus on building responsive, intuitive, and visually engaging web interfaces. I leverage modern frontend tools and frameworks to deliver polished, high-quality, and interactive user experiences.

        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Impulse Websystem</h4>
        <span> June 2024 — Present</span>
        <p className="timeline-text">
          I was working as a Frontend Developer at Impulse Websystem,
          where I specialize in creating responsive and user-friendly web
          interfaces. My role involves utilizing modern frontend technologies to
          deliver high-quality, interactive user experiences.
        </p>
      </li>
      <li className="timeline-item">
        <h4 className="h4 timeline-item-title">Amenses Innovation Pvt Ltd</h4>
        <span>Febuary 2023 — May 2024 </span>
        <p className="timeline-text">
          I completed an internship at Amenses Innovation, where I had the
          opportunity to work on live projects. This hands-on experience allowed
          me to apply my technical skills in real-world scenarios, contributing
          to the development and deployment of functional software solutions.
        </p>
      </li>
      
    </ol>
  </section>
  <section className="skill">
    <h3 className="h3 skills-title">My skills</h3>
    <ul className="skills-list content-card">
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">HTML</h5>
          <data value={90}>90%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "90%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">CSS</h5>
          <data value={80}>80%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "80%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">JavaScript</h5>
          <data value={75}>75%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "75%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">React JS</h5>
          <data value={50}>80%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "50%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Express Js</h5>
          <data value={50}>50%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "50%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Mongo DB</h5>
          <data value={50}>50%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "50%" }} />
        </div>
      </li>
      <li className="skills-item">
        <div className="title-wrapper">
          <h5 className="h5">Node JS</h5>
          <data value={50}>60%</data>
        </div>
        <div className="skill-progress-bg">
          <div className="skill-progress-fill" style={{ width: "60%" }} />
        </div>
      </li>
    </ul>
  </section>
</article>

  )
}

export default Resume