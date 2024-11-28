import './styles/navbar.css';
import letter from '../components/styles/letter-v.png';
import { Link } from 'react-scroll';
import { useState } from 'react'; 

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/Veena Suresh.pdf'; // Ensure this path is correct
        link.download = 'Veena Suresh.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="nav-container">
            <div className="nav">
                <p>
                    <img src={letter} alt="Letter V" />
                </p>
                <button className="hamburger" onClick={toggleNav} aria-label="Toggle menu">
                    &#9776; {/* Hamburger icon */}
                </button>
            </div>
            <div className={`nav-links ${isActive ? 'active' : ''}`}>
                <Link to="home" smooth={true} duration={500} onClick={toggleNav}>Home</Link>
                <Link to="about" smooth={true} duration={500} onClick={toggleNav}>About</Link>
                <Link to="projects" smooth={true} duration={500} onClick={toggleNav}>Projects</Link>
                <Link to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</Link>
                <button onClick={handleResumeDownload}>Resume</button>
            </div>
        </div>
    );
}
