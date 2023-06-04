import { motion } from "framer-motion";
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
          
          <motion.text className='Fsecright'
          initial = {{ y: 45, opacity: 0 }}
          animate = {{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          >
          Hello,<br/>
          My name is <span className='name'>Chetna Pawar.</span><br/>
          I am a Certified Yoga<br/> Instructor.<br/>
          </motion.text>
          </div>
          
         <div className='imgcloud'></div>
    </div>
  )
}
export default Home