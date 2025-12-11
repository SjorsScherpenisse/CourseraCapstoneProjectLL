
import './HeroSection.css';


function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <p className="hero-subtitle">Chicago</p>
        <p>
          A brief, engaging description of your product or service. 
          Explain the value proposition and what makes you unique.
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