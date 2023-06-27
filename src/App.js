import './App.css';
import Appmain from './Appmain';
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from './Components/Contactpage/Contact';

function App() {
  const location = useLocation();

  return (
    <div className='Appbody'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Appmain />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
