
import './HeroSection.css';


function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-subtitle">Chicago</p>
        <p>
          Welcome to Little Lemon, a family-owned restaurant where Mediterranean flavors
          come to life. We specialize in traditional recipes passed down through generations,
          serving authentic dishes crafted with fresh ingredients and love. Step into our warm,
          inviting atmosphere and experience the true taste of the Mediterranean.
        </p>
        <a href="#cta" className="hero-button">
          Order Here
        </a>
      </div>
      <div className="hero-image">
        <img
          src="littlelemon.png"
          alt="Little Lemon Logo"
        />
      </div>
    </section>
  );
}

export default HeroSection;