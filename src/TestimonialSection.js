import './TestimonialSection.css';

function TestimonialSection() {
    const testimonials = [
    {
      id: 1,
      content: "Little Lemon is my favorite restaurant! The truffle pasta is absolutely divine. I come here every Friday!",
      rating: 5,
      name: "Alex Johnson",
      title: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      content: "The best Mediterranean food in town! The ambiance is perfect for family dinners. Our kids love it!",
      rating: 5,
      name: "Sarah Miller",
      title: "CTO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      content: "As a chef, I appreciate the quality ingredients. The herb-crusted salmon is cooked to perfection every time.",
      rating: 4,
      name: "David Chen",
      title: "Operations Director",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      content: "We celebrated our anniversary here and the staff made it so special. The wine pairing was exceptional!",
      rating: 5,
      name: "Maria Garcia",
      title: "Team Lead",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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
        Hear what our customers have to say about their dining experience at Little Lemon.
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