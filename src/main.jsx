import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Counseling from './Counseling.jsx'
import Allyoga from './Allyoga.jsx'
import FAQ from './FAQ.jsx'
import Register from './Register.jsx'




import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/About" element={<About />} />
        <Route path="/Counseling" element={<Counseling />} />
        <Route path="/Allyoga" element={<Allyoga />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Register" element={<Register />} />



       

      </Routes>
    </BrowserRouter>
      </StrictMode>,
)
