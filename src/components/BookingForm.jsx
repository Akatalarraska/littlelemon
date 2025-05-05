import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

  const [date, setDate] = useState("");
  const [hour, setHour] = useState("17:00")
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

   const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Form submitted:', { date, hour, guests, occasion });
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

   // Puedes añadir validación adicional
const isFormValid = date && hour && guests >= 1 && guests <= 10;

    return (
      <form onSubmit={handleSubmit} className="booking-form">
          <label htmlFor="res-date">Choose date</label>
          <input 
              type="date" 
              id="res-date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
          />
          
          <label htmlFor="res-time">Choose time</label>
          <select 
              id="res-time" 
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
          >
              {availableTimes.map((timeOption) => (
                  <option key={timeOption} value={timeOption}>{timeOption}</option>
              ))}
          </select>
          
          <label htmlFor="guests">Number of guests</label>
          <input 
              type="number" 
              id="guests" 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1" 
              max="10" 
              required
          />
          
          <label htmlFor="occasion">Occasion</label>
          <select 
              id="occasion" 
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
          >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
          </select>
          
          <button type="submit" disabled={!isFormValid}> Make Your Reservation </button>

      </form>
  );
};
export default BookingForm;
