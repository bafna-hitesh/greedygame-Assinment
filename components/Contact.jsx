import React from "react";
import Group2439 from "../public/Group2439.svg";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-title">
        <p>
          {" "}
          Acquire{" "}
          <span className="demo">
            quality users,
            <span>
              <img
                src={Group2439.src}
                alt="title underline"
                className="text-underline"
              />
            </span>
          </span>{" "}
          not just installs
        </p>
        <br />
      </div>
      <p className="contact-para">
        Talk to us today and start creating mobile marketing campaigns that
        deliver results.
      </p>
    </section>
  );
};

export default Contact;
