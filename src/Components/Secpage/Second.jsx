import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import ycLcerti from "../../Assets/ycLcerti.jpeg"
import ycRcerti from "../../Assets/ycRcerti.jpg"
import meditation from "../../Assets/meditation.png";
import "./Second.css";

function Second() {

  const [isLOpen, setIsLOpen] = useState(false);
  const [isROpen, setIsROpen] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [isTitle2, setIsTitle2] = useState(false);
  const boxAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  }
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });


  return (
    <div className='secbody' id='secpage'>
      {/* <img src={om} className="omimg" alt="logo" /> */}
      <div className='Tagline-box'>
        <line className='Tagline'>" Yoga is a skill in action "</line>
      </div>


      <section className='firstsection'>
        <motion.image layout className='firstimg' onClick={() => setIsLOpen(!isLOpen) > setIsTitle(!isTitle)}>

          {!isTitle && <motion.h2 >Advance Ashtanga</motion.h2>}
          <motion.img className="imgcerti" src={ycLcerti} alt="" />
          {isLOpen && (<motion.div {...boxAnimation} >
            <p> I have completed '300 hour' Advance Ashtanga and Vinyasa Flow yoga level 2 teacher training as per guidelines & standards set by Yoga Alliance.</p>
          </motion.div>)}

        </motion.image>
        <motion.image layout className='firstimg' onClick={() => setIsROpen(!isROpen) > setIsTitle2(!isTitle2)}>

          {!isTitle2 && <motion.h2 >Prenatal Yoga</motion.h2>}
          <motion.img className="imgcerti" src={ycRcerti} alt="" />
          {isROpen && (<motion.div {...boxAnimation} >
            <p> I have completed '85 hours' Prenatal yoga teacher training course from Subh yoga foundation in Rishikesh.</p>
          </motion.div>)}

        </motion.image>
      </section>


      <section className="certiLine" ref={myRef}
        style={{
          transform: isInView ? "none" : "translateY(60px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s  0.5s ",
          transitionDelay: 1500,
        }}
      >
        These certifications are from accredited schools and programs,
        and they have prepared me to teach yoga safely and effectively.
        I am confident that I can help you reach your yoga goals.
        <img className="meditation" src={meditation} alt="" /></section>
    </div>
  )
}
export default Second