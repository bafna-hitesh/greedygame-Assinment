import React from "react";
import Dream11 from "../public/Dream11.png";

const Feedback = () => {
  return (
    <section className="feedback-sec">
      <div className="feedback-container">
        <h1>Hear it from Clients</h1>
        <div className="feedback-card">
          <img src={Dream11.src} className="feedback-card-img" />
          <div className="bold-text">
            22.4 Mn minutes of branding results in 25k high-quality
            registrations
          </div>
          <p className="feedback-card-para">
            The placement of clickable units natively placed on the main menu,
            gameplay screen and pause screen ensured high engagement,
            registrations and transactions.
          </p>
          <p className="read-text">Read Casestudy</p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
