import React from "react";

import { BiCodeAlt, BiLibrary } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";

function Skills() {
  return (
    <div id="skills" className="skills" style={{ paddingTop: "5rem" }}>
      <h1 className="py-5">Skills</h1>
      <div className="container ">
        <div
          className="row d-flex justify-content-center "
          style={{ gap: "1rem" }}
        >
          {/* Col 1 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <RiComputerLine className="icon" size="70%" />
              </div>
              <h3>Web Design</h3>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li>Plain CSS</li>
                <li>Styled components</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>
          </div>
          {/* Col 2 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <BiCodeAlt className="icon" size="90%" />
              </div>
              <h3>Web Development</h3>
              <p>Javascript</p>
            </div>
          </div>
          {/* Col 3 */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <BiLibrary className="icon" size="75%" />
              </div>
              <h3>Libraries/Frameworks</h3>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li>Reactjs</li>
                <li>Nextjs</li>
                <li>React Redux</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
