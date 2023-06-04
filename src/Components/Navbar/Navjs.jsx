import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
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
        <FaBars className='dropbutt' onClick={() => setOpenDropdown((prev) => !prev)} />
        <AnimatePresence>
          {openDropdown &&
            <motion.div
              key="Box"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: .5, ease: "easeInOut" }}
              // exit={}
              className='dropdown'>
              <ul>
                <li><Link to='secpage' smooth={true} duration={800} onClick={() => setOpenDropdown((prev) => !prev)} >About</Link></li>
                <li><Link to='frtpage' smooth={true} duration={1000} onClick={() => setOpenDropdown((prev) => !prev)}>Contact</Link></li>
              </ul>
            </motion.div>
          }
        </AnimatePresence>
      </>
      <text className='Contact'><Link to='frtpage' smooth={true} duration={1200}>Contact</Link></text>
      <text className='About'><Link to='secpage' smooth={true} duration={800} >About</Link></text>
    </div>
  )
}
export default Navbar