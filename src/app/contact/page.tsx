import React from "react";
export default function Contactsec() {
  return (
  <><div className="container">
    <section id="contactinfo" className="contact">
      <div className="main-text">
        <span>Ask Me Question</span>
        <h2>Contact Me</h2>
      </div>
      <form action="#" className="contact-form">
        <fieldset>
          <legend className="title">Contact Information</legend>
          <input type="text" placeholder="Your Name"></input>
          <input type="text" placeholder="Your Email"></input>
          <input type="text" placeholder="Your Address"></input>
          <input type="text" placeholder="Phone Number"></input>
          <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          required
        ></textarea>
        </fieldset>
        <div className="btn-box formbtn">
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  
  
    </div>



</>
  );
}