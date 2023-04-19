import React from 'react';
import { Route,Routes, BrowserRouter} from "react-router-dom";
import Login from './pages/Login';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
      
  );
}

export default App;
