import React from 'react';
import {FaPhoneAlt,FaInstagramSquare,FaYoutube,FaFacebookSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import './Forth.css';
function Forth() {
  return (
    <div className='forthbody' id='frtpage'>
      <section className='followmain'>
             <header className='conhead'><strong>Contact</strong> &nbsp;&nbsp; and &nbsp;&nbsp; <strong>Follow</strong></header>
             <section className='confolbox'>

              <div className='conbox'>
              <ul>
                <li><FaPhoneAlt className='icon'/>&nbsp; +91-6263757605</li>
                <li><a href='mailto:pawarchetna0808@gmail.com' target="_blank" rel="noopener noreferrer"><MdEmail className='icon'/>&nbsp;  chetna.pawar@gmail.com</a></li>
              </ul>
             </div>
             <div className='folbox'>
              <ul>
                <li className='social'><a href='https://www.instagram.com/yog.chetna/' target="_blank" rel="noopener noreferrer"><FaInstagramSquare className='icon'/>&nbsp; Instagram</a></li>
                <li className='social'><a href='https://www.facebook.com/chetna.pawar' target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='icon'/>&nbsp; Facebook</a></li>
                <li className='social'><a href='https://www.youtube.com/@yogchetna' target="_blank" rel="noopener noreferrer"><FaYoutube className='icon'/>&nbsp; Youtube</a></li>
              </ul>
             </div>
             </section>
             
      </section>
    </div>
  )
}

export default Forth