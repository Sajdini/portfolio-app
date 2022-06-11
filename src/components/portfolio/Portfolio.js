import React, { useState } from "react";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import { portfolioInfo } from "../../data";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});

  const closeModal = () => {
    setData({});
    setModalOpen(false);
  };

  const clickHandler = (e) => {
    const clickedProjectID = e.currentTarget.id;
    const selectedProject = portfolioInfo.filter(
      (obj) => obj.id == clickedProjectID
    );
    setData(selectedProject);
    setModalOpen(true);
  };

  return (
    <div
      id="portfolio"
      className="portfolio-wrapper"
      style={{ paddingBottom: "6rem", zIndex: 5 }}
    >
      <div className="container ">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="d-flex flex-wrap">
          {portfolioInfo.map((data) => {
            return <ProjectCard data={data} clickHandler={clickHandler} />;
          })}
        </div>
      </div>

      {modalOpen && <Modal data={data} closeModal={closeModal} />}
    </div>
  );
};

export default Portfolio;
