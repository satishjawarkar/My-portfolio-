import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  // Track submission states for better user experience
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    sendMessage();
    // Map your form fields to match your EmailJS Template variables exactly
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || "No Subject provided",
      budget: form.budget || "Not Specified",
      message: form.message,
    };

    emailjs
      .send(
        "service_b78xjjd", // Replace with your Service ID
        "template_wkva7vc", // Replace with your Template ID
        templateParams,
        "1caAEqgTq0Ltp9Nsu", // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSending(false);
          setStatusMessage("✅ Message sent successfully!");
          // Reset form fields after successful delivery
          setForm({
            name: "",
            email: "",
            subject: "",
            budget: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
          setStatusMessage("❌ Failed to send message. Please try again.");
        },
      );
  };
  const sendMessage = () => {
    const phone = "917828467959"; // Country code + mobile number
    const text = encodeURIComponent(
      "Hello Satish! I'm interested in your services.",
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        {/* LEFT INFO */}
        <div className="contact-left">
          <span className="section-badge">Get In Touch</span>
          <h3>Let's Work Together! 🤝</h3>
          <p>
            Have a project in mind or just want to say hello? I'm always open to
            discussing new opportunities, creative ideas, or partnerships. Drop
            me a message directly!
          </p>

          <div className="contact-details">
            <div className="cd-item">
              <div
                className="cd-icon"
                style={{ background: "rgba(79,70,229,0.15)" }}
              >
                📍
              </div>
              <div className="cd-text">
                <strong>Location</strong>
                <span>New Delhi (India)</span>
              </div>
            </div>

            <div className="cd-item">
              <div
                className="cd-icon"
                style={{ background: "rgba(34,197,94,0.15)" }}
              >
                ✉️
              </div>
              <div className="cd-text">
                <strong>Email</strong>
                <span>satishjawarkar1792@gmail.com</span>
              </div>
            </div>

            <div className="cd-item">
              <div
                className="cd-icon"
                style={{ background: "rgba(6,182,212,0.15)" }}
              >
                📱
              </div>
              <div className="cd-text">
                <strong>WhatsApp</strong>
                <span>+91 7828467959</span>
              </div>
            </div>

            <div className="cd-item">
              <div
                className="cd-icon"
                style={{ background: "rgba(250,204,21,0.15)" }}
              >
                ⏰
              </div>
              <div className="cd-text">
                <strong>Availability</strong>
                <span>Mon – Sat, 9AM – 7PM IST</span>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="contact-social-row">
            <a
              href="https://github.com/satishjawarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="soc-icon-btn"
              title="GitHub"
            >
              🐙
            </a>
            <a
              href="https://www.linkedin.com/in/satish-jawarkar-097a68141"
              target="_blank"
              rel="noopener noreferrer"
              className="soc-icon-btn"
              title="LinkedIn"
            >
              💼
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="soc-icon-btn"
              title="Twitter"
            >
              🐦
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="soc-icon-btn"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-wrap">
          <form onSubmit={handleSubmit}>
            {/* Name + Email row */}
            <div className="form-row-2">
              <div className="fg">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Satish Jawarkar"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="fg">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="satish@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject + Budget row */}
            <div className="form-row-2">
              <div className="fg">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="fg">
                <label>Budget (Optional)</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option value="< ₹10,000">Less than ₹10,000</option>
                  <option value="₹10,000 – ₹30,000">₹10,000 – ₹30,000</option>
                  <option value="₹30,000 – ₹1,00,000">
                    ₹30,000 – ₹1,00,000
                  </option>
                  <option value="> ₹1,00,000">More than ₹1,00,000</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="fg">
              <label>Your Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                required
                onChange={handleChange}
              />
            </div>

            {/* Submit Button & Status Notification */}
            <button
              type="submit"
              className="wa-submit-btn"
              disabled={isSending}
            >
              <span>{isSending ? "⏳" : "✉️"}</span>{" "}
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "500",
                  fontSize: "14px",
                }}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
