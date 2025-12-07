import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import certi1 from "../../Assets/ycLcerti.jpeg"
import certi2 from "../../Assets/ycRcerti.jpg"
import certi3 from "../../Assets/certi3.jpg";
import meditation from "../../Assets/meditation.png";
import "./Second.css";

function Second() {
  // Certificate data array - easily add more certificates here
  const certificates = [
    {
      id: 1,
      title: "Advance Ashtanga",
      image: certi1,
      description: "I have completed '300 hour' Advance Ashtanga and Vinyasa Flow yoga level 2 teacher training as per guidelines & standards set by Yoga Alliance."
    },
    {
      id: 2,
      title: "Prenatal Yoga",
      image: certi2,
      description: "I have completed '85 hours' Prenatal yoga teacher training course from Subh yoga foundation in Rishikesh."
    },
    {
      id: 3,
      title: "Sangam Patra",
      image: certi3,
      description: "I organized and led a community yoga event on International Yoga Day, bringing together more than 10 participants in a celebration of wellness."
    },
  ];

  const [openStates, setOpenStates] = useState(
    certificates.reduce((acc, cert) => ({ ...acc, [cert.id]: false }), {})
  );

  const boxAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const toggleCertificate = (id) => {
    setOpenStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='secbody' id='secpage'>
      <div className='Tagline-box'>
        <line className='Tagline'>" Yoga is a skill in action "</line>
      </div>

      <section className='firstsection'>
        {certificates.map((cert) => (
          <motion.div 
            key={cert.id}
            layout 
            className='firstimg' 
            onClick={() => toggleCertificate(cert.id)}
          >
            {!openStates[cert.id] && (
              <motion.h2>{cert.title}</motion.h2>
            )}
            <motion.img className="imgcerti" src={cert.image} alt={cert.title} />
            {openStates[cert.id] && (
              <motion.div {...boxAnimation}>
                <p>{cert.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>

      <section 
        className="certiLine" 
        ref={myRef}
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s 0.5s",
        }}
      >
        These certifications are from accredited schools and programs,
        and they have prepared me to teach yoga safely and effectively.
        I am confident that I can help you reach your yoga goals.
        <img className="meditation" src={meditation} alt="" />
      </section>
    </div>
  );
}

export default Second;