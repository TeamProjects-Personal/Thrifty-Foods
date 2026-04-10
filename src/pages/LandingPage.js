import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Users, Heart } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Fighting Hunger, <span className="text-green-600">Reducing Waste</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Join the movement to redistribute surplus food safely. Connect restaurants, donors, NGOs, volunteers, and shelters on one sustainable platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/select" className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="#about" className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-colors">
                  Learn More
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Meals Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">1,200+</div>
                  <div className="text-sm text-gray-600">Partners</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">30+</div>
                  <div className="text-sm text-gray-600">Cities</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1744870416768-25139537d856?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZvb2QlMjBkb25hdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzI5NDE0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Food donation" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block border border-green-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Food Safety Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How THRIFTY FOODS Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A simple, safe, and sustainable solution to connect surplus food with those who need it most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Donate Surplus Food</h3>
              <p className="text-gray-600">Restaurants, events, and individuals list available surplus food on our platform with details about quantity and pickup times.</p>
            </div>
            <div className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect & Coordinate</h3>
              <p className="text-gray-600">NGOs, volunteers, and shelters receive notifications and coordinate safe pickup and delivery of donated food.</p>
            </div>
            <div className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <MapPin className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Feed Communities</h3>
              <p className="text-gray-600">Surplus food reaches those in need quickly and safely, reducing waste while fighting hunger in local communities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
