import React from "react";

const About = () => {
  return (
    <article className="about  active" >
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
  I am <b >Adarsh Jain</b>, a dedicated <b>MERN Stack Developer</b> based in Indore, India, with 
  <b> 1.8 years </b> of professional experience. I have worked as a full-time 
  React.js developer at <b>  Scaleus Technology  </b> for 8 months , followed by 
 1 year as a frontend developer at  <b> Impulse Websystem</b>. Additionally, I 
  completed1 year of internship at <b> Amenses Innovation</b>, which built the 
  foundation of my development journey.
  <br />
  I specialize in JavaScript, React, Node.js, Express, and a diverse modern tech stack. 
  My skills extend across JavaScript, TypeScript, and Java, combined with strong 
  experience in database management using MySQL and MongoDB.
  <br />
  I excel at building responsive, dynamic, and intuitive web interfaces using 
  React.js, Next.js, Tailwind CSS, and other modern libraries. On the backend, 
  I have hands-on experience with Node.js, Express.js, and GraphQL.
  <br />
  My toolkit includes essential software and utilities such as VS Code, Postman, 
  MySQL Workbench, MongoDB Compass, and JIRA. I am also proficient in 
  problem-solving and Data Structures & Algorithms (DSA) using both JavaScript 
  and Java.
  <br />
  I actively use Git, GitHub, and Bitbucket for version control and follow 
  clean coding practices. My passion for technology drives me to solve complex 
  problems and continuously improve my expertise.
</p>

      </section>
      {/*
    - service
  */}
<section className="service">
  <h3 className="h3 service-title">What I&apos;m doing</h3>

  <ul className="service-list">
    <li className="service-item">
      <div className="service-icon-box">
        <img src="./assets/images/icon-dev.svg" alt="Frontend icon" width={40} />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Frontend Development</h4>
        <p className="service-item-text">
          Building fast, modern, and responsive UIs using React, Next.js, and Tailwind CSS.
        </p>
      </div>
    </li>

    <li className="service-item">
      <div className="service-icon-box">
        <img src="./assets/images/icon-design.svg" alt="UI design icon" width={40} />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">UI & UX Design</h4>
        <p className="service-item-text">
          Creating clean layouts, modern components, and smooth user experiences with animations.
        </p>
      </div>
    </li>

    <li className="service-item">
      <div className="service-icon-box">
        <img src="./assets/images/icon-app.svg" alt="Full stack icon" width={40} />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">Full-Stack Development</h4>
        <p className="service-item-text">
          Developing scalable MERN applications with secure APIs, dashboards, and admin panels.
        </p>
      </div>
    </li>

    <li className="service-item">
      <div className="service-icon-box">
        <img src="./assets/images/icon-photo.svg" alt="3D icon" width={40} />
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">3D & Animated Web</h4>
        <p className="service-item-text">
          Creating interactive 3D experiences and motion-based interfaces using OGL & Framer Motion.
        </p>
      </div>
    </li>
  </ul>
</section>

    </article>
  );
};

export default About;
