import React from "react";
import ReactLoading from "react-loading";

const Bubbles = ({ type, color }) => (
  <div className="loading">
    <ReactLoading type={"bubbles"} color={"#bedc"} height={667} width={375} />
  </div>
);

export default Bubbles;
