import './FooterNav.css'
import LittleLogo from '../assets/littlelemonlogo.png'
import { DoormatNavItems } from "./DoormatNavItems";
import { ContactItems } from './ContactItems';
import { SocialItems } from './SocialItems';

function FooterNav() {
    return (
        <section className="footer-container">
            <img src={LittleLogo} alt="" className="logoImg" />
            <div className="doormatNav">
                <ul>
                    <h4>Navigation</h4>
                    {DoormatNavItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="contacts">
                <ul>
                    <h4>Contacts</h4>
                    {ContactItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <h4>Socials</h4>
                    {SocialItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} ><i className={item.icon}></i></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default FooterNav;