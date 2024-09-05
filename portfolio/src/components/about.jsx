import '../components/styles/about.css';
import logo from '../components/styles/ux-ui-logo.png';
import logo1 from '../components/styles/logo.png';
import html from '../components/styles/html.png';
import css from '../components/styles/css.png';
import js from '../components/styles/js.png';
import php from '../components/styles/php.png';
import react from '../components/styles/react.png';
import node from '../components/styles/node.png';
import mongo from '../components/styles/mongo.jpg';
import sql from '../components/styles/sql.png';
export default function About() {
    return (
        <>
            <div className="about">
                <h1>ABOUT ME</h1>
                <p>I'm a self-taught web developer and MCA graduate who loves creating beautiful and functional websites. I’m always eager to learn new techniques and technologies to improve my skills and deliver exceptional web experiences.</p>
            <div className="card-container">
                <div className="card">
                    <h1>UI/UX Designing</h1>
                    <img src={logo} alt="logo" />
                    <p>As a UI/UX designer, I love making websites and apps that are easy to use and look great. I start by finding out what users want through research. Then, I create and improve prototypes to keep things simple and intuitive. By working closely with teams, I ensure our designs are built well, so users have a great experience.</p>
                </div>
                <div className="card">
                    <h1>Web development</h1>
                    <img src={logo1} alt="logo1" />
                    <p>As a web developer, I build and maintain websites and web apps using HTML, CSS, and JavaScript for the structure, style, and functionality. I work on both the frontend and backend. My tasks involve designing user interfaces, making sure websites work well on all devices, improving performance, and adding features that enhance the user experience.</p>
                </div>
            </div>
            <div className="icons">
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={php} alt="php" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={mongo} alt="mongo" />
                <img src={sql} alt="sql" />
            </div>
            </div>

        </>
    );
}
