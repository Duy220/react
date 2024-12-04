import React from 'react';
import './FunctionalitiesPage.css';

const FunctionalitiesPage = ({ navigateTo }) => (
  <div className="functionalities-page">
    <h1>Benchmarking Functionalities</h1>
    <p>
      Here you can configure databases, run tests, and visualize results.
    </p>
    <div className="grid">
      <div className="card">Configure Databases</div>
      <div className="card">Run Tests</div>
      <div className="card">View Results</div>
    </div>
    <button onClick={() => navigateTo('introduction')} className="back-button">
      Back to Home
    </button>
  </div>
);

export default FunctionalitiesPage;
