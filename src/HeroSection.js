
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
          src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Little Lemon restaurant"
        />
      </div>
    </section>
  );
}

export default HeroSection;