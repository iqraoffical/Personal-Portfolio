import React from "react";

// import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { SiLibreofficewriter } from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
function Services() {
  return (
    <main className="main">
      <div className="sec-container">
        {/* {Top div} */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
        </div>
        {/* {bottem div} */}
        <div className="card-container">
          <div className="box">
            <FaLaptopCode className="service-icon" />
            <h3>Web Development</h3>
            <p>
              Implementing UI/UX designs,
              codebase upgrades. Semantic HTML structure.I do create user
              friendly websites.
            </p>
          </div>
          <div className="box">
            <SiLibreofficewriter className="service-icon" />
            <h3>Content Writer</h3>
            <p>
             Every type of Web content I can write which is very essential for SEO of websites and Digital content can create. 
            </p>
          </div>
          <div className="box">
            <VscGraph className="service-icon" />
            <h3>Digital Marketing</h3>
            <p>
            Crafting impactful strategies to enhance online visibility and engagement.Driving results through SEO
            </p>
          </div>
        </div>
       
      </div>
    </main>
  );
}
export default Services;
