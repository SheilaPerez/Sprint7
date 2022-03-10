import React from 'react';
import Presupost from './components/presupost';
import Inici from './components/inici';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() { 
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Inici />}></Route>
          <Route path="/presupost" element={<Presupost />}></Route>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
