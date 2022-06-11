import React, { useState, useRef } from "react";

import { portfolioInfo } from "../data";
import { FaSearchPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import jsoncsv from "../json-to-csv-poster.png";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({});
  const projectRef = useRef();
  const closeModal = () => {
    setData({});
    setModalOpen(false);
  };

  const clickHandler = (e) => {
    console.log(e.currentTarget.id);
    const clickedProjectID = e.currentTarget.id;
    const selectedProject = portfolioInfo.filter(
      (obj) => obj.id == clickedProjectID
    );
    setData(selectedProject);
    console.log(selectedProject);
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
            return (
              <div
                className="image-box-wrapper"
                onClick={clickHandler}
                id={data.id}
                ref={projectRef}
              >
                <div className="portfolio-image-box">
                  <img
                    className="portfolio-image"
                    src={data.image}
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
                    {data.name}
                  </div>
                  <FaSearchPlus
                    className="portfolio-icon"
                    style={{ marginTop: "6rem" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalOpen && (
        <>
          <div className="backdropWindow" onClick={closeModal}></div>

          <div className="modalWindow">
            <AiFillCloseCircle size="4.5%" onClick={closeModal} />
            <h1>{data[0].name}</h1>
            <div className="image_wrapper">
              <img src={data[0].posterImg} alt="poster" />
            </div>
            <p>{data[0].description}</p>

            <a href={data[0].link} style={{ color: "#f9ab00" }}>
              Visit Website
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
