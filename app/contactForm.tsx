"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to your API / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <span className="success-icon">✓</span>
        <p className="success-msg">Thanks! We&rsquo;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email Address" required />
      </div>
      <input type="tel" placeholder="Phone Number" />
      <select defaultValue="">
        <option value="" disabled>
          I&rsquo;m looking to…
        </option>
        <option>Buy a Home</option>
        <option>Sell a Home</option>
        <option>Invest in Real Estate</option>
        <option>Just Browsing</option>
      </select>
      <textarea
        placeholder="Tell us about your situation (optional)"
        rows={4}
      />
      <button type="submit" className="btn-primary btn-full">
        Send Message →
      </button>
    </form>
  );
}




