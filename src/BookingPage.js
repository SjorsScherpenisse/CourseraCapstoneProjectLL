// BookingPage.js - Base setup
import './BookingPage.css';

function BookingPage() {
  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Table Reservation</h1>
        <p>Book your table at Little Lemon</p>
      </div>

      <div className="booking-form-container">
        <form className="booking-form">
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <select id="time" name="time" required>
              <option value="">Select a time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion (Optional)</label>
            <select id="occasion" name="occasion">
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
    </div>
  );
}

export default BookingPage;