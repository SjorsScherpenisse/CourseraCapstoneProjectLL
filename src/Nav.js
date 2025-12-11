import './App.css';
import './Nav.css';

function Nav() {
    const navItems = ['Home', 'About', 'Menu', 'Reservation', 'Order Online', 'Contact'];
    return (
        <nav className='nav-container'>
            <div className='nav-logo'>
                <img src='littlelemon.png' alt='Little Lemon Logo'/>
            </div>
            <div className="nav-links">
                {navItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="nav-item">
                        {item}
                    </a>
                    ))}
            </div>
        </nav>
    );
}
export default Nav;