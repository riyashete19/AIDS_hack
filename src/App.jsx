import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Documentinfo from './pages/document_info'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/document" element={<Documentinfo />} />
      </Routes>
      </Router>
      
  );
}

export default App;
