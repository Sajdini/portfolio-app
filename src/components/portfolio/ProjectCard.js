import React from "react";
import { FaSearchPlus } from "react-icons/fa";
const ProjectCard = (props) => {
  return (
    <div
      className="image-box-wrapper"
      onClick={props.clickHandler}
      id={props.data.id}
    >
      <div className="portfolio-image-box">
        <img
          className="portfolio-image"
          src={props.data.image}
          alt="Project "
        />
        <div
          className="overflow"
          style={{
            color: "#f9ab00",
            textAlign: "center",
            paddingTop: "10rem",
            fontWeight: "600",
          }}
        >
          {props.data.name}
        </div>
        <FaSearchPlus
          className="portfolio-icon"
          style={{ marginTop: "6rem" }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
