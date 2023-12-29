import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <>
    <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
      <span
        className="text-gradient"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Sponsered By
      </span>
    </h1>
    <section
      className={`${styles.flexEvenly} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          data-aos="flip-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          key={stat.id}
          className={` flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          {/* <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p> */}
        </div>
      ))}
    </section>
  </>
);

export default Stats;
