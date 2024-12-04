import React, { useState } from 'react';
import IntroductionPage from './pages/IntroductionPage';
import FunctionalitiesPage from './pages/FunctionalitiesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('introduction');

  const navigateTo = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header />
      {currentPage === 'introduction' && <IntroductionPage navigateTo={navigateTo} />}
      {currentPage === 'functionalities' && <FunctionalitiesPage navigateTo={navigateTo} />}
      <Footer />
    </div>
  );
}

export default App;
