import TestimonialCard from './TestimonialCard';
import User from '../assets/user.png';
import '../components/Testimonial.css';

function Testimonial() {
    return (
        <>
            <section className="testimonial-container">
                <div className="header">
                    <h3>TESTIMONIALS</h3>
                </div>
                <div className="testimonial-cards">
                    <TestimonialCard
                        personImg={User}
                        name='Nicole'
                        comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rem aliquid repudiandae officiis, impedit facilis, veritatis obcaecati ea praesentium illo, ab eius."'
                    />
                    <TestimonialCard
                        personImg={User}
                        name='Sam'
                        comment='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus labore incidunt omnis unde rerum quae eius aperiam consequatur."'
                    />
                    <TestimonialCard
                        personImg={User}
                        name='Rithika'
                        comment='"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto natus labore quo eos assumenda expedita quidem perspiciatis sapiente incidunt rerum!"'
                    />
                </div>
            </section>
        </>
    )
}

export default Testimonial;