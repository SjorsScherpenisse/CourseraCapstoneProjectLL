// BookingForm.js - WITH VALIDATION
import React, { useState, useEffect } from 'react';
import './BookingForm.css';

function BookingForm(props) {
  const { availableTimes, dispatch } = props;

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form on every change
  useEffect(() => {
    validateForm();
  }, [date, time, guests, occasion]);

  const validateForm = () => {
    const newErrors = {};
    
    // Date validation
    if (!date) newErrors.date = 'Date is required';
    
    // Time validation
    if (!time) newErrors.time = 'Time is required';
    
    // Guests validation
    if (!guests) newErrors.guests = 'Number of guests is required';
    else if (guests < 1) newErrors.guests = 'Must be at least 1 guest';
    else if (guests > 10) newErrors.guests = 'Maximum 10 guests allowed';

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      alert('Please fix form errors before submitting');
      return;
    }

    console.log('Form submitted:', { date, time, guests, occasion });
    alert(`Reservation submitted for ${date} at ${time} for ${guests} guests`);

    // Dispatch booking to remove time
    dispatch({ type: 'ADD_BOOKING', bookedTime: time });

    // Reset form
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Date Field */}
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            required
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        {/* Time Field */}
        <div className="form-group">
          <label htmlFor="time">Time *</label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={handleTimeChange}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        {/* Guests Field */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={guests}
            onChange={handleGuestsChange}
            min="1"
            max="10"
            required
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        {/* Occasion Field */}
        <div className="form-group">
          <label htmlFor="occasion">Occasion (Optional)</label>
          <select
            id="occasion"
            name="occasion"
            value={occasion}
            onChange={handleOccasionChange}
          >
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business Dinner</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="submit-btn"
          disabled={!isFormValid}
          aria-label="On Click"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
}

export default BookingForm;