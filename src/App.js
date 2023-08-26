import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonial';
import AboutSection from './components/AboutSection';
import FooterNav from './components/FooterNav';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Highlights />
    <Testimonial />
    <AboutSection />
    <FooterNav />
    </>
  );
}

export default App;
