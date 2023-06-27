import React from 'react'
import "./Fifth.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail, AiOutlineYoutube } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Fifth() {
  return (<>
    <div className='fifthbody'>
       <div className='fbodymain'>
        <header style={{textAlign:"center", fontSize:"3.1vh", fontWeight:"500"}}>Connect with us</header>
        <div className='social-icons'>
           <a href='https://wa.me/916268383459' target="_blank" rel="noopener noreferrer" style={{color:"black"}}><div><FaWhatsapp /></div></a>
           <a href='mailto:yogchetna17@gmail.com' target="_blank" rel="noopener noreferrer" style={{color:"black"}}><div><AiOutlineMail /></div></a>
           <a href='https://www.instagram.com/yog.chetna/' target="_blank" rel="noopener noreferrer" style={{color:"black"}}><div><FaInstagram /></div></a>
           <a href='https://www.youtube.com/@yogchetna' target="_blank" rel="noopener noreferrer" style={{color:"black"}}><div><AiOutlineYoutube /></div></a>
        </div>
        <div className='signup'>
          <div style={{width:"30%", display:"flex", justifyContent:"center"}}>
           <IoLocationSharp style={{position:"relative", top:"2px"}} />Hall No. 201, 53-C, Indrapuri, Bhopal (M.P.)</div>
           <div style={{width:"30%", display:"flex", justifyContent:"center"}}><Link to="/Contact" style={{textDecoration:"none", color:"black"}}>Sign up to our service!</Link></div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Fifth