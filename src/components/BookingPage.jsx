import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'DATE_CHANGE':
      return initializeTimes(); // Puedes personalizar esto según la fecha
    default:
      return state;
  }
};


const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
    const [formData, setFormData] = useState({
      date: '',
      hour: '',
      guests: 1,
      occasion: 'Birthday'
    });
  

    const handleDateChange = (date) => {
        dispatch({ type: 'DATE_CHANGE', payload: date });
        setFormData(prev => ({ ...prev, date }));
      };
    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm
            availableTimes={availableTimes}
            formData={formData}
            onDateChange={handleDateChange}
            onFieldChange={setFormData} />
        </div>
    );
};

export default BookingPage;