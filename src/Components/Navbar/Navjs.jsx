import React from 'react'
import { Link } from 'react-scroll';
import {FaBars} from "react-icons/fa";
import './Navcss.css';
function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='Navbody'>
        <button onClick={handleReload} className='NameH'>Yogchetna</button>
        <>
        <FaBars className='dropbutt'/>
        <div className='dropdown'>
              <ul>
                <li>About</li>
                <li>Contact</li>
              </ul>
        </div>
        </>
        <text className='Contact'>Contact</text>
        <text className='About'><Link to='secpage' smooth={true} duration={800} >About</Link></text>
    </div>
  )
}
export default Navbar