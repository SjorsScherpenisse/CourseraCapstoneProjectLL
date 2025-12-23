// App.js - CORRECT
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

// ✅ INTERNAL FUNCTIONS - no export needed
function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
}

// Enhanced updateTimes in App.js
function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return mock data based on date
      const selectedDate = new Date(action.date);
      const day = selectedDate.getDay();
      
      // Weekend vs weekday hours
      if (day === 0 || day === 6) { // Weekend
        return ['18:00', '19:00', '20:00', '21:00', '22:00'];
      } else { // Weekday
        return ['17:00', '18:00', '19:00', '20:00', '21:00'];
      }
    
    case 'ADD_BOOKING':
      // Remove booked time from available times
      return state.filter(time => time !== action.bookedTime);
    
    default:
      return state;
  }
}


// ✅ ONLY App component is exported
function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  return (
    <Router>
      <div className="app-container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          } />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

// ✅ ONLY ONE export default - the App component
export default App;