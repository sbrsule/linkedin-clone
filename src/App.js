import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomeFeed from './components/HomeFeed'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <HomeFeed></HomeFeed>
    </div>
  );
}

export default App;
