import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, MapPin, ChevronRight, HandHelping } from 'lucide-react';

const VolunteerPage = ({ addVolunteer }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    area: '',
    availability: 'weekends'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVolunteer(formData);
    alert('Registration Successful! Thank you for volunteering.');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20 pt-8">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-yellow-100">
        <div className="bg-yellow-100 p-4 rounded-2xl w-fit mb-6">
          <HandHelping className="w-8 h-8 text-yellow-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Volunteer Registration</h2>
        <p className="text-gray-600 mb-8">Join our logistics team to help transport surplus food.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <User className="w-4 h-4 mr-2 text-yellow-600" />
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-yellow-600" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Phone className="w-4 h-4 mr-2 text-yellow-600" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
              Preferred Service Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="e.g. South Kolhapur"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Availability</label>
            <select
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all outline-none bg-white"
            >
              <option value="weekends">Weekends Only</option>
              <option value="weekdays">Weekdays Only</option>
              <option value="evenings">Evenings Only</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all transform hover:scale-[1.02] flex items-center justify-center shadow-lg shadow-yellow-100"
            >
              Complete Registration
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPage;
