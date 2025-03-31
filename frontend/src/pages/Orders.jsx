import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Package, Calendar, DollarSign } from 'lucide-react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const location = useLocation();

  // Load orders from localStorage on component mount
  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    // Sort orders by date, most recent first
    setOrders(savedOrders.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  // Check for new order from checkout
  useEffect(() => {
    if (location.state && location.state.newOrder) {
      // Optional: You could show a success message or highlight the new order
      console.log('New order placed:', location.state.newOrder);
    }
  }, [location.state]);

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get order status based on date
  const getOrderStatus = (dateString) => {
    const orderDate = new Date(dateString);
    const now = new Date();
    const daysDiff = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) return 'Processing';
    if (daysDiff < 2) return 'Shipped';
    return 'Delivered';
  };

  // Calculate total order price
  const calculateOrderTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Package className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">
              You haven't placed any orders yet
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div 
                key={order.id} 
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Order #{order.id}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Placed on {formatDate(order.date)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${
                        getOrderStatus(order.date) === 'Processing' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : getOrderStatus(order.date) === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }
                    `}>
                      {getOrderStatus(order.date)}
                    </span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  {/* Order Items */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2">Items</h3>
                    {order.items.map(item => (
                      <div 
                        key={item.id} 
                        className="flex justify-between items-center mb-2 border-b pb-2 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded-md mr-4"
                          />
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Order Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-5 h-5 mr-2" />
                          <span>Order Date</span>
                        </div>
                        <span className="font-medium">
                          {formatDate(order.date)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="w-5 h-5 mr-2" />
                          <span>Total</span>
                        </div>
                        <span className="font-bold text-lg text-green-600">
                          ${calculateOrderTotal(order.items)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;