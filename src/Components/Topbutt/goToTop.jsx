import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {FaChevronUp} from "react-icons/fa";
import "./goToTop.css";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    
    <div className="Wapperbtn" >
      {isVisible && (
        <motion.div className="top-btn" onClick={goToBtn}
        initial={{ y: 55, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ ease:"linear" }}
        >
         
          <FaChevronUp className="topicon"/>
          
        </motion.div>
      )}
    </div>
  );
};
export default GoToTop;