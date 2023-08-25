import './Testimonial.css';

function TestimonialCard({personImg, name, comment}){
    return(
        <>
        <section className="cardContainer">
            <div className="person-detail">
                <img src={personImg} alt="img" />
                <h3>{name}</h3>
            </div>
            <div className="comment">
                <p>{comment}</p>
            </div>
        </section>
        </>
    )
}

export default TestimonialCard;