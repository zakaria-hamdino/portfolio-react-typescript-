import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Aboutme  from './components/Aboutme';
import Services from './components/Services';

function App() {
  return (
    <div className="flex flex-col px-36">
      <Header/>
      <Introduction/>
      <Aboutme/>
      <Services/>
    </div>

  );
}

export default App;
