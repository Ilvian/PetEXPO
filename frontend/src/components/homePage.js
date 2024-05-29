import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Animal Expo</h1>
      <div className="tabs">
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/birds">Birds</Link>
      </div>
    </div>
  );
};

export default HomePage;
