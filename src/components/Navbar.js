import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">TF</span>
            </div>
            <span className="text-xl font-bold text-gray-900">THRIFTY FOODS</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            <Link to="/select" className="text-gray-700 hover:text-green-600 transition-colors">Get Started</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            <Link to="/select" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">Join Now</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
