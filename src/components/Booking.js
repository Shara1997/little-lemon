import React, { useReducer } from 'react'
import ReservationForm from './ReservationForm';
import { fetchAPI } from './reserveAPI'

function Booking() {
    function updateTime(date){
        return fetchAPI(date)
    }

    const result = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTime, result);
    return(
        <>
        <ReservationForm 
        availableTimes={availableTimes}
        updateTime={dispatch} />
        </>
    )
}

export default Booking;