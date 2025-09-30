import "./Header.css";
import { Logo } from "./logo/Logo";
import { Navbar } from "./navbar/Navbar";


export function Header() {
    return (
        <header className="header">
            <Logo/>
            <Navbar/>
        </header>
    );
}

