// Nav.js - UPDATED
import { Link } from 'react-router-dom'; // ADD THIS IMPORT
import './App.css';
import './Nav.css';

function Nav() {
    const navItems = ['Home', 'About', 'Menu', 'Reservation', 'Order Online', 'Contact'];

    return (
        <div className='nav-wrapper'>
            <nav className='nav-container'>
                <div className='nav-logo'>
                    <img src='littlelemon.png' alt='Little Lemon Logo'/>
                </div>
                <div className="nav-links">
                    {navItems.map((item) => {
                        // Determine the route for each nav item
                        let toPath = '/';
                        if (item === 'Reservation') toPath = '/booking';
                        // Add more routes as needed

                        return (
                            <Link
                                key={item}
                                to={toPath}  // Use 'to' instead of 'href'
                                className="nav-item"
                            >
                                {item}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
export default Nav;