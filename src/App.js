import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import SelectionPage from './pages/SelectionPage';
import FoodDetailsPage from './pages/FoodDetailsPage';
import UploadImagePage from './pages/UploadImagePage';
import QualityCheckPage from './pages/QualityCheckPage';
import ResultPage from './pages/ResultPage';
import VolunteerPage from './pages/VolunteerPage';
import ReceiverPage from './pages/ReceiverPage';
import FoodFeedPage from './pages/FoodFeedPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [foodData, setFoodData] = useState({
    name: '',
    category: '',
    quantity: '',
    expiry: '',
    image: null,
    qualityResult: null
  });

  const [volunteers, setVolunteers] = useState([]);
  const [receivers, setReceivers] = useState([]);
  const [foodList, setFoodList] = useState([]);

  const updateFoodData = (newData) => {
    setFoodData(prev => ({ ...prev, ...newData }));
  };

  const addVolunteer = (volunteer) => {
    setVolunteers(prev => [...prev, volunteer]);
  };

  const addReceiver = (receiver) => {
    setReceivers(prev => [...prev, receiver]);
  };

  const handleFinalSubmit = () => {
    if (foodData.qualityResult === 'safe') {
      const newFoodItem = {
        ...foodData,
        id: Date.now(),
        donor: 'Community Donor'
      };
      setFoodList(prev => [newFoodItem, ...prev]);
      setFoodData({
        name: '',
        category: '',
        quantity: '',
        expiry: '',
        image: null,
        qualityResult: null
      });
    }
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/select" element={<SelectionPage />} />
          <Route 
            path="/details" 
            element={<FoodDetailsPage foodData={foodData} updateFoodData={updateFoodData} />} 
          />
          <Route 
            path="/upload" 
            element={<UploadImagePage foodData={foodData} updateFoodData={updateFoodData} />} 
          />
          <Route 
            path="/check" 
            element={<QualityCheckPage foodData={foodData} updateFoodData={updateFoodData} />} 
          />
          <Route 
            path="/result" 
            element={<ResultPage foodData={foodData} updateFoodData={updateFoodData} onSubmit={handleFinalSubmit} />} 
          />
          <Route 
            path="/volunteer-reg" 
            element={<VolunteerPage addVolunteer={addVolunteer} />} 
          />
          <Route 
            path="/receiver-reg" 
            element={<ReceiverPage addReceiver={addReceiver} />} 
          />
          <Route 
            path="/food-feed" 
            element={<FoodFeedPage foodList={foodList} />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
