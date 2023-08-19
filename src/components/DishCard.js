import './Highlights.css'

function DishCard({title, price, imgUrl, description,delivery}){
    return(
        <section className="card-container">
            <div className="dish-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="dish-title">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <div className="dish-description">
                <p>{description}</p>
            </div>
            <div className="delivery">
                <p>Order for Delivery <i class="fa-solid fa-person-biking"></i></p>

            </div>
        </section>
    )
}

export default DishCard;