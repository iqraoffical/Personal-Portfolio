import React from "react";

import "../style/hero.css";
import Image from "next/image";

function Herodiv() {
  return (
    <div className="header-container">
      <div className="hero-right-div">
        <h1 className="hero-title">
       <span className="name">   Hi,I am Iqra a passionate Web Developer,
       and Web Designer{" "}</span>
        </h1>
        <p className="paragraph">
          I am dedicated to building engaging, user-friendly websites and web
          applications.I create responsive,and visually appealing digital
          experiences.
        </p>

        <div className="custom-container">
          <button>
            <a href="#" className="custom-div">
              Hire Me
            </a>
          </button>

          <button>
            <a href="#" className="custom-div">
              Download CV
            </a>
          </button>
        </div>
      </div>

    
      <div className="header-boxes-con">
        <Image
          className="header-image"
          src={"/images/image.jpeg"}
          width={200}
          height={200}
          alt="professionalimage"
        ></Image>
      </div>
    
    
    </div>
  );
}
export default Herodiv;
