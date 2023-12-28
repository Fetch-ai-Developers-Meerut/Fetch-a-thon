import React from "react";

const Button = ({ styles }) => (
  <a
    href="https://www.commudle.com/fill-form/2103"
    target="_blank"
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Register Now
  </a>
);

export default Button;
