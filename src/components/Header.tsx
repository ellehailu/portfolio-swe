import { NavLink } from "react-router-dom";
import './../index.css'

const Header = () => {
    return (
        <div className = "header">
            <div className="logo">
                <h2>Elle Hailu</h2>
            </div>
            <div className="navButtons">
                <button><NavLink to="/">Home</NavLink></button>
                <button><NavLink to="/about">About</NavLink></button>
                <button><NavLink to="/projects">Projects</NavLink></button>
                <button><NavLink to="/contact">Contact</NavLink></button>
            </div>
        </div>
    )
}

export default Header