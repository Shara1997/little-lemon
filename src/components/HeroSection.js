import '../components/Styles/HeroSectionStyles.css';
import { Link } from 'react-router-dom';

function HeroSection(props) {
    return (
        <>
            <section className={props.cName}>
                <div className="hero-items">
                    <h1>{props.title1}</h1>
                    <h3>{props.title2}</h3>
                    <p>{props.text}</p>
                    <Link to={props.url}>
                        <button className={props.btnClass}>{props.btnName}</button>
                    </Link>

                </div>
                <img src={props.heroImg} alt="" className={props.imgClass} />
            </section>
        </>
    )
}

export default HeroSection;