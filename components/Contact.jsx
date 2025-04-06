import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>

        <button type="submit">Send</button>
      </div>
    </section>
  );
};

export default Contact;