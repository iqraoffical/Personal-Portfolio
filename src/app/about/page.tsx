import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section id="about">
      <div className="container">
        {/* {left} */}
        <div>
          <Image
            className="sec-image"
            src={"/images/th.jpeg"}
            alt="about"
            width={250}
            height={250}
          ></Image>
        </div>
        {/* {right} */}
        <div className="about">
          <h1>
            <span>About Me</span>
          </h1>
          <p>
            I specialize in designing and developing highly interactive and
            responsive web solutions that deliver seamless user experiences.
            With a focus on innovation and functionality, I bring ideas to life
            through engaging and dynamic web development.Currently I am learning
            more expertise in skills at GIAIC.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
