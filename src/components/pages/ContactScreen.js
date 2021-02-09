import React, { useState } from 'react'

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');

  let emailTo = `mailto:scoailazaa@gmail.com?&subject=${subject}&body=${messageBody}`

  const resetContactForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessageBody('');
  }

  return (
    <section className="contact-section">
      {/* HERO - CONTACT ME */}
      <div className="hero">
        <h2>Contact me</h2>

        <p>
          Hello, if you have a request or question,<br/>
          don't hesitate to contact me using below form either.
        </p>

        <div className="contact-form">
          <input
            onChange={ (e) => { setName(e.target.value) } }
            className="name"
            value={name}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={ (e) => { setEmail(e.target.value) } }
            className="email"
            value={email}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={ (e) => { setSubject(e.target.value) } }
            value={subject}
            className="subject"
            type="text"
            placeholder="Subject"
          />
          <textarea
            onChange={ (e) => { setMessageBody(e.target.value) } }
            value={messageBody}
            className="message"
            placeholder="Message"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <div className="submit-container">
          <a className="submit" href={emailTo} onClick={ resetContactForm } >Send</a>
        </div>
      </div>
    </section>
  )
}

export default ContactScreen
