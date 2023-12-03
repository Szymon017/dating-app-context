import React from 'react'
import { useState } from 'react';
import "./contactstyles.css"
function Contact() {
    const [contactData] = useState({
        address: 'Miłosna 12',
        phone: '+123 456 789',
        email: 'love@love.com',
      });
  return (
    
    <div>
        <div className="contact-container">

      <section className="contact-section">
        <h2>Kontakt</h2>
        <p>{contactData.address}</p>
        <p>Phone: {contactData.phone}</p>
        <p>Email: {contactData.email}</p>
      </section>
    </div>
    </div>
  )
}

export default Contact