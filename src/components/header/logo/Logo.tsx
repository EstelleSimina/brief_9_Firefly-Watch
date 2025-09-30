import logo from "../../../assets/logo.png";
import './Logo.css';

export const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo du site Firefly" className="logo-image"/>
            <h1>Firefly</h1>
        </div>
    )
}


