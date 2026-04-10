import React from 'react';
import Navbar from './Navbar';
import StepIndicator from './StepIndicator';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {!isLanding && (
        <div className="max-w-4xl mx-auto w-full px-4 pt-8">
          <StepIndicator currentPath={location.pathname} />
        </div>
      )}
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 THRIFTY FOODS. Fighting hunger, reducing waste.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
