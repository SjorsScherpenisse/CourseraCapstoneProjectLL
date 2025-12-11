import './App.css';
import './Footer.css';

function Footer() {
    const footerItems = ['Navigation', 'Contact', 'Social Media'];
    return (
        <footer className='footer-container'>
            <div className='footer-logo'>
                <img src='littlelemon.png' alt='Little Lemon Logo'/>
            </div>
            <div className="footer-links">
                {footerItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="footer-item">
                        {item}
                    </a>
                    ))}
            </div>
        </footer>
    );
}
export default Footer;