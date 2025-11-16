import React from 'react'
import Icon from './Icon'

const Sidebar = () => {
  return (
   <aside className="sidebar" data-sidebar="">
  <div className="sidebar-info">
    <figure className="avatar-box">
      <img
        src="./assets/images/my-avatar.png"
        alt="Richard hanrick"
        width={80}
      />
    </figure>
    <div className="info-content">
      <h1 className="name" title="Aadarsh Jain">
        Aadarsh jain
      </h1>
      <p className="title">Mern Stack Developer</p>
      <button>
        {" "}
        <a href="https://tomato-doti-14.tiiny.site/" target="_blank">
          <p className="title resume-download" id="downloadBtn">
            Download Resume
          </p>
        </a>
      </button>
    </div>
    <button className="info_more-btn" data-sidebar-btn="">
      <span>Show Contacts</span>
      <Icon name="chevron-down" />
    </button>
  </div>
  <div className="sidebar-info_more">
    <div className="separator" />
    <ul className="contacts-list">
      <li className="contact-item">
        <div className="icon-box">
          <Icon name="mail-outline" />
        </div>
        <div className="contact-info">
          <p className="contact-title">Email</p>
          <a href="mailto:Adarshj0304@gmail.com" className="contact-link">
            Adarshj0304@gmail.com
          </a>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <Icon name="phone-portrait-outline" />
        </div>
        <div className="contact-info">
          <p className="contact-title">Phone</p>
          <a href="tel:+12133522795" className="contact-link">
            +91 9926924500
          </a>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <Icon name="calendar-outline" />
        </div>
        <div className="contact-info">
          <p className="contact-title">Birthday</p>
          <time dateTime="1982-06-23">April 03, 2003</time>
        </div>
      </li>
      <li className="contact-item">
        <div className="icon-box">
          <Icon name="location-outline" />
        </div>
        <div className="contact-info">
          <p className="contact-title">Location</p>
          <address>Indore, India</address>
        </div>
      </li>
    </ul>
    <div className="separator" />
    <ul className="social-list">
      <li className="social-item">
        <a
          href="https://www.linkedin.com/in/aadarsh-jain-574b3621b/"
          className="social-link"
        >
          <Icon name="logo-linkedin" />
        </a>
      </li>
      <li className="social-item">
        <a href="https://github.com/adarsh-jain-bit" className="social-link">
          <Icon name="logo-github" />
        </a>
      </li>
      <li className="social-item">
        <a href="#" className="social-link">
          <Icon name="logo-instagram" />
        </a>
      </li>
    </ul>
  </div>
</aside>

  )
}

export default Sidebar