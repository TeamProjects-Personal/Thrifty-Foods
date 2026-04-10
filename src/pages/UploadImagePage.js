import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Image as ImageIcon, X, ChevronRight, ChevronLeft } from 'lucide-react';

const UploadImagePage = ({ foodData, updateFoodData }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(foodData.image);
  const [selectedFile, setSelectedFile] = useState(null);   // ← New: store actual File

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);                    // Save raw File for upload

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        updateFoodData({ image: reader.result }); // keep base64 for preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        updateFoodData({ image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setPreview(null);
    setSelectedFile(null);
    updateFoodData({ image: null });
  };

  // ← Main function to send image to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload an image first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedFile);   // 'image' must match backend field name

      const response = await fetch('http://localhost:3000/detect-food', {   // Change port if needed
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      console.log("Prediction result:", result);

      // Save prediction result for next page
      updateFoodData({ 
        ...foodData,
        predictions: result.predictions 
      });

      navigate('/check');        // or wherever you want to go next

    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to analyze image. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload Food Image</h2>
        <p className="text-gray-600 mb-8">A clear photo helps us verify the quality of your donation.</p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Drag & Drop Area - Same as before */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => !preview && fileInputRef.current?.click()}
            className={`relative border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center transition-all cursor-pointer ${
              preview ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400 hover:bg-green-50/50'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {preview ? (
              <div className="relative w-full">
                <img
                  src={preview}
                  alt="Food preview"
                  className="w-full h-64 object-cover rounded-2xl shadow-md border-4 border-white"
                />
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); clearImage(); }}
                  className="absolute -top-3 -right-3 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full inline-flex mb-4">
                  <Upload className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drag and drop photo</h3>
                <p className="text-gray-500">or click to browse from your device</p>
                <div className="mt-6 inline-flex items-center text-green-600 font-semibold text-sm">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Supports JPG, PNG, WEBP
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate('/details')}
              className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center"
            >
              <ChevronLeft className="mr-2 w-5 h-5" />
              Back
            </button>

            <button
              type="submit"
              disabled={!preview}
              className={`flex-[2] py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-lg ${
                preview
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-100'
                  : 'bg-gray-300 text-white cursor-not-allowed shadow-none'
              }`}
            >
              Next Step
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadImagePage;