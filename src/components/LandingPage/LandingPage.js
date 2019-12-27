import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import beta from "../../asset/beta2.svg";
export default function LandingPage() {
  return (
    <>
      <div>
        <header>
          <div className="logos">
            <img src={beta} alt="logo" />
            Beta Pos
          </div>
          <ul className="ul-navbar">
            <li>Product</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </header>
        <main>
          <div className="left_side">
            <h1>BETA POS</h1>
            <h4>
              Do you need the coolest and the most awesome platform to manage
              your project?! You have walked to the right place!
            </h4>
            <button className="main_btn">
              <Link to="/register">Get Started</Link>
            </button>
            <button className="outline_btn">Learn More</button>
            <div className="social">
              <button className="outline_btn">
                <i className="fa fa-twitter" />
              </button>
              <button className="outline_btn">
                <i className="fa fa-linkedin" />
              </button>
              <button className="main_btn">
                <i className="fa fa-instagram" />
              </button>
            </div>
          </div>
          <div className="right_side">
            <div></div>
          </div>
        </main>
        <p className="show_more">
          See how we help great companies with their works{" "}
          <i className="fa fa-play-circle-o" />
        </p>
        <section>
          <div className="row">
            <div className="col-md-3">
              <div className="item">
                <button className="main_btn">
                  <i className="fa fa-puzzle-piece" />
                </button>
                <h5>easy to use</h5>
                <p>
                  Suspendisse in rhoncus mauris, non auctor nisi. Etiam
                  tincidunt lorem eget orci tempus malesuada.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="item">
                <button className="main_btn second">
                  <i className="fa fa-coffee" />
                </button>
                <h5>awesome support</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit duis
                  dictum augue.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text_content">
                <h2>Why choose us!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque convallis sapien ac arcu semper iaculis. Praesent eget
                  ante quis. Duis dictum augue sit amet enim condimentum
                  efficitur.
                </p>
                <button className="outline_btn">Learn More</button>
                <button className="outline_btn">
                  <i className="fa fa-play" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
