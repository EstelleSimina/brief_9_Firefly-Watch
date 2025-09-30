import { NavLink } from "react-router";
import "./Navbar.css";

export function Navbar () {
    return (
    <nav>
        <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/movies">Les films</NavLink></li>
            <li><NavLink to="/series">Les séries</NavLink></li>
        </ul>
    </nav>
    );
}