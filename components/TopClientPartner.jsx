import React from "react";

const TopClientPartner = ({ imgArry, className }) => {
  return (
    <section className={className}>
      <h1>Our Top Partners</h1>
      <div className="img-container">
        {imgArry.map((img, index) => (
          <li key={index}>
            <img src={`${img}`} />
          </li>
        ))}
      </div>
    </section>
  );
};

export default TopClientPartner;
