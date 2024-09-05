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
            <p>Building a Tic Tac Toe game in ReactJS involves creating an interactive UI where two players compete to align three symbols in a row. The core components include a Board that displays a 3x3 grid of Square components, each handling user clicks and updating the game state. React’s state management tracks the current player, the board’s state, and win conditions. The game also features real-time updates, displaying the current player’s turn and allowing players to review previous moves or restart the game.</p>
        </div>
        <div className="tiktactoe">
            <h1>FOOD ZONE</h1>
            <img src={foodzone} alt="foodzone" />
            <p>The Subscription-Based Food Delivery System is a comprehensive platform designed to offer users the convenience of regular, curated meal deliveries. Developed using ReactJS, Node.js, and MongoDB, this system provides a user-friendly interface that simplifies the process of enjoying high-quality meals at home. Users can access personalized menu options, set flexible delivery schedules, and even arrange food for functions and events according to their preferences. The platform collaborates with various hotels and catering services, ensuring a diverse range of culinary choices to meet different tastes and needs.</p>
        </div>
        <div className="tiktactoe">
            <h1>HOME DECORS</h1>
            <img src={home} alt="home" />
            <p>The "Home Decors" e-commerce website, built with ReactJS, provides a smooth and interactive shopping experience for home decoration items. It features a dynamic user interface with reusable components, making it easy to manage and update. Customers can browse through various product categories, view detailed information, and make purchases on a fast and responsive platform. The use of ReactJS ensures efficient performance and a user-friendly experience for home decor enthusiasts.</p>
        </div>
        </div>

        </div>
    )
}