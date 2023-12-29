import styles from "../style";
import { logo } from "../assets";
import { navLinks, socialMedia } from "../constants";
import { Link } from "react-scroll";

const Footer = () => (
  <div class="w-full flex items-center justify-center">
    <div class="w-full px-4 text-white flex flex-col">
      <div class="flex flex-col">
        <div class="flex mt-24 mb-12 flex-row justify-between items-center">
          <div>
            <img
              src={logo}
              alt="hoobank"
              className="w-[250px] h-[70px] object-contain"
            />
            <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
              An open platform for the new AI economy.
            </p>
          </div>
          {navLinks.map((nav, index) => (
            <Link className="text-gray-400 hover:text-white" to={`${nav.id}`}>
              {nav.title}
            </Link>
          ))}
          <div class="flex flex-row space-x-8 items-center justify-between">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
        <hr class="border-gray-600" />
        <p class="w-full text-center my-8 text-white  ">
          Designed by{" "}
          <a
            href="https://www.linkedin.com/in/dev-chauhan-44ba15247/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-gray-400"
          >
            Dev Chauhan
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/gautammanak1/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-gray-400"
          >
            Gautam Mannak
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
