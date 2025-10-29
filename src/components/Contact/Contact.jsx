import React from 'react'
import {useState} from 'react';
import './Contact.css'
import envelope from "../../assets/envelope.png"
import arrows from "../../assets/arrows.png"
import telephone from "../../assets/telephone.png"

const Contact = () => {



    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "fc7ff429-28c9-44f2-a7b2-dda2b8a0b5e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
       alert("✅ Your message has been sent successfully!");
      event.target.reset();
    } else {
      setResult("Error");
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Connect with me for freelance projects or collaborations.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={envelope} alt=""></img><p>adityatambadkar153@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={telephone} alt=""></img><p>8356007604</p>
                    </div>
                    <div className="contact-detail">
                        <img src={arrows} alt=""></img><p>Mumbai, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlfor="">Your Name</label>
                <input type="text" placeholder="Enter your name" name='name'></input>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter ypur mail" name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                <button type="submit" className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact