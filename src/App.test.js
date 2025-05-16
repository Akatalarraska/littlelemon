import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  const mockFormData = {
    date: '',
    hour: '',
    guests: '1',
    occasion: 'Birthday',
  };
  const mockAvailableTimes = []; 
  const mockOnDateChange = jest.fn();
  const mockOnFieldChange = jest.fn();
  const mockOnSubmit = jest.fn();

  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={mockAvailableTimes}
        formData={mockFormData}
        onDateChange={mockOnDateChange}
        onFieldChange={mockOnFieldChange}
        onSubmit={mockOnSubmit}
      />
    </MemoryRouter>
  );
  const headingElement = screen.getByLabelText("Choose date"); 
  expect(headingElement).toBeInTheDocument();
});