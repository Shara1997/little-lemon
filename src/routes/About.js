import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection"
import FooterNav from "../components/FooterNav"
import AboutItems from "../components/AboutItems";

function About() {
    return (
        <>
            <Navbar />
            <HeroSection
                cName="hero-about"
                title1="About"
                btnClass="hide"
            />
            <AboutItems />
            <FooterNav />
        </>
    )
}

export default About;