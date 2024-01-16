import React from "react";

const Button = ({ styles }) => (
  <a
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    href="https://www.commudle.com/communities/fetch-ai-developers-meerut/events/f-tech-hackathon"
    target="_blank"
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} shadow-md shadow-sky-500 `}
  >
    Register Now
  </a>
);

export default Button;
