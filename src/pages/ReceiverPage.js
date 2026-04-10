import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, ChevronRight, Users } from 'lucide-react';

const ReceiverPage = ({ addReceiver }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    phone: '',
    address: '',
    capacity: 'medium'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReceiver(formData);
    alert('Registration Successful! You can now access the food feed.');
    navigate('/food-feed');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20 pt-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
        <div className="bg-green-100 p-4 rounded-2xl w-fit mb-6">
          <Users className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Receiver Registration</h2>
        <p className="text-gray-600 mb-8">Register your organization to receive food donations.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <Building2 className="w-4 h-4 mr-2 text-green-600" />
              Organization Name
            </label>
            <input
              type="text"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
              placeholder="e.g. Hope Shelter"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-green-600" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hope@example.org"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-600" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-green-600" />
              Delivery Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Full address of the shelter/center"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Storage Capacity</label>
            <select
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-white"
            >
              <option value="small">Small (up to 20 meals)</option>
              <option value="medium">Medium (20-100 meals)</option>
              <option value="large">Large (100+ meals)</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-green-100"
            >
              Access Food Feed
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReceiverPage;
