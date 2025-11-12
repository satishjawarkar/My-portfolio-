import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phoneNumber = "919876543210";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="contact-container"
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          className="contact-title"
        >
          Get In Touch 💬
        </Typography>
        <Typography align="center" color="rgba(255,255,255,0.7)" sx={{ mb: 4 }}>
          Have a project in mind or just want to say hello? Let’s connect!
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className="contact-form">
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            variant="outlined"
            color="info"
            value={formData.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Your Email"
            name="email"
            variant="outlined"
            color="info"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            color="info"
            value={formData.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#ccc" } }}
            InputProps={{ style: { color: "#fff" } }}
          />

          <div className="text-center">
            <Button
              type="submit"
              variant="contained"
              size="large"
              className="whatsapp-btn"
            >
              💌 Send via WhatsApp
            </Button>
          </div>
        </Box>
      </motion.div>
    </section>
  );
};

export default ContactSection;
