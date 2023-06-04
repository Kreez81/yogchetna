import './App.css';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from 'react';
import Navbar from "./Components/Navbar/Navjs";
import Home from './Components/Firstpage/Home';
import Second from './Components/Secpage/Second';
import Third from './Components/Thrdpage/Third';
import Forth from './Components/Contactpage/Forth';
import GoToTop from './Components/Topbutt/goToTop';
function App() {
  const ref = useRef(null);
  const options = {
    smooth: true,
    multiplier: .7,
    smartphone: {smooth:true,multiplier:2},
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
   <div className='Appbody' data-scroll-container ref={ref}>
   <Navbar/>
   <GoToTop/>
   <Home data-scroll-section />
   <Second data-scroll-section />
   <Third data-scroll-section />
   <Forth data-scroll-section />
   </div>
   </LocomotiveScrollProvider>
  );
}

export default App;
