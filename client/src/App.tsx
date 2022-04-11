import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AboutUs from './views/AboutUs/about.us';
import Home from './views/Home/home';
import Service from './views/Service/service';
import Contact from './views/Contact/contact';
import Team from './views/Team/team';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/team" element={<Team />}></Route>
      </Routes>
    </div>
  );
}

export default App;
