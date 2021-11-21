import react from 'react';
import Nav from './components/nav';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/shop';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/about" exact component={<About/>} />
        <Route path="/shop" exact component={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
