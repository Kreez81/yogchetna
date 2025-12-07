import { FaExternalLinkAlt } from "react-icons/fa";
import medi2 from "../../Assets/meditation1.png";
import './Forth.css';
import { Link } from 'react-router-dom';
function Forth() {
  return (
    <div className='forthbody' id='frtpage'>
      <div className='Schbody'>
        <div className='timing-head'>Schedules and Timings</div>
        <section className='timing-body'>
          <div className='onofbody'>
            <header>online</header>
            <div>
              <br />
              Monday to Friday - 5 days in a week<br /><br />
              Can be on weekend if needed!<br />
              Timings will be negotiable<br />
              Preferred - Morning (6am ist - 10am ist)<br />
              Evening (6pm ist - 8pm ist)<br /><br />
              <Link to="/Contact" style={{color:"black", fontSize:"2vh"}}>Start now<FaExternalLinkAlt style={{height:"1.4vh", position:'relative', left:"2px"}}/></Link>
            </div>
          </div>
          <img src={medi2} alt='' className='medi2'/>
          <div className='onofbody'>
            <header>offline</header>
            <div>
              <br />
              Monday to Friday - 5 days in a week<br /><br />
              Timings will be negotiable<br />
              Preferred timings -<br/> Morning (6am ist - 10am ist)<br />
              Evening (6pm ist - 8pm ist)<br /><br />
              <Link to="/Contact" style={{color:"black", fontSize:"2vh"}}>Contact for more info!<FaExternalLinkAlt style={{height:"1.4vh", position:'relative', left:"2px"}}/></Link>
            </div>
          </div>
        </section>
        <div className='typesbody'>
          <div className='Yogatypes'>Prenatal yoga</div>
          <div className='Yogatypes'>Astanga yoga</div>
          <div className='Yogatypes'>Kids yoga</div>
        </div>
      </div>
    </div>
  )
}

export default Forth