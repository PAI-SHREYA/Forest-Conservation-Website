import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import ReportForm from './components/Report';
import ExcelDisplay from './components/SDG';
// import Home from './components/HomePage';
import Community from './components/Community';
import FAQ from './components/FaqItem';
// import App from './components/Conway';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'
import Conway from './components/Conway';


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/report" element={<ReportForm />} />
          <Route path="/sdg" element={<ExcelDisplay />} />
          <Route path="/conway" element={<Conway />} />

        </Routes>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
};

export default App;
