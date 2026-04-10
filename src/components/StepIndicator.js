import React from 'react';

const StepIndicator = ({ currentPath }) => {
  const donorSteps = [
    { label: 'Select Role', path: '/select' },
    { label: 'Food Details', path: '/details' },
    { label: 'Upload Image', path: '/upload' },
    { label: 'Quality Check', path: '/check' },
    { label: 'Result', path: '/result' }
  ];

  const volunteerSteps = [
    { label: 'Select Role', path: '/select' },
    { label: 'Registration', path: '/volunteer-reg' }
  ];

  const receiverSteps = [
    { label: 'Select Role', path: '/select' },
    { label: 'Registration', path: '/receiver-reg' },
    { label: 'Food Feed', path: '/food-feed' }
  ];

  let steps = donorSteps;
  if (currentPath === '/volunteer-reg') steps = volunteerSteps;
  if (currentPath === '/receiver-reg' || currentPath === '/food-feed') steps = receiverSteps;

  const currentStepIndex = steps.findIndex(step => step.path === currentPath);
  if (currentStepIndex === -1) return null;

  return (
    <div className="flex justify-between items-center w-full mb-12 relative px-4">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0" />
      {/* Active Progress Line */}
      <div 
        className="absolute top-1/2 left-0 h-1 bg-green-500 -translate-y-1/2 z-0 transition-all duration-500" 
        style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
      />

      {steps.map((step, index) => {
        const isActive = index <= currentStepIndex;
        const isCurrent = index === currentStepIndex;

        return (
          <div key={step.path} className="flex flex-col items-center relative z-10">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                isActive 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : 'bg-white border-gray-200 text-gray-400'
              } ${isCurrent ? 'ring-4 ring-green-100' : ''}`}
            >
              {index + 1}
            </div>
            <span className={`mt-2 text-xs font-medium ${isActive ? 'text-green-600' : 'text-gray-400'}`}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
