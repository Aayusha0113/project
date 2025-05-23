import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Award, Clock } from 'lucide-react';
import Footer from '../component/Footer'




const HomePage = () => {
  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Fresh Organic Apples',
      image: '../images/apple.png',
      price: 3.99,
      category: 'Fruits',
      unit: 'lb'
    },
    {
      id: 2,
      name: 'Organic Whole Milk',
      image: '../images/milk.jpeg',
      price: 4.49,
      category: 'Dairy',
      unit: 'gallon'
    },
    {
      id: 3,
      name: 'Whole Grain Bread',
      image: '../images/bread.jpeg',
      price: 3.29,
      category: 'Bakery',
      unit: 'loaf'
    },
    {
      id: 4,
      name: 'Fresh Salmon Fillet',
      image: '../images/salmon.jpeg',
      price: 12.99,
      category: 'Seafood',
      unit: 'lb'
    }
  ];

  // Sample categories
  const Categories = [
    {
      id: 1,
      name: 'Fruits & Vegetables',
      image: '/images/fruits-vegetables.png'  // Simplified path
    },
    {
      id: 2,
      name: 'Dairy & Eggs',
      image: '/images/dairy-eggs.png'
    },
    {
      id: 3,
      name: 'Meat & Seafood',
      image: '/images/meat.jpeg'
    },
    {
      id: 4,
      name: 'Bakery',
      image: '/images/bakery.jpeg'
    },
    {
      id: 5,
      name: 'Pantry Staples',
      image: '/images/pantry.jpeg'
    },
    {
      id: 5,
      name: 'Beverages',
      image: '/images/beverage.jpeg'
    }
    // Add other categories with similar correct paths
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-green-800 py-16 sm:py-24">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/groc.jpeg"
            alt="Fresh groceries"
            className="w-full h-full object-cover object-center opacity-40 "
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center  mb-6 drop-shadow-lg">
            Bringing the Freshest Groceries Straight to Your Doorstep
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl text-center mb-8">
            Shop from our wide selection of fresh produce, dairy, meats, and pantry essentials.
            Get same-day delivery right to your doorstep.
          </p>
          <Link
            to="/shop"
            className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium text-lg hover:bg-green-100 transition-colors duration-300 shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </div>


      {/* Featured Products Section */}
      <div className="py-12 bg-gray-50">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our top picks for this week
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-green-600 font-bold">
                    ${product.price.toFixed(2)} / {product.unit}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-200"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our wide range of fresh groceries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Categories.map(category => (
             <Link
              to={`/category/${category.id}`} key={category.id} className="relative group block overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300 h-48">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  onError={(e) => {
                    e.target.src = `${process.env.PUBLIC_URL}/images/placeholder.png`;
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.className = "w-full h-full object-cover bg-gradient-to-r from-green-100 to-blue-100";
                    console.error('Failed to load:', category.image);
                  }}
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end justify-center pb-6 px-4">
            <span className="text-white text-2xl font-semibold text-center tracking-wide transform group-hover:-translate-y-1 transition-transform duration-300">
              {category.name}
            </span>
          </div>
              </Link>
              
            ))}
          </div>
        </div>
      </div>

      {/* Shop by Category Section */}

      {/*<div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore our wide range of fresh groceries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Categories.map((category) => (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                //Add error handling to the img tag 
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/image/placeholder.png'; // Fallback image
                    e.target.className = "w-full h-48 object-cover bg-gray-200"; // Fallback styling
                    console.error(`Failed to load image: ${category.image}`);
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xl font-bold text-center">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>*/}


      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Shop With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <ShoppingBag className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Quality Products</h3>
              <p className="mt-2 text-base text-gray-600">
                We source the freshest ingredients from local farms and trusted suppliers.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Truck className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-base text-gray-600">
                Same-day delivery for orders placed before 3 PM in our service areas.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Award className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Satisfaction Guarantee</h3>
              <p className="mt-2 text-base text-gray-600">
                Not satisfied? We'll refund or replace any items that don't meet your expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Clock className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Convenient Shopping</h3>
              <p className="mt-2 text-base text-gray-600">
                Shop anytime, anywhere. Save time and skip the grocery store lines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
