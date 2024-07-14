import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header'; // Import your Header component
import Footer from './components/footer';
import AddBlogPost from './components/AddBlogPost';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div>
      <Header/>
      <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/add" element={<AddBlogPost />} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/login" component={<LoginPage/>} /> 
                </Routes>
        
        
        
       <Footer/> 
      </div>
      </Router>
  );
}

export default App;
