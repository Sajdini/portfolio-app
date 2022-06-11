import React from "react";
import { biographyData } from "../data";
function Biography() {
  return (
    <div id="biography" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Brief biography timeline</h1>
      </div>
      <div className="container experience-wrapper">
        {biographyData.map((data, index) => {
          return (
            <div
              key={index}
              className={`timeline-block timeline-block-${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{data.age}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Biography;
