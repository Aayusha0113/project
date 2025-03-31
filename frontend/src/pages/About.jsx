import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-4 px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center">About Fresh Market</h1>
        <div className="w-20 h-1 bg-green-500 mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl text-center">
          Bringing fresh, quality produce and grocery items to your neighborhood since 2010.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Fresh Market began with a simple idea: to create a grocery store that feels like a community market. In 2010, founders Sarah and Michael Chen noticed that their neighborhood lacked a store that offered quality produce at reasonable prices with a personal touch.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a small corner store has grown into a beloved chain serving communities across the region. Despite our growth, we've maintained our commitment to quality, freshness, and personalized service that makes grocery shopping a delightful experience.
          </p>
          <p className="text-gray-700">
            Through relationships with local farmers and producers, we've created a grocery experience that celebrates both global flavors and local harvests, making every shopping trip an adventure in taste and quality.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="bg-gray-200 h-full w-full flex items-center justify-center">
            <p className="text-gray-600 italic">[Store image goes here]</p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-green-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide communities with access to fresh, high-quality food products while supporting local producers and maintaining sustainable practices that respect our environment and future generations.
          </p>
        </div>
        <div className="bg-green-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the preferred neighborhood grocery destination that transforms everyday shopping into a delightful experience of discovery, fostering community connections and healthier lifestyles through quality food.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Quality",
              description: "We carefully select every product on our shelves to ensure the highest quality for our customers.",
              icon: "🌟"
            },
            {
              title: "Community",
              description: "We believe in building strong relationships with our customers and the communities we serve.",
              icon: "🤝"
            },
            {
              title: "Sustainability",
              description: "We're committed to environmentally friendly practices throughout our operations.",
              icon: "🌱"
            },
            {
              title: "Transparency",
              description: "We provide clear information about our products so you can make informed choices.",
              icon: "📋"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-green-700 mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Serve */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">How We Serve Our Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍎</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Carefully Curated Selection</h3>
            <p className="text-gray-700">
              We handpick every item we sell, working with trusted suppliers to offer you only the best products.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Home Delivery</h3>
            <p className="text-gray-700">
              Enjoy the convenience of having your groceries delivered right to your doorstep within hours of ordering.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">Culinary Expertise</h3>
            <p className="text-gray-700">
              Our in-store chefs and food experts are always ready to help with cooking tips and product recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Chen",
              title: "Co-Founder & CEO",
              bio: "Sarah's passion for quality food and community building inspired Fresh Market's creation."
            },
            {
              name: "Michael Chen",
              title: "Co-Founder & COO",
              bio: "Michael brings over 20 years of retail experience and a vision for exceptional customer service."
            },
            {
              name: "Elena Rodriguez",
              title: "Chef & Food Director",
              bio: "Elena oversees our prepared foods section and creates our seasonal recipes."
            },
            {
              name: "James Wilson",
              title: "Sustainability Manager",
              bio: "James ensures our operations remain environmentally friendly and socially responsible."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600 italic">[Team member photo]</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-700">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.title}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Come Visit Us Today!</h2>
        <p className="text-xl mb-6">Experience the Fresh Market difference at any of our locations.</p>
        <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-100 transition-colors">
          Find Your Nearest Store
        </button>
      </div>
    </div>
  );
};

export default About;