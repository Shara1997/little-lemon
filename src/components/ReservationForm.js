import { Link } from "react-router-dom";
import "../components/Styles/ReservationForm.css"
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

function ReservationForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    )
    const [occasion, setOcassion] = useState("")
    const [tableFor, setTableFor] = useState("")


    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setValue("")
        setDate("")
        setTime("")
        setOcassion("")
        setTableFor("")
    }

    const handleSubmit = (e) => {
        clearForm();
        e.preventDefault();
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        var str = e.target.value;
        const date = new Date(str);

        props.updateTime(date);

        setTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const getIsFormValid = () => {
        return (
            firstName &&
            lastName &&
            validateEmail(email) &&
            value &&
            date &&
            time &&
            occasion &&
            tableFor
        )
    }

    return (
        <>
            <section className="reservation-container">
                <form onSubmit={handleSubmit}>
                    <h2>Reserve Your Table</h2>
                    <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                    <fieldset>
                        <div className="first-name">
                            <label htmlFor="fName" required>First Name:<span class="field-star" aria-hidden="true">*</span></label>
                            <input value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                type="text" placeholder="First Name" id="fName" name="fName"
                                minLength="8" maxLength="25" required />
                        </div>
                        <div className="last-name">
                            <label htmlFor="lName">Last Name:<span class="field-star" aria-hidden="true">*</span></label>
                            <input value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                type="text" placeholder="Last Name" id="lName" name="lName"
                                minLength="8" maxLength="25" required />
                        </div>
                        <div className="email-address">
                            <label htmlFor="email">Email Address:<span class="field-star" aria-hidden="true">*</span></label>
                            <input value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email" placeholder="Email Address" id="email" name="email" required />
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone-number">Phone Number:<span class="field-star" aria-hidden="true">*</span></label>
                            <PhoneInput
                                className="phone"
                                placeholder="Phone number"
                                value={value}
                                country="US"
                                international={false}
                                onChange={setValue}
                                maxLength="14"
                            />

                        </div>
                        <div className="date">
                            <label htmlFor="booking-date">Date:<span class="field-star" aria-hidden="true">*</span></label>
                            <input type="date" placeholder="Reservation Date" id="booking-date" name="booking-date" required
                                onChange={handleChange} />
                        </div>
                        <div className="time">
                            <label htmlFor="booking-time">Time:<span class="field-star" aria-hidden="true">*</span></label>
                            <select name="booking-time" id="booking-time" value={time} onChange={(e) => {
                                setTime(e.target.value)
                            }}>
                                <option value="" disabled selected>Reservation Time</option>
                                {
                                    props.availableTimes.map((times, index) => {
                                        return <option key={index}>{times}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="occasions">
                            <label htmlFor="occasion">Occassion:<span class="field-star" aria-hidden="true">*</span></label>
                            <select name="occasion" id="occasion" key={occasion} value={occasion} onChange={(e) => {
                                setOcassion(e.target.value)
                            }}>
                                <option value="" disabled>Select Occasion</option>
                                <option value="B">Birthday</option>
                                <option value="A">Anniversary</option>
                            </select>
                        </div>
                        <div className="guests">
                            <label htmlFor="table-for">Table For:<span class="field-star" aria-hidden="true">*</span></label>
                            <input value={tableFor} id="table-for" name="table-for" min='1' max='16' onChange={(e) => {
                                setTableFor(e.target.value)
                            }} />
                        </div>
                        <div className="reserve-button">
                            <Link to="/confirmation">
                                <button type="submit" disabled={!getIsFormValid()}>Reserve</button>
                            </Link>
                        </div>
                    </fieldset>

                </form>
            </section>
        </>
    )
}

export default ReservationForm;