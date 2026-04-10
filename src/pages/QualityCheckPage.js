import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Search, ShieldCheck, ShieldAlert, Cpu } from 'lucide-react';

const QualityCheckPage = ({ foodData, updateFoodData }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('analyzing'); // analyzing, finalizing
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const simulation = setTimeout(() => {
      setStatus('finalizing');
      setTimeout(() => {
        const isSafe = Math.random() > 0.3; // 70% chance of being safe
        updateFoodData({ qualityResult: isSafe ? 'safe' : 'unsafe' });
        navigate('/result');
      }, 1500);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(simulation);
    };
  }, [navigate, updateFoodData]);

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl p-12 border border-green-100 flex flex-col items-center text-center">
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full border-4 border-green-100 flex items-center justify-center relative">
            <div 
              className="absolute inset-0 rounded-full border-4 border-green-500 transition-all duration-300" 
              style={{ 
                clipPath: `inset(0 0 0 0)`, 
                maskImage: `conic-gradient(black ${progress}%, transparent 0)` 
              }}
            />
            {status === 'analyzing' ? (
              <Search className="w-12 h-12 text-green-600 animate-pulse" />
            ) : (
              <ShieldCheck className="w-12 h-12 text-green-600" />
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-green-500 p-2 rounded-lg shadow-lg">
            <Cpu className="w-5 h-5 text-white animate-spin-slow" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {status === 'analyzing' ? 'Analyzing Food Quality...' : 'Generating Report...'}
        </h2>
        <p className="text-gray-600 mb-8 max-w-sm">
          Our AI-powered system is verifying the image and details to ensure food safety standards.
        </p>

        <div className="w-full max-w-md bg-gray-100 h-3 rounded-full overflow-hidden mb-6">
          <div 
            className="h-full bg-green-500 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center space-x-3 text-sm font-medium text-gray-500">
          <Loader2 className="w-4 h-4 animate-spin text-green-600" />
          <span>{progress}% Completed</span>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 w-full">
          <div className="bg-green-50 p-4 rounded-2xl flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 text-green-600 mb-2" />
            <span className="text-xs font-bold text-gray-700 uppercase">Visual Verification</span>
          </div>
          <div className="bg-green-50 p-4 rounded-2xl flex flex-col items-center">
            <ShieldAlert className="w-6 h-6 text-green-600 mb-2" />
            <span className="text-xs font-bold text-gray-700 uppercase">Risk Assessment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityCheckPage;
