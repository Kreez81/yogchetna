import React from 'react'
import "./Home.css";
import profile from "../../Assets/profileyc.jpg"
import profilesq from "../../Assets/profilesq.jpg"
function Home() {
  return (
    <div className='Firstbody'>
          <section className='mainpicsq'>
          <img src={profile} alt='profile' className='profpic'/></section>
          <div className='containerdiv'>
          <section className='picsq'><img src={profilesq} alt='profilesq' className='profpicsq'/></section>
          
          <text className='Fsecright' >
          Hello,<br/>
          My name is <span className='name'>Chetna Pawar.</span><br/>
          I am a Certified Yoga<br/> Instructor.<br/>
          </text>
          </div>
          
         <div className='imgcloud'></div>
    </div>
  )
}
export default Home