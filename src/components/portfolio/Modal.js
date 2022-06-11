import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Modal = (props) => {
  return (
    <>
      <div className="backdropWindow" onClick={props.closeModal}></div>

      <div className="modalWindow">
        <AiFillCloseCircle size="4.5%" onClick={props.closeModal} />
        <h1>{props.data[0].name}</h1>
        <div className="image_wrapper">
          <img src={props.data[0].posterImg} alt="poster" />
        </div>
        <p>{props.data[0].description}</p>

        <a href={props.data[0].link} style={{ color: "#f9ab00" }}>
          Visit Website
        </a>
      </div>
    </>
  );
};

export default Modal;
