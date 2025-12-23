// BookingPage.js - FINAL CORRECTED VERSION
import './BookingPage.css';
import BookingForm from './BookingForm';

function BookingPage(props) {
  // ✅ Destructure ONLY what App.js actually sends
  const { availableTimes, dispatch } = props;
  // ❌ Remove: date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, setAvailableTimes

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Table Reservation</h1>
        <p>Book your table at Little Lemon</p>
      </div>

      {/* ✅ Pass ONLY what BookingForm needs */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
}

export default BookingPage;