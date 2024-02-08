import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Participat = () => (
  <section id="about-us" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2
        className={styles.heading2}
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Why participate in <br className="sm:block hidden" />{" "}
        <span
          className="text-gradient"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
        >
          Fetch-A-Thon'24
        </span>
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-5`}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-delay="200"
      >
        Dream big, code bigger! Fetch-A-Thon'24 is your portal to a universe
        where AI meets web3 magic. Break barriers, craft innovations, and
        redefine the future. Don't just participate, pioneers!
      </p>

      <Button
        styles={`mt-10`}
        text={`Register Close`}
        link={``}
      />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Participat;
