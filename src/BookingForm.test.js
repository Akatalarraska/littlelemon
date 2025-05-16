import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:00', '19:00'];
const mockFormData = {
  date: '',
  hour: '',
  guests: '1',
  occasion: 'Birthday',
};
const mockOnDateChange = jest.fn();
const mockOnFieldChange = jest.fn();
const mockOnSubmit = jest.fn();

const renderBookingForm = (props = {}) => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      formData={{ ...mockFormData, ...props.formData }}
      onDateChange={props.onDateChange || mockOnDateChange}
      onFieldChange={props.onFieldChange || mockOnFieldChange}
      onSubmit={props.onSubmit || mockOnSubmit}
    />
  );
};

describe('BookingForm', () => {
  test('renders the date input with required attribute', () => {
    renderBookingForm();
    const dateInput = screen.getByLabelText('Choose date');
    expect(dateInput).toBeRequired();
  });

  test('renders the time select with required attribute', () => {
    renderBookingForm();
    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect).toBeRequired();
  });

  test('renders the guests input with required, min, and max attributes', () => {
    renderBookingForm();
    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('type', 'number');
  });


  describe('handleInputChange', () => {
    test('calls onFieldChange with the correct name and value when input changes', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText('Choose date');
      fireEvent.change(dateInput, { target: { name: 'date', value: '2025-05-17' } });
      expect(mockOnFieldChange).toHaveBeenCalledWith(expect.any(Function)); // It's called with the updater function

      const timeSelect = screen.getByLabelText('Choose time');
      fireEvent.change(timeSelect, { target: { name: 'hour', value: '18:00' } });
      expect(mockOnFieldChange).toHaveBeenCalledWith(expect.any(Function));

      const guestsInput = screen.getByLabelText('Number of guests');
      fireEvent.change(guestsInput, { target: { name: 'guests', value: '3' } });
      expect(mockOnFieldChange).toHaveBeenCalledWith(expect.any(Function));

      const occasionSelect = screen.getByLabelText('Occasion');
      fireEvent.change(occasionSelect, { target: { name: 'occasion', value: 'Anniversary' } });
      expect(mockOnFieldChange).toHaveBeenCalledWith(expect.any(Function));
    });

    test('calls onDateChange when the date input changes', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText('Choose date');
      fireEvent.change(dateInput, { target: { name: 'date', value: '2025-05-18' } });
      expect(mockOnDateChange).toHaveBeenCalledWith('2025-05-18');
    });

    test('updates isDateValid state correctly', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText('Choose date');
      expect(screen.getByRole('button')).toBeDisabled(); // Initially disabled

      fireEvent.change(dateInput, { target: { name: 'date', value: '2025-05-19' } });
      fireEvent.change(screen.getByLabelText('Choose time'), { target: { name: 'hour', value: '19:00' } });
      fireEvent.change(screen.getByLabelText('Number of guests'), { target: { name: 'guests', value: '2' } });
      expect(screen.getByRole('button')).toBeEnabled(); // Enabled after filling required fields
    });

    test('updates isTimeValid state correctly', () => {
      renderBookingForm();
      expect(screen.getByRole('button')).toBeDisabled();

      fireEvent.change(screen.getByLabelText('Choose date'), { target: { name: 'date', value: '2025-05-20' } });
      fireEvent.change(screen.getByLabelText('Choose time'), { target: { name: 'hour', value: '17:00' } });
      fireEvent.change(screen.getByLabelText('Number of guests'), { target: { name: 'guests', value: '1' } });
      expect(screen.getByRole('button')).toBeEnabled();
    });

    test('updates isGuestsValid state correctly for valid and invalid input', () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText('Number of guests');
      expect(screen.getByRole('button')).toBeDisabled();

      fireEvent.change(guestsInput, { target: { name: 'guests', value: '0' } });
      expect(screen.getByRole('button')).toBeDisabled();

      fireEvent.change(screen.getByLabelText('Choose date'), { target: { name: 'date', value: '2025-05-21' } });
      fireEvent.change(screen.getByLabelText('Choose time'), { target: { name: 'hour', value: '18:00' } });
      fireEvent.change(guestsInput, { target: { name: 'guests', value: '5' } });
      expect(screen.getByRole('button')).toBeEnabled();

      fireEvent.change(guestsInput, { target: { name: 'guests', value: '11' } });
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('handleSubmit', () => {
    test('calls onSubmit if all required fields are valid', () => {
      renderBookingForm();
      fireEvent.change(screen.getByLabelText('Choose date'), { target: { name: 'date', value: '2025-05-22' } });
      fireEvent.change(screen.getByLabelText('Choose time'), { target: { name: 'hour', value: '19:00' } });
      fireEvent.change(screen.getByLabelText('Number of guests'), { target: { name: 'guests', value: '2' } });
      fireEvent.click(screen.getByRole('button'));
      expect(mockOnSubmit).toHaveBeenCalledWith({
        date: '2025-05-22',
        hour: '19:00',
        guests: '2',
        occasion: 'Birthday', 
      });
    });

    test('does not call onSubmit if any required field is invalid and shows an alert', () => {
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      renderBookingForm({ formData: { ...mockFormData, date: '' } }); 
      fireEvent.click(screen.getByRole('button'));
      expect(mockOnSubmit).not.toHaveBeenCalled();
      expect(alertSpy).toHaveBeenCalledWith('Please fill in all fields correctly.');
      alertSpy.mockRestore();
    });
  });
});