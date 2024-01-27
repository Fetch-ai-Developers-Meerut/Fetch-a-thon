import { useState, useEffect } from 'react';
import { stats } from "../constants";
import styles from "../style";

const Sponser = () => {
  const [sponsorData, setSponsorData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('./data/sponsorData.json');
        const data = await response.json();
        setSponsorData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
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
        {sponsorData.map((sponsor) => (
          <div
            data-aos="flip-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            key={sponsor.id}
            className={`flex justify-start items-center flex-row m-3`}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="mr-2 " 
            />
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
              {sponsor.value}
            </h4>
          </div>
        ))}
      </section>
    </>
  );
};

export default Sponser;
