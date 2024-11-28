import React, { useState, useRef } from 'react';
import '../components/styles/contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import insta from '../components/styles/instagram.png';
import github from '../components/styles/github.png';
import linkedin from '../components/styles/linkedin.png';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const form = useRef();

    // Handle input changes to update formData
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const sendEmail = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs
            .sendForm("service_f9as38x", "template_t4gijul", form.current, "QnSbXN02czYtadT44")
            .then(
                () => {
                    toast.success("Message sent");
                    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
                },
                (error) => {
                    toast.error("Failed to send", error.text);
                }
            );
    };

    return (
        <>
            <div className="contact">
                <form ref={form} onSubmit={sendEmail}>
                    <h1>Contact Me</h1>
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label>Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send</button>
                    <div className="social">
                        <a href="#"><img src={insta} alt="instagram" /></a>
                        <a href="https://github.com/veenasuresh2001"><img src={github} alt="github" /></a>
                        <a href="https://www.linkedin.com/in/veena-suresh-6012b7251/"><img src={linkedin} alt="linkedin" /></a>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}
