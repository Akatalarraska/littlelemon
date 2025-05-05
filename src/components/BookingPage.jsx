import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../utils/timeUtils';

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