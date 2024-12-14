import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="container">
      <section className="project">
        <h2>My Projects</h2>
        <div className="project-area">
          <div className="card">
            <Image
              src={"/images/resume.png"}
              width={200}
              height={200}
              alt="resume"
              className="resume-image"
            ></Image>
            <div>
              <a
                href="https://hecakton1-milestone3-dynamic-resume-builder.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <h3> Visit Resume Builder</h3>
                <p>This is a Resume Builder to make client resume.</p>
              </a>
            </div>
          </div>

          <div className="card">
            <Image
              src={"/images/ATS.png"}
              width={200}
              height={200}
              alt="resume"
              className="resume-image"
            ></Image>
            <div>
              <a
                href="https://resume-builder-five-indol.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                 <h3>Visit ATS Downloadable Resume Builder</h3>
                <p>This is a Resume Builder to generate client resume.</p>
              </a>
            </div>
          </div>

          <div className="card">
            <Image
              src={"/images/coffee website.png"}
              width={200}
              height={200}
              alt="resume"
              className="resume-image"
            ></Image>
            <div>
              <a
                href="https://coffee-business-website-awmt.vercel.app/our-services"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <h3>Visit Cofee Shop</h3>
                <p>This is a cofee shop website template.</p>
               
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
