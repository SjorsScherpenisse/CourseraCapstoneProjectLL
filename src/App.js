/* global fetchAPI, submitAPI */
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { useReducer } from 'react';

function initializeTimes() {
  const today = new Date();
  try {
    const times = fetchAPI(today);
    return Array.isArray(times) ? times : ['17:00', '18:00', '19:00', '20:00', '21:00'];
  } catch (error) {
    console.error('API failed, using default times:', error);
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  }
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      try {
        const times = fetchAPI(new Date(action.date));
        return Array.isArray(times) ? times : state;
      } catch (error) {
        console.error('API failed, keeping current times:', error);
        return state;
      }

    case 'ADD_BOOKING':
      try {
        submitAPI(action.formData);
      } catch (error) {
        console.error('Submit failed:', error);
      }
      return state.filter(time => time !== action.bookedTime);

    default:
      return state;
  }
}

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

export default App;