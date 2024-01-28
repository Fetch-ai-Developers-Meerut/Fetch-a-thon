import styles from "../style";
import Button from "./Button";
import Countdown from "./Countdown";

const Timer = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} justify-around sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className=" flex flex-col">
      <h2 className={`${styles.heading2} text-center text-gradient`}>
        Registration Closing in!
      </h2>
      <p className={`text-white max-w-[470px] sm:self-start mt-5`}>
        <Countdown />
      </p>
    </div>

    <div
      className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 flex-col gap-3`}
    >
      <Button
        styles={`sm:text-xl text-lg font-semibold mb-3 sm:mb-0`}
        text={`Team Registartion`}
        link={`https://www.commudle.com/fill-form/2141`}
      />
    </div>
  </section>
);

export default Timer;
