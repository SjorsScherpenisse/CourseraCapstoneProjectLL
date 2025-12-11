import './TestimonialSection.css';

function TestimonialSection() {
    const testimonials = [
    {
      id: 1,
      content: "This product changed my workflow completely. The efficiency gains are incredible!",
      rating: 5,
      name: "Alex Johnson",
      title: "Product Manager",
      avatar: "/avatars/alex.jpg" // Replace with your image path
    },
    {
      id: 2,
      content: "Outstanding support and intuitive interface. Our team adopted it in just one day.",
      rating: 5,
      name: "Sarah Miller",
      title: "CTO, TechCorp",
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 3,
      content: "The best investment we've made this year. ROI was achieved within the first month.",
      rating: 4,
      name: "David Chen",
      title: "Operations Director",
      avatar: "/avatars/david.jpg"
    },
    {
      id: 4,
      content: "Simplified our complex processes beautifully. The team absolutely loves it.",
      rating: 5,
      name: "Maria Garcia",
      title: "Team Lead",
      avatar: "/avatars/maria.jpg"
    }
  ];

   const renderStars = (rating) => {
    return (
      <div className="testimonial-rating">
        {[...Array(5)].map((_, index) => (
          <span 
            key={index} 
            className={`star ${index < rating ? 'filled' : 'empty'}`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };


    return(
        <section className='testimonial-container'>
            <h2 className="testimonials-title">Testimonials</h2>
      <p className="testimonials-subtitle">
        Hear what our customers have to say about their experience with our product.
      </p>
      
      {/* 4-Card Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            {/* Rating Stars */}
            {renderStars(testimonial.rating)}
            
            {/* Testimonial Text */}
            <p className="testimonial-content">"{testimonial.content}"</p>
            
            {/* Author Info */}
            <div className="testimonial-author">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="author-avatar"
              />
              <div className="author-info">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </section>
    )
}

export default TestimonialSection;