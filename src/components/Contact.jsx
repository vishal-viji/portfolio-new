import React, { useState } from "react";
import axios from "axios";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        import.meta.env.REACT_API_URL + "/api/contact",
        formData
      );

      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Let’s build something amazing together!</p>

      {/* CONTACT FORM */}
      <form className="contact-form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {/* YOUR LINKS (keep these) */}
      <div className="contact-links">
        <p>
          Email:
          <a href="mailto:vishalshanmugam928@example.com">
            vishalshanmugam928@example.com
          </a>
        </p>
        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/vishal-vishal-3711ba293/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/vishal
          </a>
        </p>
        <p>
          GitHub:
          <a
            href="https://github.com/vishal-viji"
            target="_blank"
            rel="noreferrer"
          >
            github.com/vishal-viji
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
