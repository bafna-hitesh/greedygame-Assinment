const Form = () => {
  const inputs = [
    {
      id: 3,
      name: "Phone Number",
      type: "text",
      placeholder: "Please enter a Valid phone number with country code",
      errorMessage: "It's should be Number with (+) country code",
      label: "PhoneNumber",
      pattern: "^[+][0-9]{7,14}",
      required: true,
    },
    {
      id: 4,
      name: "App/Website Link",
      type: "text",
      placeholder: "Enter you App/Website you wish to monetise",
      label: "App/Website Link (optional)",
    },
    {
      id: 5,
      name: "Monthly Revenue (USD)",
      type: "text",
      placeholder: "Enter your Average monthly revenue in USD",
      errorMessage: "It's should be Number withi minimum 3 digit",
      label: "MonthlyRevenue",
      pattern: `[0-9]{3,16}`,
      required: true,
    },
  ];
  return (
    <div className="form-container" id="main-form">
      <div className="group-form">
        <div>
          <label className="label-name">Name</label>
          <input
            type="text"
            name="Name"
            className="form-input"
            placeholder="Enter your Full Name"
            pattern="^[A-Za-z]+$"
            required
          />
          <span className="err-msg">Enter valid Name</span>
        </div>
        <div>
          <label className="label-name">Email</label>
          <input
            type="email"
            name="Enail"
            className="form-input"
            placeholder="Enter Your Email Address"
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            required
          />
          <span className="err-msg">Invalid Email Address</span>
        </div>
      </div>
      {inputs.map(
        ({ label, name, type, placeholder, id, errorMessage, ...rest }) => (
          <div>
            <label className="label-name mrt">{label}</label>
            <input
              type={type}
              name={name}
              className="form-input full-width"
              placeholder={placeholder}
              {...rest}
            />
            <span className="err-msg">{errorMessage}</span>
          </div>
        )
      )}
      <button className="form-btn">Get Started</button>
      <p>
        By signing up, you agree to our{" "}
        <span className="link-style">Terms</span> and{" "}
        <span className="link-style"> Privacy Policy</span>{" "}
      </p>
    </div>
  );
};

export default Form;
