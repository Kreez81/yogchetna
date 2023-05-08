import React from 'react'
import "./Second.css";
// import om from "../../Assets/om.png";
function Second() {
  return (
    <div className='secbody' id='secpage'>
       {/* <img src={om} className="omimg" alt="logo" /> */}
       <div className='Tagline-box'>
        <line className='Tagline'>"Yoga is a skill in action"</line>
       </div>
       <section className='firstsection'>
         <image className='firstimg'>image</image>
         <p className='imgtext1'><>Certificates :</><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sequi dolor repudiandae optio adipisci hic omnis error enim asperiores accusamus. Quod sequi a hic rem asperiores, unde eum maxime iusto!</p>
       </section>
    </div>
  )
}
export default Second