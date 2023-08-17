import Logo from "../assets/Logo .svg";
import { MenuItems } from "./MenuItems";
import './NavbarStyles.css';

function Navbar() {
    return (
        <nav className="navbar-tems">
            <img className='logo-img' src={Logo} alt="Logo" />
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
                <button className='login-button'>Login</button>
            </ul>
        </nav>
    )
}

export default Navbar;
