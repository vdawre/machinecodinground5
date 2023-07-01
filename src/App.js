import React from "react";
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';
import SingleRecipie from "./components/SingleRecipie";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:rname' element={<SingleRecipie />} />
      </Routes>
    </div>
  );
}

export default App;
