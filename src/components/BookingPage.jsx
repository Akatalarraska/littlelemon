import React, { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from '../utils/timeUtils';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, null, () => initializeTimes())
    const [formData, setFormData] = useState({
      date: '',
      hour: '',
      guests: 1,
      occasion: 'Birthday'
    });
    const navigate = useNavigate();
  

    const handleDateChange = (date) => {
        dispatch({ type: 'DATE_CHANGE', payload: date });
        setFormData(prev => ({ ...prev, date }));
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;  
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const submitForm = (formData) => {
        const submissionResult = window.submitAPI(formData)
        if(submissionResult){
          navigate('/confirmed')
        }
      }

      console.log("times", availableTimes)
    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <BookingForm
            availableTimes={availableTimes}
            formData={formData}
            onDateChange={handleDateChange}
            onFieldChange={handleInputChange}            
            onSubmit={submitForm}/>
        </div>
    );
};

export default BookingPage;