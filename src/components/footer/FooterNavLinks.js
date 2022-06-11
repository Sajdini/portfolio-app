import React from "react";
import Link from "react-scroll/modules/components/Link";
const FooterNavLinks = () => {
  return (
    <div className="col-lg-3 col-md-2 col-sm-6">
      <div className="row">
        {/* Col 1 */}
        <div className="col">
          <Link to="home" className="footer-nav">
            Home
          </Link>
          <br />
          <Link className="footer-nav" to="about">
            About me
          </Link>
          <br />
          <Link className="footer-nav" to="skills">
            Skills
          </Link>
        </div>
        <div className="col">
          <Link className="footer-nav" to="biography">
            Biography
          </Link>
          <br />
          <Link className="footer-nav" to="portfolio">
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterNavLinks;
