import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme  from './components/Aboutme';
import Services from './components/Services';
import Studies from './components/Studies';
import Expertise from './components/Skills-Experience';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col ">
        <Header />
        <Introduction/>
        <Aboutme/>
        <Services/>
        <Studies/>
        <Expertise/>
      </div>
    </BrowserRouter>

  );
}

export default App;
