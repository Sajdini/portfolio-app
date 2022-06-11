import React from "react";
import ContactLinks from "./ContactLinks";
import FooterNavLinks from "./FooterNavLinks";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* Col 1 */}
            <div className="d-flex">
              <p>North Macedonia, Skopje, Chair, Strumicka 16 1-1</p>
            </div>
            {/* Col 2 */}
            <div className="d-flex">
              <a href="tel:+38970670731">+38970670731</a>
            </div>
            {/* Col 3 */}
            <div className="d-flex">
              <p>ajdinis1993@email.com</p>
            </div>
          </div>
          <FooterNavLinks />
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
