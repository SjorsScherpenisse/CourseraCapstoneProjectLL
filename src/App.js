import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/booking" element={<BookingPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
