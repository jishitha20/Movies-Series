import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import SearchComponent from './components/SearchComponent.js';
import Show from './pages/Show.js';
import Favourites from './components/Favourites.js';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<SearchComponent/>}/>
      <Route path="/:imdbID" element={<Show/>}/>
      <Route path="/favourites" element={<Favourites/>}/>

    </Routes>
  )
}

export default App;