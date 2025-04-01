import { useState, useEffect } from 'react';
import { CalendarDaysIcon, ArrowPathIcon, TagIcon } from '@heroicons/react/24/outline';

const AdminPanell = () => {
  const [products, setProducts] = useState([]);
  const [expiringSoon, setExpiringSoon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(20);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockProducts = [
          {
            id: 1,
            name: 'Organic Apples',
            category: 'Produce',
            price: 3.99,
            quantity: 24,
            expiryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
            onSale: false,
            imageUrl: '/images/apples.jpg'
          },
          {
            id: 2,
            name: 'Fresh Salmon Fillet',
            category: 'Seafood',
            price: 12.99,
            quantity: 8,
            expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            onSale: true,
            discountPercent: 25,
            imageUrl: '/images/salmon.jpg'
          }
        ];

        setProducts(mockProducts);
        setExpiringSoon(mockProducts.filter(p => 
          new Date(p.expiryDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) &&
          new Date(p.expiryDate) > new Date()
        ));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshing]);

  const putOnSale = (productId) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, onSale: true, discountPercent: discount } 
        : p
    ));
    setExpiringSoon(expiringSoon.map(p => 
      p.id === productId 
        ? { ...p, onSale: true, discountPercent: discount } 
        : p
    ));
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const refreshData = () => {
    setRefreshing(prev => !prev);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Expiring Products Management</h1>
        <button
          onClick={refreshData}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <ArrowPathIcon className="h-5 w-5" />
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Default Discount</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(Math.min(90, Math.max(1, e.target.value)))}
                className="w-20 border border-gray-300 rounded px-3 py-2"
                min="1"
                max="90"
              />
              <span className="text-gray-600">%</span>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Expiring Soon</h3>
            <p className="text-2xl font-bold text-green-600">{expiringSoon.length} products</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-yellow-800 mb-2">On Sale</h3>
            <p className="text-2xl font-bold text-yellow-600">
              {expiringSoon.filter(p => p.onSale).length} products
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700">
            Products Expiring Soon ({expiringSoon.length})
          </h2>
        </div>

        {loading ? (
          <div className="p-8 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : expiringSoon.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No products expiring soon. Great job!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {expiringSoon.map((product) => {
                  const isExpired = new Date(product.expiryDate) < new Date();
                  const daysToExpiry = Math.ceil(
                    (new Date(product.expiryDate) - new Date()) / (1000 * 60 * 60 * 24)
                  );

                  return (
                    <tr key={product.id} className={isExpired ? 'bg-red-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {product.imageUrl && (
                            <div className="flex-shrink-0 h-10 w-10">
                              <img 
                                className="h-10 w-10 rounded-full object-cover" 
                                src={product.imageUrl} 
                                alt={product.name} 
                              />
                            </div>
                          )}
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <span className={`text-sm ${isExpired ? 'text-red-600' : 'text-gray-500'}`}>
                            {formatDate(product.expiryDate)}
                            {!isExpired && (
                              <span className="block text-xs text-gray-400">
                                {daysToExpiry} {daysToExpiry === 1 ? 'day' : 'days'} left
                              </span>
                            )}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          ${product.price.toFixed(2)}
                          {product.onSale && (
                            <>
                              <div className="text-green-600 font-medium">
                                ${(product.price * (1 - product.discountPercent / 100)).toFixed(2)}
                              </div>
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                <TagIcon className="h-3 w-3 mr-1" />
                                {product.discountPercent}% OFF
                              </span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${isExpired ? 'bg-red-100 text-red-800' : 
                           product.onSale ? 'bg-green-100 text-green-800' : 
                           'bg-blue-100 text-blue-800'}`}>
                          {isExpired ? 'Expired' : product.onSale ? 'On Sale' : 'Active'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {!isExpired && !product.onSale && (
                          <button
                            onClick={() => putOnSale(product.id)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Put on Sale
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanell;