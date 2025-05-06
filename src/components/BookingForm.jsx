import React, { useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { initializeTimes, updateTimes } from "../utils/timeUtils";

const BookingForm = ({ formData = {}, onDateChange = () => { }, onFieldChange = () => { }, onSubmit }) => {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes());
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = window.submitAPI(formData);

        if (success) {
            if (typeof onSubmit === 'function') {
                onSubmit(formData);
            }
            navigate('/confirmed');
        } else {
            alert("Error al enviar la reserva.");
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFieldChange(prev => ({ ...prev, [name]: value }));

        if (name === 'date') {
            onDateChange(value);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="date"
                value={formData?.date}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="hour"
                value={formData?.hour}
                onChange={handleInputChange}
                required
            >
                <option value="">Select a time</option>
                {availableTimes?.map((timeOption) => (
                    <option key={timeOption} value={timeOption}>{timeOption}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                value={formData?.guests}
                onChange={handleInputChange}
                min="1"
                max="10"
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formData?.occasion}
                onChange={handleInputChange}
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <button type="submit">Make Your Reservation</button>
        </form>
    );
};

export default BookingForm;