import React from 'react'
import {FaBars} from "react-icons/fa";
import './Navcss.css';
function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='Navbody'>
        <button onClick={handleReload} className='NameH'>Yogchetna</button>
        <FaBars className='dropbutt'/>
        <text className='Contact'>Contact</text>
        <text className='About'>About</text>
    </div>
  )
}
export default Navbar