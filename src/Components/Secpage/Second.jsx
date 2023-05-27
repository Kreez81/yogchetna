import React from 'react'
import "./Second.css";
// import om from "../../Assets/om.png";
function Second() {
  return (
    <div className='secbody' id='secpage'>
       {/* <img src={om} className="omimg" alt="logo" /> */}
       <div className='Tagline-box'>
        <line className='Tagline'>" Yoga is a skill in action "</line>
       </div>
       <section className='firstsection'>
         <image className='firstimg'></image>
         <p className='imgtext1'><strong>Yoga Teacher Certification -</strong><br/>
            1.&nbsp; I have completed '300 hour' Advance Ashtanga and Vinyasa Flow yoga level 2 teacher training as per guidelines & standards set by Yoga Alliance.<br/><br/>
            2.&nbsp; I have completed '85 hours' Prenatal yoga teacher training course from Subh yoga foundation in Rishikesh.
         </p> 
       </section>
    </div>
  )
}
export default Second