import React, { useEffect, useState } from "react";
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
        <div className="top-btn" onClick={goToBtn}>
         
          <FaChevronUp className="topicon"/>
          
        </div>
      )}
    </div>
  );
};
export default GoToTop;