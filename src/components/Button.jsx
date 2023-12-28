import React from "react";
import { Link } from "react-scroll";

const Button = ({ styles }) => (
  <Link to="" type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Register Now
  </Link>
);

export default Button;
