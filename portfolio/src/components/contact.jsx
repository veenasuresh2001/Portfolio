import React, { useState } from 'react';
import '../components/styles/contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import insta from '../components/styles/instagram.png';
import github from '../components/styles/github.png';
import linkedin from '../components/styles/linkedin.png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault(); 
            if (formData.name && formData.email && formData.message) {
            toast.success('Your message has been sent successfully');
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error('Please fill in all fields');
        }
    };

    return (
        <>
            <div className="contact">
                <form onSubmit={submit}>
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
