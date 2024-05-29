// HomePage.js
import React, { useState } from 'react';
import AnimalGallery from './AnimalGallery';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState('dogs');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <h1>Welcome to the Animal Expo</h1>
      <div className="tabs">
        <button onClick={() => handleTabClick('dogs')}>Dogs</button>
        <button onClick={() => handleTabClick('cats')}>Cats</button>
        <button onClick={() => handleTabClick('birds')}>Birds</button>
      </div>
      <AnimalGallery animalType={selectedTab} />
    </div>
  );
};

export default HomePage;
