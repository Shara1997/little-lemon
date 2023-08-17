import './HeroSectionStyles.css';
import HeroImg from '../assets/restauranfood.jpg'

function HeroSection(){
    return(
        <>
        <section className="hero-container">
            <div className="hero-items">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
                <button>Reserve a table</button>
            </div>
            <img src={HeroImg} alt="" className="hero-img" />
        </section>
        </>
    )
}

export default HeroSection;