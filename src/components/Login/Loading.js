import React from "react";
import "./Loading.scss";
import Logo from "../../asset/beta2.svg";

export default function Loading() {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="inti">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-text">loading</div>
        </div>
      </div>
    </>
  );
}
