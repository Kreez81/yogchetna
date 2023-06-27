import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Girlyoga from "../../Assets/girl-doing-yoga.svg";
import "./Contact.css"
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mo61e5a', 'template_0fd5fmv', form.current, 'slqbPA4Z8ny6DVV6H')
      .then((result) => {
          console.log(result.text);
          alert("Message sent")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong")
      });
      form.current.reset();
  };

  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(230, 217, 190)" }}>
      <Link to="/" className='NameH' style={{ color: "black" }}>Yogchetna</Link>
      <Link to="/" className='backbutt'>Return</Link> 
      <div className='conmain'>
        <img className='formyogapose' src={Girlyoga} alt='' />
        <div className='formmain'>
         <form ref={form} onSubmit={sendEmail}>
            <text style={{display:"flex",alignSelf:"center",marginBottom:"20px", fontSize:"2.4vh"}}>Get in touch with us</text>
            <label>Name:</label>
            <input type="text" id="full_name" name="full_name" />

            <label>Email:</label>
            <input type="email" id="email_id" name="email_id" />

            <label>Phone Number:</label>
            <input type="tel" name="phone" />

            <label>Message:</label>
            <input type="text" name="message" />

            <input type="submit" value="Send" style={{display:"flex",alignSelf:"center",justifyContent:"center", width:"25%",cursor:"pointer",backgroundColor:"antiquewhite",marginTop:"15px"}} />
          </form>
        </div>
      </div>
      <div className='details'>
        <section>
            <IoLocationSharp/>&ensp;Address -<br/>
            &ensp;Hall No. 201, 53-C, Indrapuri, Bhopal (M.P.)
        </section>
        <section>
            <FaPhoneAlt/>&ensp;Lets talk!<br/>
            &ensp;+91- 6268383459
        </section>
        <section>
        <GrMail/>&ensp;Email us!<br/>
            &ensp;yog.chetna17@gmail.com
        </section>
      </div>
    </div>

  )
}

export default Contact