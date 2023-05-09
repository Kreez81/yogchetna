import React, { useState } from 'react'
import { Link } from 'react-scroll';
import {FaBars} from "react-icons/fa";
import './Navcss.css';
function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className='Navbody'>
        <button onClick={handleReload} className='NameH'>Yogchetna</button>
        <>
        <FaBars className='dropbutt' onClick={() => setOpenDropdown((prev) => !prev)}/>
        {
          openDropdown && 
          <div className='dropdown'>
              <ul>
                <li><Link to='secpage' smooth={true} duration={800} onClick={() => setOpenDropdown((prev) => !prev)} >About</Link></li>
                <li><Link to='frtpage' smooth={true} duration={1000} onClick={() => setOpenDropdown((prev) => !prev)}>Contact</Link></li>
              </ul>
        </div>
          
        }
        
        </>
        <text className='Contact'><Link to='frtpage' smooth={true} duration={800}>Contact</Link></text>
        <text className='About'><Link to='secpage' smooth={true} duration={1200} >About</Link></text>
    </div>
  )
}
export default Navbar