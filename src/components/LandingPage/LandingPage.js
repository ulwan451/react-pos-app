import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import beta from "../../asset/beta2.svg";

import imgPerson from "../../asset/notifications.svg";
import screen1 from "../../asset/login-screen1.svg";
import screen2 from "../../asset/login-screen2.svg";
import screen3 from "../../asset/login-screen3.svg";
import imageform from "../../asset/login-form.svg";

export default function LandingPage() {
  return (
    <>
      <div className="landingpage">
        <div className="left">
          <img className="person" src={imgPerson} alt="imgPerson" />
          <img className="screen1" src={screen1} alt="screen1" />
          <img className="screen2" src={screen2} alt="screen2" />
          <img className="screen3" src={screen3} alt="screen3" />
        </div>
        <div className="wrapper">
          <div className="right_side">
            <div></div>
          </div>
          <img className="header" src={imageform} alt="imageform" />
          <section>
            <img src={beta} alt="" width="50" />
            <h2>Point of Sale</h2>
            <p className="text-secondary">
              POS-Point of Sale a Aplications simple cashier.
            </p>
            <Link to="/register">
              <button className="button-daftar">Daftar</button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
