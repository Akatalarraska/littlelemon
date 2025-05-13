import { useReducer, useState } from 'react';
import Jumbotron from './Jumbotron';
import BookingForm from './BookingForm';
import BookingTable from './BookingTable'; 
import { initializeTimes, updateTimes } from '../utils/timeUtils';

function Home(){
  const [availableTimes, dispatch] = useReducer(updateTimes, null, ()=>initializeTimes());
  const [formData, setFormData] = useState({
    date: '',
    hour: '',
    guests: 1,
    occasion: 'Birthday'
  });
  const [bookings, setBookings] = useState([]);

  const handleDateChange = (date) => {
    dispatch({ type: 'DATE_CHANGE', payload: date });
    setFormData(prev => ({ ...prev, date }));
  };

  const handleSubmit = (formData) => {
    setBookings(prev => [...prev, formData]);
  };

  return (
    <main className="container mx-auto p-4">
      <Jumbotron />
      <BookingForm
        availableTimes={availableTimes}
        formData={formData}
        onDateChange={handleDateChange}
        onFieldChange={setFormData}
        onSubmit={handleSubmit}
      />

      <BookingTable bookings={bookings} />
    </main>
  );
}

export default Home;
