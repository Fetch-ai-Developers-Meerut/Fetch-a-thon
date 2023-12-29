import styles from "../style";
import {  fetch } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[53px] text-[34px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left">
            <span
              className="text-gradient"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-delay="200"
            >
              Fetch-A-Thon'24
            </span>
          </h1>
        </div>
        <p
          className={`${styles.paragraph} max-w-[480px] mt-5`}
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Dive into the future of decentralized intelligence at Fetchathon!
          Craft intelligent solutions with Fetch.ai's uAgent library, compete
          for glory, and forge connections in this coding odyssey. Join us on
          <span className="text-gradient font-bold"> 10th feb </span>for a
          journey where innovation knows no bounds.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={fetch}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
