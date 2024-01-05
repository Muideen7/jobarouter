import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic here
    console.log(`Email: ${email}\nMessage: ${message}`);
    // Reset form fields after submission
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>Your email:</span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}