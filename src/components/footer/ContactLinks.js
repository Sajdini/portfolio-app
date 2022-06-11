import React from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsGoogle } from "react-icons/bs";

const ContactLinks = () => {
  return (
    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
      <div
        className="d-flex justify-content-center "
        style={{ height: "50px", gap: "2rem" }}
      >
        <a href="mailto:ajdinis1993@gmail.com">
          <BsGoogle style={{ height: "40px", width: "40px" }} />
        </a>

        <a href="https://github.com/Sajdini">
          <BsGithub style={{ height: "40px", width: "40px" }} />
        </a>
        <a href="https://www.linkedin.com/in/samir-ajdini/">
          <BsLinkedin style={{ height: "40px", width: "40px" }} />
        </a>
        <a href="https://www.facebook.com/samir.ajdini/">
          <BsFacebook style={{ height: "40px", width: "40px" }} />
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
