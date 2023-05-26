import React from 'react';
import './Third.css';
import img1 from "../../Assets/class/img1.jpg";
import img2 from "../../Assets/class/img2.jpg";
import img3 from "../../Assets/class/img3.jpg";
import img4 from "../../Assets/class/img4.jpg";
import img5 from "../../Assets/class/img5.jpg";
import img6 from "../../Assets/class/img6.jpg";

function Third() {
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
      <div className='Classtext'>
          <text className='Ctextbox'>
            <ul>
              <li>I take both online and offline yoga classes.</li>
              <li>I take both online and offline yoga classes.</li>
              <li>I take both online and offline yoga classes.</li>
            </ul>
            {/* I take both online and offline yoga classes. */}
          </text>
      </div>
    </div>
  )
}
export default Third;