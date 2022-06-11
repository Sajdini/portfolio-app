import React from "react";
import author from "../me.JPEG";

function About() {
  return (
    <div
      id="about"
      className="container "
      style={{ padding: "130px 12px 48px" }}
    >
      <div className="row d-flex align-items-center">
        <div className="col-lg-6 col-xm-12 d-flex align-items-center justify-content-center ">
          <div
            className="photo-wrap"
            style={{ width: "17rem", height: "15rem" }}
          >
            <img
              className="profile-img"
              src={author}
              alt="Author..."
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hi there! I am Samir Ajdini, a former financial assistant manager. I
            decided to let economics and finances in the past as i developed
            interest for web development, while trying to find a hobby during
            the pandemics. I fell in love instantly with developing websites,
            and i decided to try and adopt it as a profession, as i have always
            worried about having a job that will actually fulfill me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
