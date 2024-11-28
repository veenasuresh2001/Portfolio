import '../components/styles/about.css';
import logo1 from '../components/styles/logo.png'
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
                <p>I'm a self-taught Full Stack developer who loves creating beautiful and functional websites. I’m always eager to learn new techniques and technologies to improve my skills and deliver exceptional web experiences. With experience in the MERN stack (MongoDB, Express, React, Node.js), I specialize in building dynamic, high-performance web applications. I have a strong focus on both frontend and backend development, ensuring seamless integration and an intuitive user experience. I'm passionate about writing clean, maintainable code and collaborating with teams to bring ideas to life. I continuously explore new technologies to stay ahead of trends and deliver innovative solutions.</p>
            
            <div className="icons">
                <img src={logo1} alt="Logo" />
                {/* <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={php} alt="php" />
                <img src={react} alt="react" />
                <img src={node} alt="node" />
                <img src={mongo} alt="mongo" />
                <img src={sql} alt="sql" /> */}
            </div>
            </div>

        </>
    );
}
