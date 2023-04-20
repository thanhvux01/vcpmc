import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import Login from './pages/Login';
import Recover from './pages/Recover';
import Contract from './pages/Contract';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>} />
         <Route path="/recover" element={<Recover/>} />
         <Route path="/" element={<Contract/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
      
  );
}

export default App;
