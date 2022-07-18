import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Home from './components/Home';
import Aboutme  from './components/Aboutme';
import Services from './components/Services';
import Studies from './components/Studies';
import Expertise from './components/Skills-Experience';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col ">
        <Home/>
        <Aboutme/>
        <Services/>
        <Studies/>
        <Expertise/>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
