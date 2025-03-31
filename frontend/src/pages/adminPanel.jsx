// AdminPanel.js
/*
import React, { useState, useEffect } from 'react';
import './adminPanel.css';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [expiringSoon, setExpiringSoon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(20); // Default discount

  useEffect(() => {
    fetchExpiringProducts();
  }, []);

  const fetchExpiringProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/expiring-soon');
      const data = await response.json();
      setExpiringSoon(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching expiring products:', err);
      setLoading(false);
    }
  };

  const putOnSale = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}/sale`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ discountPercent: discount }),
      });
      
      if (response.ok) {
        fetchExpiringProducts(); // Refresh the list
        alert('Product put on sale successfully!');
      }
    } catch (err) {
      console.error('Error putting product on sale:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="admin-container">
      <h1>Expiring Products Management</h1>
      
      <div className="discount-control">
        <label>
          Default Discount Percentage:
          <input 
            type="number" 
            value={discount} 
            onChange={(e) => setDiscount(e.target.value)}
            min="1"
            max="90"
          />%
        </label>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-list">
          <h2>Products Expiring Soon ({expiringSoon.length})</h2>
          
          {expiringSoon.length === 0 ? (
            <p>No products expiring soon.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Expiry Date</th>
                  <th>Original Price</th>
                  <th>Sale Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expiringSoon.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.quantity}</td>
                    <td>{formatDate(product.expiryDate)}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      {product.onSale ? (
                        <span className="sale-price">
                          ${(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
                          <span className="discount-badge">{product.discountPercent}% OFF</span>
                        </span>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>
                      {new Date(product.expiryDate) < new Date() ? (
                        <span className="expired">Expired</span>
                      ) : product.onSale ? (
                        <span className="on-sale">On Sale</span>
                      ) : (
                        <span className="active">Active</span>
                      )}
                    </td>
                    <td>
                      {!product.onSale && new Date(product.expiryDate) > new Date() && (
                        <button 
                          onClick={() => putOnSale(product._id)}
                          className="sale-btn"
                        >
                          Put on Sale
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;*/