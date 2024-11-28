import '../components/styles/projects.css'
import tictactoe from '../components/styles/tictactoe.png'
import foodzone from '../components/styles/foodzone.png'
import home from '../components/styles/home.png'
export default function Projects(){
    return(
        <div className="projects">
        <h1>
            MY PROJECTS
        </h1>
        <div className="games">
        <div className="tiktactoe">
            <h1>TIC TAK TOE</h1>
            <img src={tictactoe} alt="tictactoe" />
        </div>
        <div className="tiktactoe">
            <h1>FOOD ZONE</h1>
            <img src={foodzone} alt="foodzone" />
        </div>
        <div className="tiktactoe">
            <h1>HOME DECORS</h1>
            <img src={home} alt="home" />
        </div>
        </div>

        </div>
    )
}