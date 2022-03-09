import logo from "../images/airbnb-logo.png"
import "../styles/Header.css"
export default function Header() {
    return (
        <header>
            <img className="logo" src={logo} alt="Logo" />
        </header>
    )
}