import "./AboutItems.css"
import Chefs1 from "../assets/Chefs1.jpg"

function AboutItems(){
    return(
        <>
        <section className="about-items">
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist. The restaurant features a locally-sourced menu with daily specials.</p>
            <img src={Chefs1} alt="" />
        </section>
        </>
    )
}

export default AboutItems;