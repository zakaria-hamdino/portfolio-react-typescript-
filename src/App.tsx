import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="flex flex-col items-center	 ">
      <Header/>
      <Introduction/>
    </div>
  );
}

export default App;
