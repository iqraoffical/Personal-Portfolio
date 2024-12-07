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
              src={"/images/cofee.png"}
              width={200}
              height={200}
              alt="resume"
              className="resume-image"
            ></Image>
            <div>
              <a
                href="https://dribbble.com/tags/coffee-shop-website"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <h3>Visit Cofee Shop</h3>
                <p>This is a cofee shop website template.</p>
              </a>
            </div>
          </div>

          <div className="card">
            <Image
              src={"/images/login.png"}
              width={200}
              height={200}
              alt="resume"
              className="resume-image"
            ></Image>
            <div>
              <a
                href="https://login-account-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                <h3>Visit Login Form</h3>
                <p>
                  This is a form to make client to access or login for any
                  website.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
