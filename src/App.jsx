import About from "./components/about"
import Homepage from "./components/Home"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router-dom"
import './components/styles/home.css'
import Projects from "./components/projects"
import Contact from "./components/contact"

function App() {

  return (
    <>
      <Navbar/>
      <Homepage/>
      <About/>
      <Projects/>
      <Contact/>
    
    </>
  )
}

export default App
