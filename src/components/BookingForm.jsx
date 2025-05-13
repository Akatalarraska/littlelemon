import React, { useEffect, useState } from "react";

const BookingForm = ({ availableTimes, formData, onDateChange, onFieldChange, onSubmit }) => {
    const [isDateValid, setIsDateValid] = useState(false);
    const [isTimeValid, setIsTimeValid] = useState(false);
    const [isGuestsValid, setIsGuestsValid] = useState(false);

    useEffect(() => {
        setIsDateValid(formData.date !== '');
        setIsTimeValid(formData.hour !== '');
        const guests = parseInt(formData.guests, 10);
        setIsGuestsValid(!isNaN(guests) && guests >= 1 && guests <= 10);
    }, [formData.date, formData.hour, formData.guests]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isDateValid && isTimeValid && isGuestsValid) {
            console.log('Form submitted:', formData);
            onSubmit(formData)
        }else{
            alert('Please fill in all fields correctly.');
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFieldChange(prev => ({ ...prev, [name]: value }));

        if (name === 'date') {
            setIsDateValid(value !== '');
            onDateChange(value);
        } else if (name === 'hour') {
            setIsTimeValid(value !== '');
        } else if (name === 'guests') {
            const guestsValue = parseInt(value, 10);
            setIsGuestsValid(!isNaN(guestsValue) && guestsValue >= 1 && guestsValue <= 10);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form divForm">
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
            <button type="submit" disabled={!(isDateValid && isTimeValid && isGuestsValid)}>Make Your Reservation</button>
        </form>
    );
};

export default BookingForm;