import '../components/Styles/AboutSection.css'
import Restaurant from '../assets/restaurant.jpg'
import Chef from '../assets/restaurant chef B.jpg'

function AboutSection() {
    return (
        <section className="about-container">
            <div className="about-items">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
            </div>
            <div className="img-container">
                <img src={Chef} alt="" className="img1" />
                <img src={Restaurant} alt="" className="img2" />
            </div>
        </section>
    )
}

export default AboutSection;