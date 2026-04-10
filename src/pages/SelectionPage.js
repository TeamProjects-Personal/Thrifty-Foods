import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, HandHelping, Users, ChevronRight } from 'lucide-react';

const SelectionPage = () => {
  const navigate = useNavigate();

  const options = [
    {
      id: 'donor',
      title: 'I Want to Donate',
      description: 'Restaurant, event organizer, or individual with surplus food',
      icon: <Heart className="w-8 h-8 text-white" />,
      color: 'bg-blue-500',
      path: '/details'
    },
    {
      id: 'receiver',
      title: 'I Need Food',
      description: 'Shelter, food bank, or community organization',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'bg-green-500',
      path: '/receiver-reg'
    },
    {
      id: 'volunteer',
      title: 'I Want to Volunteer',
      description: 'Help with food pickup and delivery logistics',
      icon: <HandHelping className="w-8 h-8 text-white" />,
      color: 'bg-yellow-500',
      path: '/volunteer-reg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Join THRIFTY FOODS</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose how you'd like to participate in reducing food waste and fighting hunger in your community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => navigate(option.path)}
            className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all hover:scale-105 hover:shadow-2xl text-left flex flex-col items-start"
          >
            <div className={`${option.color} p-4 rounded-2xl mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
              {option.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
            <p className="text-gray-600 mb-8 flex-1">{option.description}</p>
            <div className="flex items-center text-green-600 font-bold">
              Get Started
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How Would You Like to Help?</h2>
        <p className="text-gray-500">Select your role to get started</p>
      </div>
    </div>
  );
};

export default SelectionPage;
