import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, Tag, Weight, Calendar, ChevronRight } from 'lucide-react';

const FoodDetailsPage = ({ foodData, updateFoodData }) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFoodData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/upload');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Enter Food Details</h2>
        <p className="text-gray-600 mb-8">Tell us more about the food you're donating.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Utensils className="w-4 h-4 mr-2 text-green-600" />
              Food Name
            </label>
            <input
              type="text"
              name="name"
              value={foodData.name}
              onChange={handleChange}
              placeholder="e.g. Fresh Garden Salad"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Tag className="w-4 h-4 mr-2 text-green-600" />
                Category
              </label>
              <select
                name="category"
                value={foodData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-white"
                required
              >
                <option value="">Select Category</option>
                <option value="cooked">Cooked Food</option>
                <option value="raw">Raw Materials</option>
                <option value="packaged">Packaged Food</option>
                <option value="fruits">Fruits & Vegetables</option>
                <option value="bakery">Bakery Items</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Weight className="w-4 h-4 mr-2 text-green-600" />
                Quantity (Approx)
              </label>
              <input
                type="text"
                name="quantity"
                value={foodData.quantity}
                onChange={handleChange}
                placeholder="e.g. 5 kg or 10 portions"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-600" />
              Expiry Date / Time
            </label>
            <input
              type="datetime-local"
              name="expiry"
              value={foodData.expiry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
              required
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-green-100"
            >
              Next Step
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
