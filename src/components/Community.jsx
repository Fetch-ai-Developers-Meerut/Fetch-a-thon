import { useState, useEffect } from "react";
import { stats } from "../constants";
import styles from "../style";

const Community = () => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/communityData.json");
        const data = await response.json();
        setCommunityData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left flex items-center justify-center p-10">
        <span
          className="text-gradient"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          Our Community Partner
        </span>
      </h1>
      <section
        className={`${styles.flexEvenly} flex-row flex-wrap sm:mb-20 mb-6`}
      >
        {communityData.map((community) => (
          <div
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            key={community.id}
            className={`flex justify-start items-center flex-col m-3`}
          >
            <img
              src={community.logo}
              alt={community.name}
              className="mr-2 rounded-xl"
              width={community.small ? 350 : 150}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Community;
