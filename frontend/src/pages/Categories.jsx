import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Furniture', image: '/image/ap.png' },
    { id: 2, name: 'Lighting', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 3, name: 'Decor', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' },
    { id: 4, name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ];

  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Shop by Category</h2>
          <p className="categories-description">Explore our wide range of fresh groceries</p>
        </div>
        <div className="categories-grid">
          {categories.map(category => (
            <a 
              href={`/category/${category.id}`} 
              key={category.id} 
              className="category-card"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image" 
              />
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;