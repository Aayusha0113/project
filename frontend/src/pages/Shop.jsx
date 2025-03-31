import React, { useState } from 'react';
import { Filter, ShoppingCart, Search } from 'lucide-react';

const Shop = () => {
  // Sample product data (in a real app, this would come from backend)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Apples',
      category: 'Fruits',
      price: 3.99,
      image: '/api/placeholder/300/300',
      description: 'Fresh, locally sourced organic apples',
      unit: 'lb'
    },
    {
      id: 2,
      name: 'Whole Milk',
      category: 'Dairy',
      price: 4.49,
      image: '/api/placeholder/300/300',
      description: 'Organic whole milk from local dairy farms',
      unit: 'gallon'
    },
    // Add more products...
  ]);

  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 50],
    search: ''
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleAddToCart = (product) => {
    // In a real app, this would interact with cart context
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    // Dispatch storage event to update cart count in navbar
    window.dispatchEvent(new Event('storage'));
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category;
    const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Pantry'];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          
          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={filters.search}
                onChange={(e) => setFilters(prev => ({...prev, search: e.target.value}))}
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="bg-green-100 text-green-800 p-2 rounded-lg hover:bg-green-200"
            >
              <Filter size={24} />
            </button>
          </div>
        </div>

        {/* Filters Dropdown */}
        {showFilters && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  value={filters.category}
                  onChange={(e) => setFilters(prev => ({...prev, category: e.target.value}))}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
             {/*} <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="number" 
                    value={filters.priceRange[0]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev, 
                      priceRange: [Number(e.target.value), prev.priceRange[1]]
                    }))}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input 
                    type="number" 
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev, 
                      priceRange: [prev.priceRange[0], Number(e.target.value)]
                    }))}
                    className="w-full border rounded-lg px-3 py-2"
                    placeholder="Max"
                  />
                </div>
              </div>/*}

              {/* Reset Filters */}
              <div className="flex items-end">
                <button 
                  onClick={() => setFilters({
                    category: '',
                    priceRange: [0, 50],
                    search: ''
                  })}
                  className="bg-red-100 text-red-800 px-4 py-2 rounded-lg hover:bg-red-200"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    ${product.price.toFixed(2)} / {product.unit}
                  </span>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-100 text-green-800 p-2 rounded-full hover:bg-green-200"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No products found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;