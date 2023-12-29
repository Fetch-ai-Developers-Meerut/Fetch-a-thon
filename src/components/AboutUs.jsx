import { apple, bill, google, aboutImage } from "../assets";
import styles, { layout } from "../style";

const AboutUs = () => (
  <section id="About" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={aboutImage}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2
        className={styles.heading2}
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        What is
        <br className="sm:block hidden" />{" "}
        <span
          className="text-gradient"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          Fetch-a-thon'24{" "}
        </span>
        ?
      </h2>
      <p
        className={`${styles.paragraph} max-w-[680px] mt-5`}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Fetch-A-Thon'24 is a premier event, a hackathon to be organized by
        FetchAI Developers Meerut, that brings together talented individuals in
        the field of AI and web3 technology. It serves as a platform for
        participants to showcase their skills, collaborate, and innovate, making
        significant contributions to the rapidly evolving technology landscape.
        This Hackathon is a unique opportunity for talented minds to showcase
        their coding prowess and creativity in seamless integration of AI
        capabilities with web3 technology.
      </p>
    </div>
  </section>
);

export default AboutUs;
