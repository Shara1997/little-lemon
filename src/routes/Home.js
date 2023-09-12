import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Chef1 from '../assets/restauranfood.jpg'
import Highlights from "../components/Highlights";
import Testimonial from "../components/Testimonial";
import AboutSection from "../components/AboutSection";
import FooterNav from "../components/FooterNav";

function Home() {
    return (
        <>
            <Navbar />
            <HeroSection
                cName="hero-home"
                title1="Little Lemon"
                title2="Chicago"
                text="We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist."
                btnName="Reserve a table"
                btnClass="show"
                url="/reservation"
                imgClass="hero-img1"
                heroImg={Chef1}
            />
            <Highlights />
            <Testimonial />
            <AboutSection />
            <FooterNav />
        </>
    )
}

export default Home;