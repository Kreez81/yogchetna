import React, { useRef } from 'react';
import './Third.css';
import img1 from "../../Assets/class/img1.jpg";
import img2 from "../../Assets/class/img2.jpg";
import img3 from "../../Assets/class/img3.jpg";
import img4 from "../../Assets/class/img4.jpg";
import img5 from "../../Assets/class/img5.jpg";
import img6 from "../../Assets/class/img6.jpg";
import yogapose from "../../Assets/buddhist-yoga-pose.png";
import { useInView } from 'framer-motion';

function Third() {

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  return (
    <div className='thrdbody'>
      <div className='Classes-head'>Join my classes</div>
      <div id="container">
        <div class="photobanner">
          <img class="first" src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
      <div className='Classtext' ref={myRef}
        style={{
          transform: isInView ? "none" : "translateY(60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s  0.5s ",
          transitionDelay: 1500,
        }}
      >
        <text className='Ctextbox'>
          Join my yoga classes and experience the benefits of yoga for yourself! <br />
          These classes are designed for all levels, so whether you're a beginner or a seasoned pro, you're sure to find a class that's right for you.<br />
          Our classes are held in a relaxed and welcoming environment, so you can relax and enjoy your practice.<br />
          I offer both online and offline classes, so you can choose the format that best suits you.<br />
          Contact today and start your journey to a healthier, happier you!<br />
          <img src={yogapose} alt='yog' className='yogapose' />
        </text>
      </div>
    </div>
  )
}
export default Third;