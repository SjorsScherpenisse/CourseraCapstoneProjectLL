import './App.css';

function Footer() {
    return (
        <footer>
            <div >
                <img className="image-container"
                src="littlelemon.png"
                alt="Little Lemon Logo"
                />
            </div>
            <ul>
                <li><a href="/navigation">Navigation</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/social-media">Social Media</a></li>
            </ul>
        </footer>
    )
}
export default Footer;