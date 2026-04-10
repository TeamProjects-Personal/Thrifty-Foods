import React from 'react';
import { Utensils, Calendar, Weight, MapPin, Search, Filter } from 'lucide-react';

const FoodFeedPage = ({ foodList }) => {
  // Mock initial data if list is empty
  const displayList = foodList.length > 0 ? foodList : [
    {
      id: 1,
      name: "Fresh Veggie Mix",
      category: "raw",
      quantity: "15 kg",
      expiry: "2026-04-10T18:00",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400",
      donor: "Green Grocers"
    },
    {
      id: 2,
      name: "Bakery Assortment",
      category: "bakery",
      quantity: "25 portions",
      expiry: "2026-04-09T22:00",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400",
      donor: "Daily Bakes"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 mb-2">Available Food</h1>
          <p className="text-gray-600">Surplus food available for collection by registered receivers.</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search food..." 
              className="pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 outline-none w-full md:w-64"
            />
          </div>
          <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayList.map((item, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
            <div className="relative h-48">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 uppercase tracking-wider">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 text-sm">
                  <Weight className="w-4 h-4 mr-3 text-green-600" />
                  <span>{item.quantity}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-3 text-green-600" />
                  <span>Expires: {new Date(item.expiry).toLocaleString()}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-green-600" />
                  <span>Donor: {item.donor || 'Community Donor'}</span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95">
                Request Pickup
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {displayList.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <Utensils className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400">No food listed yet</h3>
          <p className="text-gray-500">Check back later for available donations.</p>
        </div>
      )}
    </div>
  );
};

export default FoodFeedPage;
