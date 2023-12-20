import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className = "Header">
            <button><NavLink to="/">Home</NavLink></button>
            <button><NavLink to="/about">About</NavLink></button>
            <button><NavLink to="/projects">Projects</NavLink></button>
            <button><NavLink to="/contact">Contact</NavLink></button>
        </nav>
    )
}

export default Header