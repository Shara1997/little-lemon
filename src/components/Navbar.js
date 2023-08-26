import { Component } from 'react';
import Logo from "../assets/Logo .svg";
import { MenuItems } from "./MenuItems";
import './NavbarStyles.css';
import ShoppingBasket from '../assets/Basket.svg'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="navbar-items">
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <img className='logo-img' src={Logo} alt="Logo" />
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                    <button className='login-button'>Login</button>
                </ul>
                <img src={ShoppingBasket} alt="" className="shopping" />
            </nav>
        )
    }
}

export default Navbar;
