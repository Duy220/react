import React from 'react';
import './IntroductionPage.css';

const IntroductionPage = ({ navigateTo }) => (
  <div className="introduction-page">
    <h1>Welcome to Cross-DB Systems Benchmarking</h1>
    <p>
      This tool helps evaluate and compare the performance of multiple database systems.
      Discover how our solution makes benchmarking seamless and insightful.
    </p>
    <button onClick={() => navigateTo('functionalities')} className="cta-button">
      Get Started
    </button>
    <div className="statistics">
      <p>10+ Databases Benchmarked</p>
      <p>500+ Queries Executed</p>
      <p>100% User Satisfaction</p>
    </div>
  </div>
);

export default IntroductionPage;
