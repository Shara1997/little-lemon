import { Link } from "react-router-dom";
import "./ReservationForm.css"
import { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input/input'

function ReservationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
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

    const handleSubmit = () => {
        clearForm();
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
                            <label htmlFor="fName" required>First Name:<sup>*</sup></label>
                            <input value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                                type="text" placeholder="First Name" id="fName" name="fName"
                                minLength="8" maxLength="25" required />
                        </div>
                        <div className="last-name">
                            <label htmlFor="lName">Last Name:<sup>*</sup></label>
                            <input value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                                type="text" placeholder="Last Name" id="lName" name="lName"
                                minLength="8" maxLength="25" required />
                        </div>
                        <div className="email-address">
                            <label htmlFor="email">Email Address:<sup>*</sup></label>
                            <input value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email" placeholder="Email Address" id="email" name="email" required />
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone-number">Phone Number:<sup>*</sup> </label>
                            <PhoneInput
                            className="phone"
                                placeholder="Phone number"
                                value={value}
                                country="US"
                                international = {false}
                                onChange={setValue}
                                maxLength = "14"
                                 />

                        </div>
                        <div className="date">
                            <label htmlFor="booking-date">Date:<sup>*</sup></label>
                            <input type="date" placeholder="Reservation Date" id="booking-date" name="booking-date" required
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }} />
                        </div>
                        <div className="time">
                            <label htmlFor="booking-time">Time:<sup>*</sup></label>
                            <select name="booking-time" id="booking-time" onChange={(e) => {
                                setTime(e.target.value)
                            }}>
                                <option value="" disabled selected>Reservation Time</option>
                                <option value="16:00">16:00</option>
                                <option value="16:30">16:30</option>
                                <option value="17:00">17:00</option>
                                <option value="17:30">17:30</option>
                                <option value="18:00">18:00</option>
                                <option value="18:30">18:30</option>
                                <option value="19:00">19:00</option>
                                <option value="19:30">19:30</option>
                                <option value="20:00">20:00</option>
                                <option value="20:30">20:30</option>
                                <option value="22:00">22:00</option>
                            </select>
                        </div>
                        <div className="occasions">
                            <label htmlFor="occasion">Occassion:<sup>*</sup></label>
                            <select name="occasion" id="occasion" onChange={(e) => {
                                setOcassion(e.target.value)
                            }}>
                                <option value="" disabled selected>Select Occasion</option>
                                <option value="B">Birthday</option>
                                <option value="A">Anniversary</option>
                            </select>
                        </div>
                        <div className="guests">
                            <label htmlFor="table-for">Table For:<sup>*</sup></label>
                            <select name="people" id="table-for" onChange={(e) => {
                                setTableFor(e.target.value)
                            }}>
                                <option value="" disabled selected>Number of Guests </option>
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                                <option value="10">10</option>
                            </select>
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