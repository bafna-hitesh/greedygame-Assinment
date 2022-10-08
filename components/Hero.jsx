import React from "react";
import TitleUnderline from "../public/TitleUnderline.svg";
import BoxOneImg from "../public/BoxOneImg.svg";
import BoxTwoImg from "../public/BoxTwoImg.svg";
import BoxThreeImg from "../public/BoxThreeImg.svg";
import BoxFourImg from "../public/BoxFourImg.svg";
import Form from "./Form";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div>
          <div className="hero-title">
            <span className="hero-bold-text">Result-oriented</span> <br />
            <span>
              <img
                src={TitleUnderline.src}
                alt="title underline"
                className="bold-text-underline"
              />
            </span>
          </div>

          <span className="hero-subtitle">
            performance campaigns for every objective
          </span>
        </div>
        <div className="hero-info-container">
          <div className="hero-info-box">
            <img src={BoxOneImg.src} alt="BoxOneImg" className="box-image" />
            <div className="info-box-subtitle">
              Self-serve platform with CPI starting at INR 1
            </div>
          </div>
          <div className="hero-info-box">
            <img src={BoxTwoImg.src} alt="BoxTwoImg" className="box-image" />
            <div className="info-box-subtitle">
              Self-serve platform with CPI starting at INR 1
            </div>
          </div>
          <div className="hero-info-box">
            <img
              src={BoxThreeImg.src}
              alt="BoxThreeImg"
              className="box-image"
            />
            <div className="info-box-subtitle">
              Self-serve platform with CPI starting at INR 1
            </div>
          </div>
          <div className="hero-info-box">
            <img src={BoxFourImg.src} alt="BoxFourImg" className="box-image" />
            <div className="info-box-subtitle">
              Self-serve platform with CPI starting at INR 1
            </div>
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default Hero;
