import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import SearchComponent from './components/SearchComponent.js';
import Show from './pages/Show.js';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<SearchComponent/>}/>
      <Route path="/:imdbID" element={<Show/>}/>

    </Routes>
  )
}

export default App;