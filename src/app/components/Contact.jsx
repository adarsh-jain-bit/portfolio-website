"use client"

import React from "react"
import Icon from "./Icon"

const Contact = () => {

  function sendToWhatsApp(event) {
     let phoneNumber = "9926924500";
    event.preventDefault()
    const fullname = document.getElementById("fullname")?.value || ""
    const email = document.getElementById("email")?.value || ""
    const message = document.getElementById("message")?.value || ""
 let whatsappMessage = `Hello, I want to contact you!\n\n*Name:* ${fullname}\n*Email:* ${email}\n*Message:* ${message}`;

    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      <section className="mapbox" data-mapbox="">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26634.311276827535!2d75.88756638044167!3d22.76597490881399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2aa63f86ecf%3A0x5ec994f6b12cb4bc!2sRadisson%20Blu%20Hotel%20Indore!5e1!3m2!1sen!2sin!4v1721064062155!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" onSubmit={sendToWhatsApp}>
          <div className="input-wrapper">
            <input
              type="text"
              id="fullname"
              className="form-input"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            id="message"
            className="form-input"
            placeholder="Your Message"
            required
            defaultValue={""}
          />
          <button className="form-btn" type="submit">
            <Icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}

export default Contact