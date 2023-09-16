import '../components/Styles/Highlights.css';
import DishCard from './DishCard';
import GreekSalad from '../assets/greeksalad.jpg';
import Bruchetta from '../assets/bruchetta.jpg';
import LemonDessert from '../assets/lemonDessert.jpg';
import { Link } from 'react-router-dom';

function Highlights() {
    return (
        <>
            <section className="highlight-container">
                <div className="heading-items">
                    <h3>This week special!</h3>
                    <Link to='/menu'>
                        <button className="menu-btn">Online Menu</button>
                    </Link>

                </div>
                <div className="dish-items">
                    <DishCard
                        title='Greek Salad'
                        price='$12.99'
                        imgUrl={GreekSalad}
                        description='This famous greek salad of crispy lettuce, pepper, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
                    />
                    <DishCard
                        title='Bruchetta'
                        imgUrl={Bruchetta}
                        price='$7.99'
                        description='Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
                    />
                    <DishCard
                        title='Lemon Dessert'
                        price='$10.99'
                        imgUrl={LemonDessert}
                        description="This comes straight from grandma's recipe book, every last ingredients has been sourced and is as authentic as can be imagined."
                    />
                </div>
            </section>
        </>
    )
}

export default Highlights;