import { useEffect, useState } from "react";
import "../styles/Timeline.scss";

export default function TimelineSection() {
  const [timeLineData, setTimeLineData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/timeline.json");
        const data = await response.json();
        setTimeLineData(data);
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className=" flex items-center justify-center min-h-screen flex-col py-[40px] px-[20px]"
      id="Timeline"
    >
      <h1
        className="timeline-heading text-white text-center z-10 "
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
         <br className="sm:block hidden" />{" "}
        <span className="text-gradient">Fetch-A-Thon</span>
      </h1>

      <section className="timeline-section bg-transparent">
        <div
          className="relative timeline-items bg-transparent"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {/* Gradient start  */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* Gradient end  */}
          {timeLineData.map((data) => (
            <div key={data.id} className="timeline-item">
              <div
                className="timeline-dot"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              ></div>
              {data.date && (
                <div
                  className="timeline-date bg-transparent"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                >
                  {data.date}
                </div>
              )}

              <div
                className="timeline-content"
                data-aos="flip-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <h3>{data.heading}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
