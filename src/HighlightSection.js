import './HighlightSection.css';

function HighlightSection() {
  const dishes = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: "$24",
      description: "Handmade pasta with black truffle, parmesan cream sauce, and fresh herbs.",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Bestseller", "Vegetarian"],
      spicy: false
    },
    {
      id: 2,
      name: "Spicy Tuna Roll",
      price: "$18",
      description: "Fresh tuna, avocado, cucumber, with our signature spicy mayo sauce.",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Spicy", "Sushi"],
      spicy: true
    },
    {
      id: 3,
      name: "Herb Crusted Salmon",
      price: "$26",
      description: "Atlantic salmon with herb crust, lemon butter sauce, and seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Gluten-Free", "Healthy"],
      spicy: false
    }
  ];

  const handleOrderClick = (dishName) => {
    console.log(`Ordering: ${dishName}`);
    // Add your order logic here
    alert(`Added ${dishName} to your order!`);
  };

  return (
    <div className='highlight-wrapper'>
      <section className="highlight-container">
        {/* Header with title and button */}
        <div className="highlight-header">
          <h2 className="highlight-title">Our Best Dishes</h2>
          <button
            className="highlight-button"
            onClick={() => handleOrderClick("Full Menu")}
          >
            Order Now
          </button>
        </div>

        {/* 3-Card Grid */}
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              {/* Dish Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="dish-image"
              />

              {/* Dish Content */}
              <div className="dish-content">
                {/* Name and Price */}
                <div className="dish-header">
                  <h3 className="dish-name">{dish.name}</h3>
                  <span className="dish-price">{dish.price}</span>
                </div>

                {/* Description */}
                <p className="dish-description">{dish.description}</p>

                {/* Tags */}
                <div className="dish-tags">
                  {dish.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`tag ${
                        tag === "Spicy" ? "spicy" : 
                        tag === "Vegetarian" ? "veg" : 
                        tag === "Bestseller" ? "bestseller" : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Order Button */}
                <button 
                  className="dish-order-btn"
                  onClick={() => handleOrderClick(dish.name)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HighlightSection;