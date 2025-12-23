// BookingForm.js - CORRECTED
import React, { useState } from 'react'; // Single import
import './BookingForm.css';

function BookingForm(props) {
  // ✅ Destructure ONLY what's passed from App.js
  const { availableTimes, dispatch } = props;
  
  // ✅ Create LOCAL state for form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  
  // Handler functions
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    
    // Dispatch date change to update available times
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
    
    console.log('Form submitted:', { date, time, guests, occasion });
    alert(`Reservation submitted for ${date} at ${time} for ${guests} guests`);
    
    // Reset form
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Date Field - dispatches when changed */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date"
            value={date}
            onChange={handleDateChange}
            required 
          />
        </div>
        
        {/* Time Field - populated from availableTimes reducer */}
        <div className="form-group">
          <label htmlFor="time">Time</label>
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
        </div>
        
        {/* Other fields remain the same */}
        <div className="form-group">
          <label htmlFor="guests">Number of Guests</label>
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
        </div>
        
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
        
        <button type="submit" className="submit-btn">
          Reserve Table
        </button>
      </form>
    </div>
  );
}

export default BookingForm;