import React from "react";

const Button = ({ styles, text, link }) => (
  <a
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    href={link}
    target="_blank"
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} shadow-md shadow-sky-500 `}
  >
    {text}
  </a>
);

export default Button;
