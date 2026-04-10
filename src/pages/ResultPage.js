import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertTriangle, RefreshCw, ArrowRight, Heart, Edit3, XCircle } from 'lucide-react';

const ResultPage = ({ foodData, updateFoodData, onSubmit }) => {
  const navigate = useNavigate();
  const isSafe = foodData.qualityResult === 'safe';

  const handleReset = () => {
    if (isSafe && onSubmit) {
      onSubmit();
      navigate('/food-feed');
    } else {
      updateFoodData({
        name: '',
        category: '',
        quantity: '',
        expiry: '',
        image: null,
        qualityResult: null
      });
      navigate('/');
    }
  };

  const handleEdit = () => {
    navigate('/details');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <div className={`bg-white rounded-3xl shadow-2xl p-12 border-t-8 flex flex-col items-center text-center ${
        isSafe ? 'border-green-500' : 'border-amber-500'
      }`}>
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 ${
          isSafe ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'
        }`}>
          {isSafe ? (
            <CheckCircle className="w-12 h-12" />
          ) : (
            <AlertTriangle className="w-12 h-12" />
          )}
        </div>

        <h2 className="text-4xl font-black text-gray-900 mb-4">
          {isSafe ? 'Food is Safe!' : 'Action Required'}
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 max-w-sm">
          {isSafe 
            ? "Your donation meets our quality standards. You can now proceed to list it on the platform." 
            : "We've detected potential quality issues. Please review the details or reconsider the donation."}
        </p>

        {isSafe ? (
          <div className="w-full space-y-4">
            <button
              onClick={handleReset}
              className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all flex items-center justify-center shadow-lg shadow-green-100 transform hover:scale-[1.02]"
            >
              Proceed & Submit
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
            <div className="flex items-center justify-center text-green-600 font-medium py-2">
              <Heart className="w-4 h-4 mr-2 fill-current" />
              <span>Thank you for your contribution!</span>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleEdit}
                className="bg-amber-50 text-amber-700 py-4 rounded-2xl font-bold hover:bg-amber-100 transition-all flex items-center justify-center"
              >
                <Edit3 className="mr-2 w-5 h-5" />
                Edit Details
              </button>
              <button
                onClick={handleReset}
                className="bg-red-50 text-red-700 py-4 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center"
              >
                <XCircle className="mr-2 w-5 h-5" />
                Reject
              </button>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-4 text-gray-500 font-semibold hover:text-gray-700 transition-all flex items-center justify-center"
            >
              <RefreshCw className="mr-2 w-4 h-4" />
              Start Over
            </button>
          </div>
        )}

        <div className="mt-12 p-6 bg-gray-50 rounded-2xl w-full text-left border border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Summary</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Food Item:</span>
              <span className="font-bold text-gray-800">{foodData.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Quantity:</span>
              <span className="font-bold text-gray-800">{foodData.quantity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Verification:</span>
              <span className={`font-bold ${isSafe ? 'text-green-600' : 'text-amber-600'}`}>
                {isSafe ? 'PASSED' : 'FLAGGED'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
