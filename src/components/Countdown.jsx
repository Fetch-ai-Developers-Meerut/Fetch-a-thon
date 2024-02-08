import React, { useEffect, useState } from "react";
import styles from "../style";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const registerEnd = new Date("10 February 2024 24:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const todayDate = new Date().getTime();
      const distance = registerEnd - todayDate;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(String(days).padStart(2, "0"));
        setTimerHours(String(hours).padStart(2, "0"));
        setTimerMinutes(String(minutes).padStart(2, "0"));
        setTimerSeconds(String(seconds).padStart(2, "0"));
      } else {
        clearInterval(timer);
        setTimerDays("00");
        setTimerHours("00");
        setTimerMinutes("00");
        setTimerSeconds("00");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [registerEnd]);
  return (
    <div className="w-full h-full flex justify-center items-center gap-2 text-3xl sm:text-5xl">
      <div
        className="flex flex-col items-center "
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div
          className={`${styles.flexCenter} bg-black-gradient-2 p-3 rounded-xl`}
        >
          {timerDays}
        </div>
        <span className="text-base">Days</span>
      </div>
      <div
        className="flex flex-col items-center"
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div
          className={`${styles.flexCenter} bg-black-gradient-2 p-3 rounded-xl`}
        >
          {timerHours}
        </div>
        <span className="text-base">Hours</span>
      </div>
      <div
        className="flex flex-col items-center"
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div
          className={`${styles.flexCenter} bg-black-gradient-2 p-3 rounded-xl`}
        >
          {timerMinutes}
        </div>
        <span className="text-base">Minutes</span>
      </div>
      <div
        className="flex flex-col items-center"
        data-aos="flip-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        <div
          className={`${styles.flexCenter} bg-black-gradient-2 p-3 rounded-xl`}
        >
          {timerSeconds}
        </div>
        <span className="text-base">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
