import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CriminalRecord from './pages/CriminalRecord';
import EducationRecord from './pages/EducationRecord';
import HealthRecord from './pages/HealthRecord';
import Organizations from './pages/Organizations';
import DocumentServices from './pages/DocumentServices';
import Universities from "./pages/Universities";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/criminal_record" element={<CriminalRecord />} />
        <Route path="/education_record" element={<EducationRecord />} />
        <Route path="/health_record" element={<HealthRecord />} />
        <Route path="/document_services" element={<DocumentServices />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/universities" element={<Universities />} />
      </Routes>
    </div>
  );
}

export default App;
