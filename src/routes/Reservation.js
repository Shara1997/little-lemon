import FooterNav from '../components/FooterNav';
import Navbar from '../components/Navbar'
import ReservationForm from '../components/ReservationForm';


function Reservation(){
    return(
        <>
        <Navbar />
        <ReservationForm />
        <FooterNav />
        </>
    )
}

export default Reservation;